'use client'

import DescribeTask from "src/app/(main)/post/components/DescribeTask";
import LocationBudget from "src/app/(main)/post/components/LocationBudget";
import Review from "src/app/(main)/post/components/Review";
import {useState} from "react";

export default function PostTask() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const [location, setLocation] = useState<string>("")
    const [budget, setBudget] = useState<number>(50)
    const [remote, setRemote] = useState<boolean>(false);
    const [date, setDate] = useState<string>("")

    const [step, setStep] = useState<number>(0)

    const handleContinue = () => {
        setStep(step + 1);
    }

    const handleBack = () => {
        setStep(step - 1);
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
                                onBudgetChange={setBudget} remote={remote} onRemoteChange={setRemote}
                                onContinue={handleContinue} onBack={handleBack} date={date} onDateChange={setDate}/>}
            {step == 2 &&
                <Review title={title} category={category} location={location} budget={budget} date={date}
                        description={description} onBack={handleBack}/>}
        </section>
    );
}
