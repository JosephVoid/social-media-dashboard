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
          statistics: [
            { key: "Views", value: 45 },
            { key: "Engagement", value: 50 },
          ],
        }}
        posts={[
          {
            id: "1",
            datePosted: "25/09/24",
            likes: 45,
            postCaption: "IntroPost",
          },
        ]}
      />
    </div>
  );
}
