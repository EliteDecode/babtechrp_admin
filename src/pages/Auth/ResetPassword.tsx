import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="w-full">
      <div className="mb-3">
        <h1
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Reset Password
        </h1>
        <p className="text-gray-400 text-xs mt-0.5">
          Enter your new password below.
        </p>
      </div>

      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
