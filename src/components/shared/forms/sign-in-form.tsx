import { User } from "@/types/types";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/user-slice";

export default function SignInForm({ onComplete }: { onComplete: () => void }) {
  const { handleSubmit, register } = useForm<User>();
  const dispatch = useDispatch();

  function onSubmit(data: User) {
    dispatch(setUser(data));
    onComplete();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <TextField
          label="Display Name"
          variant="standard"
          className="mb-3"
          {...register("displayName")}
        />
        <TextField
          label="Username"
          variant="standard"
          className="mb-3"
          {...register("username")}
        />
        <Button variant="contained" type="submit">
          Sign In
        </Button>
      </div>
    </form>
  );
}
