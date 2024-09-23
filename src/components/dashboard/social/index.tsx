import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  Divider,
  Button,
  Popover,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SocialIcon from "./SocialIcon";
import { Post, SocialCard } from "@/types/types";
import PostCard from "./PostCard";
import React from "react";
import CardMenuList from "./CardMenuList";

export default function Social({
  data,
  posts = [],
}: {
  data: SocialCard;
  posts?: Post[];
}) {
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

  return (
    <Card sx={{ maxWidth: 300 }}>
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
              <CardMenuList />
            </Popover>
          </>
        }
        title={data.handle}
        subheader={data.platform}
      />
      <CardContent>
        <Typography fontWeight={900} display={data.info ? "block" : "none"}>
          General Info
        </Typography>
        {Object.entries(data.info ?? []).map(([key, value]) => (
          <div className="flex justify-between">
            <Typography>{key}</Typography>
            <Typography>{value}</Typography>
          </div>
        ))}
        <Divider className={`my-3 ${data.info ? "" : "hidden"}`} />
        <Typography fontWeight={900}>Statistics</Typography>
        {Object.entries(data.stats).map(([key, value]) => (
          <div className="flex justify-between">
            <Typography>{key}</Typography>
            <Typography fontWeight={600}>{value}</Typography>
          </div>
        ))}
        <Divider className={`my-3 ${posts.length !== 0 ? "" : "hidden"}`} />
        <Typography
          fontWeight={900}
          display={posts.length !== 0 ? "block" : "none"}
        >
          Posts
        </Typography>
        {posts.map((post) => (
          <PostCard {...post} />
        ))}
        <div className="text-center">
          <Button size="small">Show More</Button>
        </div>
      </CardContent>
    </Card>
  );
}
