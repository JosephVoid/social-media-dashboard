import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  Divider,
  Popover,
  Paper,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SocialIcon from "./social-icon";
import { SocialCard } from "@/types/types";
import PostCard from "./post-card";
import React from "react";
import AddEditForm from "@/components/shared/forms/add-edit-form";
import { Edit, Delete } from "@mui/icons-material";
import Modal from "@/components/shared/modal";
import DeleteForm from "@/components/shared/forms/delete-form";
import { useGetRecentPostQuery } from "@/redux/rtk-query/social-service";

export default function Social({ data }: { data: SocialCard }) {
  const [modalState, setModalState] = React.useState<
    "EDIT" | "DELETE" | "NONE"
  >("NONE");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const { data: postData, isLoading } = useGetRecentPostQuery(data.id);

  return (
    <Card sx={{ maxWidth: 350 }} className="mr-3">
      <CardHeader
        avatar={<SocialIcon social={data.icon} />}
        action={
          <>
            <IconButton
              aria-describedby="card-menu"
              aria-label="settings"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Popover
              id={"card-menu"}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
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
                      <Delete fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove</ListItemText>
                  </MenuItem>
                </MenuList>
                <Modal
                  open={modalState !== "NONE"}
                  onClose={() => setModalState("NONE")}
                  content={
                    modalState === "EDIT" ? (
                      <AddEditForm
                        Social={{
                          id: data.id,
                          icon: data.icon,
                          handle: data.handle,
                          platform: data.platform,
                          information: data.information,
                          statistics: data.statistics,
                        }}
                        onComplete={() => setModalState("NONE")}
                      />
                    ) : (
                      <DeleteForm
                        onComplete={() => setModalState("NONE")}
                        id={data.id}
                      />
                    )
                  }
                  title={
                    modalState === "EDIT"
                      ? "Edit Social Media Account"
                      : "Delete Social Media Account"
                  }
                />
              </Paper>
            </Popover>
          </>
        }
        title={data.handle}
        subheader={data.platform}
      />
      <CardContent>
        <Typography
          fontWeight={900}
          display={data.information ? "block" : "none"}
        >
          General Info
        </Typography>
        {data.information?.map((info, index) => (
          <div className="flex justify-between" key={index}>
            <Typography variant="caption">{info.key}</Typography>
            <Typography variant="caption">{info.value}</Typography>
          </div>
        ))}
        <Divider className={`my-3 ${data.information ? "" : "hidden"}`} />
        <Typography fontWeight={900}>Statistics</Typography>
        {data.statistics?.map((stats, index) => (
          <div className="flex justify-between" key={index}>
            <Typography variant="caption">{stats.key}</Typography>
            <Typography variant="caption" fontWeight={600}>
              {stats.value}
            </Typography>
          </div>
        ))}
        <Divider className={`my-3 ${postData ? "" : "hidden"}`} />
        <Typography fontWeight={900} display={postData ? "block" : "none"}>
          Posts
        </Typography>
        {!isLoading && postData && <PostCard {...postData} />}
      </CardContent>
    </Card>
  );
}
