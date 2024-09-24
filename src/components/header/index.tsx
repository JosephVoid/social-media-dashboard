import { Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PlusIcon from "@mui/icons-material/Add";
import Modal from "@/components/shared/modal";
import React from "react";
import AddEditForm from "../shared/forms/add-edit-form";
import SignInForm from "../shared/forms/sign-in-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setUser } from "@/redux/user-slice";

export default function Header() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [signInmodalOpen, setSignInModalOpen] = React.useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user);
  const isSignedIn = user.displayName !== "" && user.username !== "";
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(setUser({ username: "", displayName: "" }));
  }

  return (
    <div className="p-3 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center mb-3">
          <HomeIcon sx={{ fontSize: 50, marginRight: 1 }} color="secondary" />
          <Typography variant="h3" color="primary">
            Overview
          </Typography>
        </div>
        <div>
          <Typography variant="body2" className="mb-2">
            {isSignedIn
              ? `${user.displayName}(${user.username})`
              : "Not Signed In"}
          </Typography>
          {isSignedIn ? (
            <Button variant="text" size="small" onClick={handleSignOut}>
              Sign out
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              onClick={() => setSignInModalOpen(true)}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
      <Button
        startIcon={<PlusIcon />}
        variant="contained"
        size="small"
        onClick={() => setModalOpen(true)}
      >
        Add Social Media Account
      </Button>
      <Modal
        open={modalOpen}
        content={<AddEditForm onComplete={() => setModalOpen(false)} />}
        onClose={() => setModalOpen(false)}
        title="Add New Social Media Account"
      />
      <Modal
        open={signInmodalOpen}
        content={<SignInForm onComplete={() => setSignInModalOpen(false)} />}
        onClose={() => setSignInModalOpen(false)}
        title="Sign In"
      />
    </div>
  );
}
