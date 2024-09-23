import { FormValues } from "@/types/types";
import useAddEditForm from "../hooks/useAddEditForm";
import {
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";

export default function AddEditForm({ formValue }: { formValue?: FormValues }) {
  const {
    register,
    handleSubmit,
    onSubmit,
    infoFields,
    statFields,
    appendInfo,
    appendStat,
    removeInfo,
    removeStat,
    platform,
  } = useAddEditForm(formValue);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <TextField
            label="Social Handle"
            variant="standard"
            className="mb-3"
            {...register("handle")}
          />

          <div className="w-1/2 mb-3">
            <InputLabel id="platform-select-label">Platform</InputLabel>
            <Select
              labelId="platform-select-label"
              id="platform-select"
              label="Platform"
              variant="standard"
              {...register("platform")}
              value={platform}
              fullWidth
            >
              <MenuItem value="Facebook">Facebook</MenuItem>
              <MenuItem value="Instagram">Instagram</MenuItem>
              <MenuItem value="x">X</MenuItem>
              <MenuItem value="LinkedIn">LinkedIn</MenuItem>
              <MenuItem value="YouTube">YouTube</MenuItem>
              <MenuItem value="Reddit">Reddit</MenuItem>
              <MenuItem value="TikTok">TikTok</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </div>

          <div className="mb-3">
            {infoFields.map((field, index) => (
              <div key={field.id} className="flex items-center">
                <TextField
                  label="Information"
                  variant="standard"
                  {...register(`information.${index}.key` as const)}
                  sx={{ marginRight: 2 }}
                />
                <TextField
                  label="Value"
                  variant="standard"
                  {...register(`information.${index}.value` as const)}
                />
                <IconButton onClick={() => removeInfo(index)}>
                  <RemoveCircle color="secondary" />
                </IconButton>
              </div>
            ))}
            <Button
              startIcon={<AddCircleIcon />}
              onClick={() => appendInfo({ key: "", value: "" })}
            >
              Add New Information
            </Button>
          </div>

          <div className="mb-3">
            {statFields.map((field, index) => (
              <div key={field.id} className="flex items-baseline">
                <TextField
                  label="Statistic"
                  variant="standard"
                  {...register(`statistics.${index}.key` as const)}
                  sx={{ marginRight: 2 }}
                />
                <TextField
                  label="Value"
                  variant="standard"
                  type="number"
                  {...register(`statistics.${index}.value` as const)}
                />
                <IconButton onClick={() => removeStat(index)}>
                  <RemoveCircle color="secondary" />
                </IconButton>
              </div>
            ))}
            <Button
              startIcon={<AddCircleIcon />}
              onClick={() => appendStat({ key: "", value: 0 })}
            >
              Add New Statistics
            </Button>
          </div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
