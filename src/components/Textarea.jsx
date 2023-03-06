export function Textarea({ label, value, setValue, ...rest }) {
  return (
    <div className="flex flex-col items-start gap-2 text-light-400 ">
      {label}
      <textarea
        className="w-full h-44 border-none resize-none  bg-dark-900 text-light-100 rounded-lg p-3.5 outline-none focus-within:ring-2 focus-within:ring-cyan-600"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...rest}
      >
        {value}
      </textarea>
    </div>
  )
}