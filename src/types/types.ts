export type SocialPlatform =
  | "FACEBOOK"
  | "X"
  | "INSTAGRAM"
  | "LINKEDIN"
  | "YOUTUBE"
  | "REDDIT"
  | "TIKTOK"
  | "OTHER";

export type SocialCard = {
  id: string;
  icon: SocialPlatform;
  handle: string;
  platform: string;
  statistics?: { key: string; value: number }[];
  information?: { key: string; value: string }[];
};

export type Post = {
  id: string;
  datePosted: string;
  postImage?: string;
  postCaption: string;
  likes: number;
};

export type FormValues = Pick<
  SocialCard,
  "handle" | "platform" | "information" | "statistics"
>;

export type User = {
  displayName: string;
  username: string;
};
