import WithdrawalTable from "@/components/dashboard_components/tables/WithdrawalTable";
import WalletCardDisplay from "@/components/dashboard_components/WalletCardDisplay";
import Loader from "@/helpers/Loader";
import {
  FetchUsersrWallet,
  FetchUsersWithdrawals,
} from "@/services/features/wallet/walletSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Withdrawals = () => {
  const { isLoading, Withdrawals } = useSelector((state: any) => state.wallet);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchUsersWithdrawals());
    dispatch(FetchUsersrWallet());
  }, []);

  if (isLoading && !Withdrawals) return <Loader />;

  return (
    <div>
      <div className="mb-5">
        <h1
          className="text-lg font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Withdrawals
        </h1>
        <p className="text-xs text-gray-400 mt-0.5">
          Review and manage withdrawal requests
        </p>
      </div>

      <div className="grid sm:grid-cols-[220px_1fr] grid-cols-1 gap-4">
        {/* Stats sidebar */}
        <WalletCardDisplay />

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <WithdrawalTable />
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;
