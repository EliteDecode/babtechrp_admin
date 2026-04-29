import AllUsersTables from "@/components/dashboard_components/tables/AllUserssTables";
import PageHeader from "@/components/ui/PageHeader";
import Loader from "@/helpers/Loader";
import { FetchUserDetails } from "@/services/features/user/userSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const { isLoading, users } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchUserDetails());
  }, []);

  return (
    <div>
      <PageHeader
        title="All Users"
        subtitle={`${users?.length ?? 0} user${users?.length !== 1 ? "s" : ""} registered`}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <AllUsersTables />
        </div>
      )}
    </div>
  );
};

export default Users;
