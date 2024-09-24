import {
  useAddNewSocialMutation,
  useUpdateSocialMutation,
} from "@/redux/rtk-query/social-service";
import { FormValues, SocialCard, SocialPlatform } from "@/types/types";
import { useFieldArray, useForm } from "react-hook-form";
import { generateRandomId } from "../utils/utils";
import { useState } from "react";

export default function useAddEditForm(
  onDone: () => void,
  preset?: SocialCard
) {
  const [addSocial] = useAddNewSocialMutation();
  const [updateSocial] = useUpdateSocialMutation();
  const [formLoading, setFormLoading] = useState(false);

  const { register, handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      handle: preset?.handle ?? "",
      platform: preset?.platform ?? "",
      statistics: preset?.statistics ?? [],
      information: preset?.information ?? [],
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      if (preset) {
        // Editing
        setFormLoading(true);
        const updatedSocialItem = { ...preset, ...data } as SocialCard;
        await updateSocial(updatedSocialItem);
        setFormLoading(false);
        onDone();
      } else {
        // Adding
        setFormLoading(true);
        const newSocialItem: SocialCard = {
          ...data,
          id: generateRandomId(),
          icon: data.platform.toUpperCase() as SocialPlatform,
        };
        await addSocial(newSocialItem);
        setFormLoading(false);
        onDone();
      }
    } catch (error) {
      console.log(data);
      setFormLoading(false);
    }
  };

  const {
    fields: statFields,
    append: appendStat,
    remove: removeStat,
  } = useFieldArray({
    control,
    name: "statistics",
  });

  const {
    fields: infoFields,
    append: appendInfo,
    remove: removeInfo,
  } = useFieldArray({
    control,
    name: "information",
  });

  const platform = watch("platform");

  return {
    control,
    statFields,
    infoFields,
    appendStat,
    appendInfo,
    removeStat,
    removeInfo,
    handleSubmit,
    onSubmit,
    register,
    platform,
    formLoading,
  };
}
