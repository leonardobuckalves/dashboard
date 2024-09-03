const NavigationButton = ({ IconComponent, text, className }) => {
  return (
    <>
      <button
        className={`rounded text-left text-black font-bold px-3 py-4 group hover:bg-purple-100 hover:text-purple-500 transition-colors duration-300 ${className}`}
      >
        <div className="flex content-center">
          <div className="mr-2">
            {IconComponent}
          </div>
          {text}
        </div>
      </button>
    </>
  )
}

export default NavigationButton;