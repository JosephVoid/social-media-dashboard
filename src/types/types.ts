export type SocialPlatform =
  | "FACEBOOK"
  | "X"
  | "INSTAGRAM"
  | "LINKEDIN"
  | "YOUTUBE"
  | "REDDIT"
  | "TIK TOK"
  | "OTHER";

export type SocialCard = {
  id: string;
  icon: SocialPlatform;
  handle: string;
  platform: String;
  stats: Record<string, number>;
  info?: Record<string, string>;
};

export type Post = {
  datePosted: string;
  postImage?: string;
  postCaption: string;
  likes: number;
};
