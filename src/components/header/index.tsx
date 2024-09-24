import { Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PlusIcon from "@mui/icons-material/Add";
import Modal from "@/components/shared/modal";
import React from "react";
import AddEditForm from "../shared/forms/add-edit-form";

export default function Header() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <div className="p-3 mb-4">
      <div className="flex justify-start items-center mb-3">
        <HomeIcon sx={{ fontSize: 50, marginRight: 1 }} color="secondary" />
        <Typography variant="h3" color="primary">
          Overview
        </Typography>
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
    </div>
  );
}
