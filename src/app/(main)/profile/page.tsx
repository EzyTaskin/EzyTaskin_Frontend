'use client'

import ProfileToggle from "src/app/(main)/profile/components/ProfileToggle";
import ProfileCard from "src/app/(main)/profile/components/ProfileCard";
import ProfileDetails from "src/app/(main)/profile/components/ProfileDetails";
import {useState} from "react";

export default function Browser() {
    const [profileType, setProfileType] = useState<"provider" | "consumer">("provider");

    return (
        <section className="py-28 border-b border-black-100">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
                <div className="space-y-4">
                    <ProfileToggle profileType={profileType} onProfileTypeChange={setProfileType}/>
                    <ProfileCard/>
                </div>

                <div>
                    <ProfileDetails profileType={profileType}/>
                </div>
            </div>
        </section>
    )
}
