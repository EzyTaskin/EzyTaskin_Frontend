"use client";

import ProfileToggle from "src/app/(main)/profile/components/ProfileToggle";
import ProfileCard from "src/app/(main)/profile/components/ProfileCard";
import ProfileDetails from "src/app/(main)/profile/components/ProfileDetails";
import {useEffect, useState} from "react";
import {ProfileType} from "src/app/constants/type";

export default function Browser() {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [profileType, setProfileType] = useState<ProfileType>(
        "provider"
    );
    const [subpage, setSubpage] = useState<string>("")

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch('https://ishar.tail35ead.ts.net/api/Profile/Provider')
            const data = await res.json()
            console.log("RES:")
            console.log(data)
        }

        fetchPosts()
    }, [])

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
                    <ProfileCard profileType={profileType} onProfileTypeChange={setProfileType} isEditing={isEditing}
                                 onIsEditingChange={setIsEditing} subpage={subpage} onSubpageChange={setSubpage}/>
                </div>

                <div className="col-span-2">
                    <ProfileDetails profileType={profileType} isEditing={isEditing} onIsEditingChange={setIsEditing}
                                    subpage={subpage} onSubpageChange={setSubpage}/>
                </div>
            </div>
        </section>
    );
}
