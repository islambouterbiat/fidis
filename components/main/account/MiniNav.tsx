const MiniNav = ({ handleMiniNav, miniNav }: any) => {
  return (
    <label
      htmlFor="mini_nav"
      className="relative mb-2 ml-2.5 flex cursor-pointer items-center"
    >
      <input
        onClick={handleMiniNav}
        type="checkbox"
        id="mini_nav"
        className="sr-only cursor-pointer pl-1"
      />

      <div className="toggle_bg h-5 w-8 cursor-pointer rounded-full border-2 border-gray-200 bg-transparent"></div>
      <span className="ml-3 cursor-pointer text-sm font-medium">
        {!miniNav && 'mini-nav'}
      </span>
    </label>
  )
}

export default MiniNav
