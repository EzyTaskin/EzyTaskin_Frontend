export default function ForgotPassword() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-(--color-tertiary) p-8 rounded-2xl shadow-lg w-2/5">
                <h2 className="text-2xl font-bold text-center text-gray-900">Reset password</h2>
                <p className="text-center text-gray-500 text-sm mb-6">
                    Enter your email address and we’ll send you a link to reset your password
                </p>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <span className="text-gray-500">
              📧
            </span>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="ml-2 w-full outline-none bg-transparent"
                        />
                    </div>
                </div>

                <button className="w-full bg-(--color-primary) text-white font-semibold py-2 rounded-lg hover:bg-blue-700">
                    Send reset link
                </button>

                <div className="text-center mt-2 text-sm text-gray-600">
                    Remember your password? {" "}
                    <a href="#" className="text-blue-600 font-medium hover:underline">
                        Back to login
                    </a>
                </div>
            </div>
        </div>
    )
}
