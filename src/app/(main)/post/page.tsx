'use client'

import DescribeTask from "src/app/(main)/post/components/DescribeTask";
import LocationBudget from "src/app/(main)/post/components/LocationBudget";
import Review from "src/app/(main)/post/components/Review";
import {useEffect, useState} from "react";
import useMutateTasks from "src/app/hooks/useMutateTasks";
import PrimaryModal from "src/app/components/modals/PrimaryModal";
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import {redirect} from "next/navigation";

dayjs.extend(utc)
dayjs.extend(customParseFormat)

export default function PostTask() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [categories, setCategories] = useState<string[]>([]);

    const [location, setLocation] = useState<string>("");
    const [budget, setBudget] = useState<number>(50);
    const [remoteEligible, setRemoteEligible] = useState<boolean>(false);
    const [dueDate, setDueDate] = useState<string>("");

    const [step, setStep] = useState<number>(0);

    const [showModal, setShowModal] = useState<boolean>(false);

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
            dueDate: dayjs(dueDate, 'DD/MM/YYYY').toISOString(),
            budget: budget,
            remoteEligible: remoteEligible,
            categories: categories,
        })
        setShowModal(true)
    }

    const handleCloseModal = () => {
        redirect('/my-tasks');
    }

    return (
        <section className="py-28 ">
            {step == 0 &&
                <DescribeTask title={title} onTitleChange={setTitle} description={description}
                              onDescriptionChange={setDescription} categories={categories}
                              onCategoryChange={setCategories}
                              onContinue={handleContinue}/>
            }
            {step == 1 &&
                <LocationBudget location={location} onLocationChange={setLocation} budget={budget}
                                onBudgetChange={setBudget} remote={remoteEligible} onRemoteChange={setRemoteEligible}
                                onContinue={handleContinue} onBack={handleBack} date={dueDate}
                                onDateChange={setDueDate}/>}
            {step == 2 &&
                <Review title={title} categories={categories} location={location} budget={budget} date={dueDate}
                        description={description} onBack={handleBack} onSubmit={handleSubmit}/>}

            {showModal &&
                <PrimaryModal showModal={showModal} setShowModal={setShowModal} onCloseModal={handleCloseModal}>
                    <h1> Post task success </h1>
                </PrimaryModal>}
        </section>
    );
}
