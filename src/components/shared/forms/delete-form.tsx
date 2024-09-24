import { useRemoveSocialMutation } from "@/redux/rtk-query/social-service";
import { Button, Typography } from "@mui/material";

export default function DeleteForm({
  onComplete,
  id,
}: {
  onComplete: () => void;
  id: string;
}) {
  const [removeSocial] = useRemoveSocialMutation();

  async function onDeleteHandler() {
    await removeSocial(id);
    onComplete();
  }

  return (
    <div>
      <Typography variant="h5">
        Are you sure you want to remove this account?
      </Typography>
      <div className="flex flex-row justify-between mt-3">
        <Button variant="contained" color="primary" onClick={onDeleteHandler}>
          Confirm
        </Button>
        <Button variant="text" color="secondary" onClick={onComplete}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
