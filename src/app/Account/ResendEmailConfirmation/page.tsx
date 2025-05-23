"use client";

import { MdOutlineMail } from "react-icons/md";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import Link from "next/link";
import { getApiUrl } from "src/app/helpers/api/url";
import { useEffect, useState } from "react";
import useQueryProfile from "src/app/hooks/useQueryProfile";

export default function ResendEmailConfirmation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { commonDetail } = useQueryProfile();
  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    setApiUrl(getApiUrl("Account/ResendEmailConfirmation", { returnUrl: "/Home" }));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-2/5">
        <h2 className="text-2xl font-bold text-center">Resend Email Confirmation</h2>
        <p className="text-center text-gray-700 text-[20px] mb-6">
          Please enter the email address you have used to register.
        </p>

        <form
          method="POST"
          action={apiUrl}
        >
          <div className="mb-4">
            <label className="block text-[22px] font-medium mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <MdOutlineMail className="text-gray-500 text-[22px]" />
              <input
                type="email"
                name="email"
                placeholder="somebody@example.com"
                defaultValue={commonDetail?.email || ""}
                className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
              />
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <PrimaryButton
              label="Resend"
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
    </div>
  );
}
