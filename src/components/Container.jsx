export function Container({children}) {
  return(
    <main className="w-full h-full flex flex-col justify-start items-center bg-dark-400">
      {
        children
      }
    </main>
  )
}