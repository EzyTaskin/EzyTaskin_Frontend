"use client";

import ProfileToggle from "src/app/(main)/profile/components/ProfileToggle";
import ProfileCard from "src/app/(main)/profile/components/ProfileCard";
import ProfileDetails from "src/app/(main)/profile/components/ProfileDetails";
import { useEffect, useState } from "react";
import { ProfileType } from "src/app/constants/type";
import useQueryProfile from "src/app/hooks/useQueryProfile";

export default function Profile() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [profileType, setProfileType] = useState<ProfileType>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("profileType") as ProfileType) || "provider";
    }
    return "provider";
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("profileType", profileType);
    }
  }, [profileType]);

  const [subpage, setSubpage] = useState<string>("profile");
  const [loading, setLoading] = useState<boolean>(false);
  const { providerProfile, consumerProfile, commonDetail } = useQueryProfile();

  if (loading) {
    return <div>Loading profile...</div>; // Placeholder for loading state
  }
  return (
    <section className="py-28 border-b border-black-100">
      <div className="grid md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        <div className="space-y-4">
          <ProfileToggle
            profileType={profileType}
            onProfileTypeChange={setProfileType}
            subpage={subpage}
            onSubpageChange={setSubpage}
          />
          <ProfileCard
            providerProfile={providerProfile}
            consumerProfile={consumerProfile}
            commonDetail={commonDetail}
            profileType={profileType}
            onProfileTypeChange={setProfileType}
            isEditing={isEditing}
            onIsEditingChange={setIsEditing}
            subpage={subpage}
            onSubpageChange={setSubpage}
          />
        </div>

        <div className="col-span-2">
          <ProfileDetails
            providerProfile={providerProfile}
            commonDetail={commonDetail}
            profileType={profileType}
            isEditing={isEditing}
            onIsEditingChange={setIsEditing}
            subpage={subpage}
            onSubpageChange={setSubpage}
          />
        </div>
      </div>
    </section>
  );
}
