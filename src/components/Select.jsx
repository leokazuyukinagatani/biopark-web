export function Select({ options, value, setValue, label, ...rest }) {
  return (
    <label className="flex flex-col items-start gap-2 text-light-400 ">
      {label}
      <select
        value={value}
        
        onChange={({ target }) => setValue(target.value)}
        className="w-full bg-dark-900 text-light-100 px-3.5 py-4 border-0 rounded-lg outline-none focus-within:ring-2 focus-within:ring-cyan-600 max-h` overflow-y-auto"
        {...rest}
      >
        <option value="" disabled>
          selecione
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  )
}