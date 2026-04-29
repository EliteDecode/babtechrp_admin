import AddStudentForm from "@/components/dashboard_components/forms/AddStuddentForm";
import PageHeader from "@/components/ui/PageHeader";

const AddStudent = () => {
  return (
    <div className="max-w-lg">
      <PageHeader
        title="Add New Student"
        subtitle="Enter student details below"
        backHref="/dashboard/students"
        backLabel="Back to Students"
      />
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <AddStudentForm />
      </div>
    </div>
  );
};

export default AddStudent;
