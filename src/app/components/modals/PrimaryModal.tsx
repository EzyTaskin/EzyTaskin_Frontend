import {ReactNode, useCallback, useRef} from "react";

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

    const handleCloseModal = useCallback(() => {
        debugger;
        setShowModal(false);
        if (onCloseModal) onCloseModal();
    }, [setShowModal, onCloseModal]);

    // Close modal on outside click
    const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        debugger;
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            handleCloseModal();
        }
    }, [modalRef, handleCloseModal]);

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
                            className="flex justify-center bg-[#f3f6fb] p-6 rounded-2xl shadow-xl w-3xl"
                        >
                            <div className="w-full">
                                {children}
                            </div>
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
