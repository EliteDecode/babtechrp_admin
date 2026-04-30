import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="w-full">
      <div className="mb-3">
        <h1
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Admin Sign In
        </h1>
        <p className="text-gray-400 text-xs mt-0.5">
          Access the BST admin dashboard
        </p>
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;
