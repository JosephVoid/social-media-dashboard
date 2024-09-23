import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import React from "react";

export default function Modal({
  open,
  content,
  title,
  onClose,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  content: React.ReactNode;
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}
