import {ReactNode, useRef} from "react";

export default function PrimaryModal({
                                         children,
                                         showModal,
                                         setShowModal,
                                         onCloseModal,
                                         showCloseButton = true
                                     }: {
    children?: ReactNode,
    showModal: boolean,
    setShowModal: (value: boolean) => void,
    onCloseModal?: () => void;
    showCloseButton?: boolean;
}) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal on outside click
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            handleCloseModal()
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        if (onCloseModal) onCloseModal();
    }

    return (
        <>
            {showModal && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/30 z-20"
                    ></div>

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-30" onClick={handleOverlayClick}
                    >
                        <div
                            ref={modalRef}
                            className="bg-[#f3f6fb] p-6 rounded-2xl shadow-xl w-[90%] max-w-3xl"
                        >
                            {children}

                            {showCloseButton && (
                                <div className="flex justify-end space-x-4 mt-4">
                                    <button
                                        onClick={handleCloseModal}
                                        className="text-black font-medium"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
