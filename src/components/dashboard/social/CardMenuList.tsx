import {
  Paper,
  MenuItem,
  ListItemIcon,
  ListItemText,
  MenuList,
} from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Remove from "@mui/icons-material/Delete";
import Modal from "@/components/shared/modal";
import { useState } from "react";

export default function CardMenuList() {
  const [modalState, setModalState] = useState<"EDIT" | "DELETE" | "NONE">(
    "NONE"
  );

  return (
    <Paper>
      <MenuList>
        <MenuItem onClick={() => setModalState("EDIT")}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setModalState("DELETE")}>
          <ListItemIcon>
            <Remove fontSize="small" />
          </ListItemIcon>
          <ListItemText>Remove</ListItemText>
        </MenuItem>
      </MenuList>
      <Modal
        open={modalState !== "NONE"}
        onClose={() => setModalState("NONE")}
        content={<p>Heyy</p>}
      />
    </Paper>
  );
}
