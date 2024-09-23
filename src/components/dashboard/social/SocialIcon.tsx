import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import PublicIcon from "@mui/icons-material/Public";
import { SocialPlatform } from "@/types/types";
import { red, blue, orange, pink, grey } from "@mui/material/colors";

const TikTokIcon = ({ color = "#000000" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="100%"
      height="100%"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

export default function SocialIcon({ social }: { social: SocialPlatform }) {
  switch (social) {
    case "FACEBOOK":
      return <FacebookIcon sx={{ color: blue["900"] }} fontSize="large" />;
    case "INSTAGRAM":
      return <InstagramIcon sx={{ color: pink["A700"] }} fontSize="large" />;
    case "LINKEDIN":
      return <LinkedInIcon sx={{ color: blue["900"] }} fontSize="large" />;
    case "REDDIT":
      return <RedditIcon sx={{ color: orange["900"] }} fontSize="large" />;
    case "X":
      return <XIcon sx={{ color: grey["900"] }} fontSize="large" />;
    case "YOUTUBE":
      return <YouTubeIcon sx={{ color: red["A700"] }} fontSize="large" />;
    case "TIK TOK":
      return <TikTokIcon />;
    case "OTHER":
      return <PublicIcon fontSize="large" />;
    default:
      return <PublicIcon fontSize="large" />;
  }
}
