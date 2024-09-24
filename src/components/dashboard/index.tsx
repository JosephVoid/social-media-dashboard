import Social from "@/components/dashboard/social/";
import { useGetSocialsQuery } from "@/redux/rtk-query/social-service";
import Loader from "../shared/loader";

export default function Dashboard() {
  const { data, isLoading } = useGetSocialsQuery({});

  return (
    <div className="md:p-3 p-0 flex md:flex-row flex-col">
      {isLoading ? (
        <Loader />
      ) : (
        data?.map((social) => <Social key={social.id} data={social} />)
      )}
    </div>
  );
}
