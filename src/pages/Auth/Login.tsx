import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Admin Sign In
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Access the BST admin dashboard
        </p>
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;
