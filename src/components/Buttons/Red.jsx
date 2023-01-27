const ButtonRed = ({ children, onClick }) => {
    return (
        <button
            className="text-white bg-red-500 active:bg-red-600 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonRed;