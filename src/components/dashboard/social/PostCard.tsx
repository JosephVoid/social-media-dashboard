import { Post } from "@/types/types";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function PostCard(data: Post) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 1 }} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50px"
          image={data.postImage}
          className="max-h-28"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            Posted On {data.datePosted}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            gutterBottom
          >
            {data.postCaption}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {data.likes} Likes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
