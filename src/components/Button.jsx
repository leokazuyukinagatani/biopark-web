
export function Button({ title, icon: Icon, loading = false, ...rest }) {
  return (
    <button
      className="w-full bg-tomato-100 py-3 px-8 border-0 rounded-lg text-light-100 hover:bg-tomato-200 font-poppins font-medium text-sm flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-tomato-400"
      type="button"
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
      
    </button>
  )
}