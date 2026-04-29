import { modelReferralDataToChart } from "@/lib/referralChartData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AreaChartComp from "./AreaChartComp";
import { ArrowRight } from "lucide-react";

import registeredUsersIcon from "@/assets/icons/document.png";
import usersIcon from "@/assets/icons/team.png";

const InfoCardDisplay = () => {
  const { referrals } = useSelector((state: any) => state.referral);
  const { users } = useSelector((state: any) => state.user);
  const { students } = useSelector((state: any) => state.student);

  const referralChart = modelReferralDataToChart(referrals);

  const cards = [
    {
      title: "All Referrals",
      value: referrals?.length ?? 0,
      label: "View Referrals",
      link: "/dashboard/referrals",
      icon: usersIcon,
    },
    {
      title: "Matched Referrals",
      value: referrals?.filter((item: any) => item?.isMatched === true).length ?? 0,
      label: "View Referrals",
      link: "/dashboard/referrals",
      icon: registeredUsersIcon,
    },
    {
      title: "All Users",
      value: users?.length ?? 0,
      label: "View Users",
      link: "/dashboard/users",
      icon: usersIcon,
    },
    {
      title: "All Students",
      value: students?.length ?? 0,
      label: "View Students",
      link: "/dashboard/students",
      icon: usersIcon,
    },
  ];

  return (
    <div className="space-y-5">
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-100 p-4 hover:border-primary/20 hover:shadow-sm transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                <img src={card.icon} alt="" className="w-5 h-5" />
              </div>
            </div>
            <p className="text-xs text-gray-500 font-medium">{card.title}</p>
            <p
              className="text-2xl font-bold text-gray-900 mt-0.5 mb-3"
              style={{ fontFamily: "eczar" }}>
              {card.value}
            </p>
            <Link
              to={card.link}
              className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline">
              {card.label}
              <ArrowRight size={11} />
            </Link>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <div className="mb-4">
          <h3
            className="text-sm font-bold text-gray-800"
            style={{ fontFamily: "eczar" }}>
            Referral Overview
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">Monthly referral activity</p>
        </div>
        <div className="h-[42vh]">
          <AreaChartComp
            data={referralChart}
            stroke="hsl(240 100% 20%)"
            fill="hsl(240 100% 20%)"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCardDisplay;
