export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-(--color-tertiary) p-8 rounded-2xl shadow-lg w-2/5">
        <h2 className="text-2xl font-bold text-center text-gray-900">Log in</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Enter your credentials to access your account
        </p>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <span className="text-gray-500">📧e</span>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="ml-2 w-full outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <span className="text-gray-500">🔒</span>
            <input
              type="password"
              className="ml-2 w-full outline-none bg-transparent"
            />
            <span className="cursor-pointer text-gray-500">👁</span>
          </div>
        </div>

        <button className="w-full bg-(--color-primary) text-white font-semibold py-2 rounded-lg hover:bg-blue-700">
          Log in
        </button>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div>

        <div className="text-center mt-2 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
