import TaskDetailCard from "src/app/(main)/my-tasks/[id]/components/TaskDetailCard";

export default function Task() {
    return (
        <section className="py-28 border-b border-black-100">
            <div className="grid gap-6 p-6 max-w-6xl mx-auto">
                <TaskDetailCard/>
            </div>
        </section>
    )
}
