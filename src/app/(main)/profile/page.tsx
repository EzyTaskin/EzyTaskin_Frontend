"use client";

import ProfileToggle from "src/app/(main)/profile/components/ProfileToggle";
import ProfileCard from "src/app/(main)/profile/components/ProfileCard";
import ProfileDetails from "src/app/(main)/profile/components/ProfileDetails";
import { useEffect, useState } from "react";
import {
  ConsumerProfileType,
  ProfileType,
  ProviderProfileType,
} from "src/app/constants/type";
import { fetchApi } from "src/app/helpers/api/request";

export default function Browser() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [providerProfile, setProviderProfile] =
    useState<ProviderProfileType>(null);
  const [consumerProfile, setConsumerProfile] =
    useState<ConsumerProfileType>(null);
  const [profileType, setProfileType] = useState<ProfileType>("provider");
  const [subpage, setSubpage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchProviderProfile() {
    setLoading(true);
    fetchApi({ path: "/Profile/Provider", method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setProviderProfile(data);
        setProfileType("provider");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  async function fetchConsumerProfile() {
    setLoading(true);
    fetchApi({ path: "/Profile/Consumer", method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setConsumerProfile(data);
        setProfileType("consumer");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (profileType === "provider") {
      fetchProviderProfile();
    } else if (profileType === "consumer") {
      fetchConsumerProfile();
    }
  }, [profileType]);

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
            consumerProfile={consumerProfile}
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
