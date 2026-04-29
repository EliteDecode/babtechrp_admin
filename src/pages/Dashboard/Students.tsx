import AllStudentTables from "@/components/dashboard_components/tables/AllStudentsTables";
import PageHeader from "@/components/ui/PageHeader";
import Loader from "@/helpers/Loader";
import { FetchStudentDetails } from "@/services/features/student/studentSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { RiUserAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Students = () => {
  const { isLoading, students } = useSelector((state: any) => state.student);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchStudentDetails());
  }, []);

  return (
    <div>
      <PageHeader
        title="All Students"
        subtitle={`${students?.length ?? 0} student${students?.length !== 1 ? "s" : ""} enrolled`}
        action={
          <Link
            to="/dashboard/students/add-student"
            className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all">
            <RiUserAddFill size={14} />
            Add Student
          </Link>
        }
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <AllStudentTables data={students} />
        </div>
      )}
    </div>
  );
};

export default Students;
