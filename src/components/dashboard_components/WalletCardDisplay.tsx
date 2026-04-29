import { IWithdrawal } from "@/types/wallet.types";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useSelector } from "react-redux";

import approvedIcon from "@/assets/icons/check-mark.png";
import pendingIcon from "@/assets/icons/time-management.png";
import declinedIcon from "@/assets/icons/declined.png";

const WalletCardDisplay = () => {
  const { withdrawals } = useSelector((state: any) => state.wallet);

  const pending = withdrawals
    ?.filter((w: IWithdrawal) => w?.status === "pending")
    ?.reduce((acc: number, curr: IWithdrawal) => acc + curr.amount, 0) || 0;
  const approved = withdrawals
    ?.filter((w: IWithdrawal) => w?.status === "approved")
    ?.reduce((acc: number, curr: IWithdrawal) => acc + curr.amount, 0) || 0;
  const declined = withdrawals
    ?.filter((w: IWithdrawal) => w?.status === "declined")
    ?.reduce((acc: number, curr: IWithdrawal) => acc + curr.amount, 0) || 0;
  const total = pending + approved + declined;

  const approvedPct = total > 0 ? ((approved / total) * 100).toFixed(1) : "0.0";
  const pendingPct = total > 0 ? ((pending / total) * 100).toFixed(1) : "0.0";
  const declinedPct = total > 0 ? ((declined / total) * 100).toFixed(1) : "0.0";

  const cards = [
    {
      title: "Approved",
      value: `₦${approved.toLocaleString()}`,
      pct: `${approvedPct}%`,
      positive: true,
      icon: approvedIcon,
      color: "bg-green-50",
    },
    {
      title: "Pending",
      value: `₦${pending.toLocaleString()}`,
      pct: `${pendingPct}%`,
      positive: false,
      icon: pendingIcon,
      color: "bg-orange-50",
    },
    {
      title: "Declined",
      value: `₦${declined.toLocaleString()}`,
      pct: `${declinedPct}%`,
      positive: false,
      icon: declinedIcon,
      color: "bg-red-50",
    },
  ];

  return (
    <div className="space-y-3">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-100 p-4 hover:border-primary/20 transition-all">
          <div className="flex items-start justify-between mb-2">
            <div className={`w-9 h-9 rounded-xl ${card.color} flex items-center justify-center`}>
              <img src={card.icon} alt="" className="w-4 h-4" />
            </div>
            <span
              className={`flex items-center gap-0.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                card.positive
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-500"
              }`}>
              {card.positive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              {card.pct}
            </span>
          </div>
          <p className="text-[10px] text-gray-400 font-medium">{card.title}</p>
          <p
            className="text-lg font-bold text-gray-900 mt-0.5"
            style={{ fontFamily: "eczar" }}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WalletCardDisplay;
