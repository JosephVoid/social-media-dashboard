import { FormValues } from "@/types/types";
import { useFieldArray, useForm } from "react-hook-form";

export default function useAddEditForm(preset?: FormValues) {
  const { register, handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      handle: preset?.handle ?? "",
      platform: preset?.platform ?? "",
      statistics: preset?.statistics ?? [],
      information: preset?.information ?? [],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
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
  };
}
