import AllReferralsTables from "@/components/dashboard_components/tables/AllReferralsTables";
import PageHeader from "@/components/ui/PageHeader";
import Loader from "@/helpers/Loader";
import { FetchReferralDetails } from "@/services/features/referral/referralSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Referrals = () => {
  const { isLoading, referrals } = useSelector((state: any) => state.referral);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchReferralDetails());
  }, []);

  return (
    <div>
      <PageHeader
        title="All Referrals"
        subtitle={`${referrals?.length ?? 0} referral${referrals?.length !== 1 ? "s" : ""} total`}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <AllReferralsTables data={referrals} />
        </div>
      )}
    </div>
  );
};

export default Referrals;
