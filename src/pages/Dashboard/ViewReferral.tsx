import ReferralDetails from "@/components/dashboard_components/ReferralDetails";
import PageHeader from "@/components/ui/PageHeader";
import Loader from "@/helpers/Loader";
import { FetchSingleReferralDetails } from "@/services/features/referral/referralSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewReferral = () => {
  const { referralId } = useParams();
  const { isLoading, singleReferral } = useSelector(
    (state: any) => state.referral
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (referralId) dispatch(FetchSingleReferralDetails(referralId));
  }, []);

  if (isLoading && !singleReferral) return <Loader />;

  return (
    <div>
      <PageHeader
        title="Referral Details"
        backHref="/dashboard/referrals"
        backLabel="Back to Referrals"
      />
      <div className="bg-white rounded-xl border border-gray-100 p-5 max-w-2xl">
        <ReferralDetails />
      </div>
    </div>
  );
};

export default ViewReferral;
