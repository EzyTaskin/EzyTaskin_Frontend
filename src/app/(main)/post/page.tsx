'use client'

import DescribeTask from "src/app/(main)/post/components/DescribeTask";
import LocationBudget from "src/app/(main)/post/components/LocationBudget";
import Review from "src/app/(main)/post/components/Review";
import {useState} from "react";
import useMutateTasks from "src/app/hooks/useMutateTasks";

export default function PostTask() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const [location, setLocation] = useState<string>("");
    const [budget, setBudget] = useState<number>(50);
    const [remoteEligible, setRemoteEligible] = useState<boolean>(false);
    const [dueDate, setDueDate] = useState<string>("");

    const [step, setStep] = useState<number>(0);

    const tasker = useMutateTasks();

    const handleContinue = () => {
        setStep(step + 1);
    }

    const handleBack = () => {
        setStep(step - 1);
    }

    const handleSubmit = () => {
        tasker.postTask({
            title: title,
            location: location,
            description: description,
            dueDate: dueDate,
            budget: budget,
            remoteEligible: remoteEligible
        })
    }

    return (
        <section className="py-28 ">
            {step == 0 &&
                <DescribeTask title={title} onTitleChange={setTitle} description={description}
                              onDescriptionChange={setDescription} category={category} onCategoryChange={setCategory}
                              onContinue={handleContinue}/>
            }
            {step == 1 &&
                <LocationBudget location={location} onLocationChange={setLocation} budget={budget}
                                onBudgetChange={setBudget} remote={remoteEligible} onRemoteChange={setRemoteEligible}
                                onContinue={handleContinue} onBack={handleBack} date={dueDate}
                                onDateChange={setDueDate}/>}
            {step == 2 &&
                <Review title={title} category={category} location={location} budget={budget} date={dueDate}
                        description={description} onBack={handleBack} onSubmit={handleSubmit}/>}
        </section>
    );
}
