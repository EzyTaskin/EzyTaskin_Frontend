"use client";

import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getApiUrl } from "src/app/helpers/api/url";

export default function ExternalLogin() {
  const [providerDisplayName, setProviderDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setProviderDisplayName(searchParams.get("providerDisplayName") ?? "");
    setEmail(searchParams.get("email") ?? "");

    const returnUrl = searchParams.get("returnUrl") ?? "/";
    setApiUrl(getApiUrl("Account/ExternalRegister", { returnUrl: returnUrl }));

    setError(searchParams.get("error"));
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-3/5">
        <h2 className="text-2xl font-bold text-center">External Login</h2>
        <p className="text-center text-gray-700 text-[20px]">
          You have successfully authenticated with <b>{providerDisplayName}</b>.
        </p>
        <p className="text-center text-gray-700 text-[20px]">
          Please click "Register" to create a new EzyTaskin account using the email <b>{email}</b>.
        </p>

        <form
          method="POST"
          action={apiUrl}
        >
          <div className="none">
            <input name="email" type="email" hidden={true} readOnly={true} value={email} />
          </div>

          <div className="mt-10 flex justify-center">
            <PrimaryButton
              label="Register"
              width="w-[250px]"
              borderRadius="rounded-[10px]"
              onClick={(e) => {
                const form = e.currentTarget.closest("form");
                if (form.checkValidity()) {
                  setIsSubmitting(true);
                  form.requestSubmit();
                }
              }}
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>

      {/* Error Modal with background */}
      {!!error && (
        <>
          {/* Semi-transparent black background */}
          <div className="fixed inset-0 bg-black/30 z-20"></div>

          {/* Modal itself */}
          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Register Error</h2>
              <p className="text-gray-700 text-lg mb-6">{error}</p>
              <button
                onClick={() => setError("")}
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
