export function Input({ label,value,setValue, icon:Icon, ...rest}) {
  return (
    <div className="w-full">
      <label className="flex flex-col items-start gap-2 text-light-400  ">
        {label}
        {Icon && <Icon size={20} />}
        <input
          type="text"
          value={value}
          onChange={({target}) => setValue(target.value)}
          {...rest}
          className="w-full bg-dark-900 text-light-100 px-3.5 py-4 border-0 rounded-lg outline-none focus-within:ring-2 focus-within:ring-cyan-600"
        />

      </label>
    </div>
  )
}