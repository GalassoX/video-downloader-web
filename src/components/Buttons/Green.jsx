const ButtonGreen = ({ children, onClick }) => {
  return (
    <button
      className="text-white bg-green-500 active:bg-green-600 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonGreen;