import { useSelector } from "react-redux";
import { MdOutlineVerified } from "react-icons/md";

const ProfileDetails = () => {
  const { admin } = useSelector((state: any) => state.admin);

  return (
    <div>
      <div className="mb-4">
        <h2
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          {admin?.fullname}
        </h2>
        <p className="text-sm text-gray-400 mt-0.5">@{admin?.email}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400 w-24 shrink-0">Status</span>
          <span
            className={`flex items-center gap-1 text-xs font-medium ${
              admin?.isSuspended ? "text-red-500" : "text-green-600"
            }`}>
            <MdOutlineVerified size={14} />
            {admin?.isSuspended ? "Inactive" : "Active"}
          </span>
        </div>
        {(admin?.phone || admin?.address) && (
          <div className="flex items-start gap-2 text-sm">
            <span className="text-gray-400 w-24 shrink-0">Contact</span>
            <span className="text-gray-700">
              {[admin?.phone, admin?.address].filter(Boolean).join(" · ")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
