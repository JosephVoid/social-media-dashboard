import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import React from "react";

export default function Modal({
  open,
  content,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}
