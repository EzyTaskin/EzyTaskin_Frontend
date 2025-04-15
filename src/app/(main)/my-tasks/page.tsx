import OpenTasks from "src/app/(main)/my-tasks/components/OpenTasks";
import CompletedTasks from "src/app/(main)/my-tasks/components/CompletedTasks";

export default function MyTasks() {
    return (
        <section className="py-28 border-b border-black-100">
            <div className="grid gap-6 p-6 max-w-6xl mx-auto">
                <OpenTasks/>
                <CompletedTasks/>
            </div>
        </section>
    );
}
