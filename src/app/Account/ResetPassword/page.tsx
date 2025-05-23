"use client";

import { MdOutlineMail } from "react-icons/md";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import Link from "next/link";
import { getApiUrl } from "src/app/helpers/api/url";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { GoEye, GoEyeClosed } from "react-icons/go";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [returnUrl, setReturnUrl] = useState("/Account/Login");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams();


  useEffect(() => {
    if (searchParams.has("returnUrl")) {
      setReturnUrl(searchParams.get("returnUrl"));
    }
    if (searchParams.has("code")) {
      setCode(searchParams.get("code"));
    }
    if (searchParams.has("email")) {
      setEmail(searchParams.get("email"));
    }

    const error = searchParams.get("error");
    if (error) {
      setErrorMessage(error);
      setShowErrorModal(true);
    }
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-2/5">
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        <p className="text-center text-gray-700 text-[20px] mb-6">
          Please set a new password for your account.
        </p>

        <form
          method="POST"
          action={getApiUrl("Account/ResetPassword", { returnUrl: returnUrl })}
        >
          <div className="none">
            <input
              type="email"
              name="email"
              readOnly={true}
              hidden={true}
              value={email}
            />

            <input
              type="code"
              name="code"
              readOnly={true}
              hidden={true}
              value={code}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-[22px] font-medium mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <CiLock className="text-gray-600 text-[25px]" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <GoEyeClosed className="text-gray-600 text-[22px]" />
                ) : (
                  <GoEye className="text-gray-700 text-[22px]" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-[22px] font-medium mb-1">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <CiLock className="text-gray-600 text-[25px]" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                onChange={(e) => e.target.setCustomValidity(
                  e.target.value === password ? "" : "Passwords do not match."
                )}
                required
                className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="focus:outline-none"
              >
                {showConfirmPassword ? (
                  <GoEyeClosed className="text-gray-600 text-[22px]" />
                ) : (
                  <GoEye className="text-gray-700 text-[22px]" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <PrimaryButton
              label="Reset Password"
              width="w-[250px]"
              borderRadius="rounded-[10px]"
              disabled={isSubmitting}
              onClick={(e) => {
                const form = e.currentTarget.closest("form");
                if (form.checkValidity()) {
                  setIsSubmitting(true);
                  form.requestSubmit();
                }
              }}
            />
          </div>
        </form>
      </div>

      {/* Error Modal with background */}
      {showErrorModal && (
        <>
          {/* Semi-transparent black background */}
          <div className="fixed inset-0 bg-black/30 z-20"></div>

          {/* Modal itself */}
          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Password Reset Error</h2>
              <p className="text-gray-700 text-lg mb-6">{errorMessage}</p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
