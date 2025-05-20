'use client'

import DescribeTask from "src/app/(main)/post/components/DescribeTask";
import LocationBudget from "src/app/(main)/post/components/LocationBudget";
import Review from "src/app/(main)/post/components/Review";
import React, {useEffect, useState} from "react";
import useMutateTasks from "src/app/hooks/useMutateTasks";
import PrimaryModal from "src/app/components/modals/PrimaryModal";
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import {redirect} from "next/navigation";
import {useQueryCards} from "src/app/hooks/useQueryCards";
import {TasksRequestType} from "src/app/constants/type";
import Link from "next/link";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import {ArrowRight} from "lucide-react";

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
    const [taskId, setTaskId] = useState<string>("");

    const [step, setStep] = useState<number>(0);

    const [showModal, setShowModal] = useState<boolean>(false);

    const tasker = useMutateTasks();
    const {cards} = useQueryCards();

    const handleContinue = () => {
        setStep(step + 1);
    }

    const handleBack = () => {
        setStep(step - 1);
    }

    const handleSubmit = async () => {
        const taskData: TasksRequestType = {
            title: title,
            location: location,
            description: description,
            budget: budget,
            remoteEligible: remoteEligible,
            category: categories,
        };

        if (dueDate) {
            taskData.dueDate = dayjs(dueDate, 'DD/MM/YYYY').toISOString();
        }

        const task = await tasker.postTask(taskData);
        setTaskId(task.id);
        setShowModal(true);
    };


    const handleCloseModal = () => {
        redirect('/my-tasks');
    }

    if (cards.length == 0) {
        return (
            <section className="py-28 ">
                <div className="text-center">
                    <h1 className="text-xl font-bold text-red-500 leading-20"> You have no payment method.
                        Please add at least one before posting request.</h1>
                    <Link href='/add-payment-method'>
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500 text-white font-medium shadow-sm hover:bg-indigo-700 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Add payment method
                            <ArrowRight className="h-4 w-4"/>
                        </button>
                    </Link>
                </div>
            </section>
        )
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

            <PrimaryModal showModal={showModal} setShowModal={setShowModal} onCloseModal={handleCloseModal}
                          showCloseButton={false}>
                <h1 className="font-semibold text-purple-600"> Task is posted successfully! </h1>
                <br/>
                <p> Your task has been created and is now visible to providers.</p>
                <div className="flex justify-end mt-6 space-x-4">
                    <button
                        onClick={() => setShowModal(false)}
                        className="text-black font-medium"
                    >
                        Close
                    </button>
                    <Link href={`/my-requests/details?taskId=${taskId}`}>
                        <button
                            className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
                        >
                            View Task
                        </button>
                    </Link>
                </div>
            </PrimaryModal>
        </section>
    );
}
