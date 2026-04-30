import RegisterForm from "@/components/auth/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full">
      <div className="mb-3">
        <h1
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Create Admin Account
        </h1>
        <p className="text-gray-400 text-xs mt-0.5">
          Register a new BST admin account
        </p>
      </div>

      <RegisterForm />

      <div className="mt-3">
        <p className="text-xs text-gray-500">
          Already have an account?{" "}
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

export default Register;
