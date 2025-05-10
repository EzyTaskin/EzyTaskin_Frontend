import {ReactElement} from "react";

export default function PrimaryModal({children, showModal, setShowModal}: {
    children: ReactElement,
    showModal: boolean,
    setShowModal: (value: boolean) => void
}) {

    return (
        <>
            {showModal && <>
                <div className="fixed inset-0 bg-black/30 z-20"></div>
                <div className="fixed inset-0 flex items-center justify-center z-30">
                    <div className="bg-[#f3f6fb] p-6 rounded-2xl shadow-xl w-[90%] max-w-md">
                        {children}

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-black font-medium"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}
