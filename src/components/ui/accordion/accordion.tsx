const Accordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      {children}
    </div>
  )
}

export default Accordion;