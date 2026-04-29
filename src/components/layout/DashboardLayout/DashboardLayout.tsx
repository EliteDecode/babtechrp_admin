import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import useHandleResizeSidebar from "@/hooks/useHandleResizeSidebar";

const DashboardLayout = () => {
  const { isSidebar, setIsSidebar } = useHandleResizeSidebar();
  const { isSuccess, message } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess && message === "Login Successfully") {
      toast.success("Login Successful");
      dispatch(reset());
    }
  }, [isSuccess]);

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar overlay on mobile */}
      {isSidebar && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setIsSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar transit z-30 flex-shrink-0 ${
          isSidebar ? "showSidebar" : ""
        }`}>
        <Sidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
      </div>

      {/* Main column */}
      <div className="header transit flex flex-col flex-1 overflow-hidden bg-[#f8fafc]">
        <Header setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
        <main className="flex-1 overflow-y-auto sm:p-5 p-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
