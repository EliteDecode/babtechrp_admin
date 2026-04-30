import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import useForgotPasswordForm from "@/hooks/form-hooks/useForgotPasswordForm";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const ForgotPassword = () => {
  const { isSentMail } = useForgotPasswordForm();

  if (isSentMail) {
    return (
      <div className="w-full text-center py-4">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <MdOutlineMarkEmailRead size={28} className="text-green-500" />
        </div>
        <h1
          className="text-2xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "eczar" }}>
          Check your email
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          We sent a password reset link to your email address.
        </p>
        <Link
          to="/auth/login"
          className="mt-6 inline-block text-xs text-primary font-semibold hover:underline">
          Back to Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-3">
        <h1
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Forgot Password?
        </h1>
        <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
          Enter your email and we'll send you a reset link.
        </p>
      </div>

      <ForgotPasswordForm />

      <div className="mt-3">
        <p className="text-xs text-gray-500">
          Remember your password?{" "}
          <Link
            to="/auth/login"
            className="text-primary font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
