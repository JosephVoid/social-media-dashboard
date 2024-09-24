import Social from "@/components/dashboard/social/";
import { useGetSocialsQuery } from "@/redux/rtk-query/social-service";
import Loader from "../shared/loader";

export default function Dashboard() {
  const { data, isLoading } = useGetSocialsQuery({});

  return (
    <div className="p-3 flex flex-r">
      {isLoading ? (
        <Loader />
      ) : (
        data?.map((social) => (
          <Social
            key={social.id}
            data={social}
            posts={[
              {
                id: "1",
                datePosted: "25/09/24",
                likes: 45,
                postCaption: "IntroPost",
              },
            ]}
          />
        ))
      )}
    </div>
  );
}
