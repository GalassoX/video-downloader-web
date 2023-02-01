const Modal = ({ open, onClose, title, body, buttons }) => {
    if (!open) return null;
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none items-center text-black">
                        {/*header*/}
                        {!title
                            ? null
                            :
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t w-full">
                                <h3 className="text-3xl font-semibold">
                                    {title}
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={onClose}
                                >
                                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        X
                                    </span>
                                </button>
                            </div>
                        }
                        {/*body*/}
                        {!body
                            ? null
                            :
                            <div className="relative p-6 flex-auto">
                                {body}
                            </div>
                        }
                        {/*footer*/}
                        {!buttons
                            ? null
                            : <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                                {buttons}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default Modal;