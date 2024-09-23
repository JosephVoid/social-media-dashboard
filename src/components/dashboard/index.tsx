import Social from "@/components/dashboard/social/";

export default function Dashboard() {
  return (
    <div className="p-3">
      <Social
        data={{
          id: "1",
          handle: "hanlde",
          icon: "FACEBOOK",
          platform: "Facebook",
          stats: { Views: 50, Engagement: 45 },
        }}
        posts={[
          {
            datePosted: "25/09/24",
            likes: 45,
            postCaption: "IntroPost",
          },
        ]}
      />
    </div>
  );
}
