import ProfileToggle from "src/app/(main)/profile/components/ProfileToggle";
import ProfileCard from "src/app/(main)/profile/components/ProfileCard";
import ProfileDetails from "src/app/(main)/profile/components/ProfileDetails";

export default function Browser() {
    return (
        <section className="py-28 border-b border-black-100">
            <ProfileToggle/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
                <div className="space-y-4">
                    <ProfileCard/>
                </div>

                <div>
                    <ProfileDetails/>
                </div>
            </div>
        </section>
    )
}
