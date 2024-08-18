"use client"
import { useState } from "react"
import { LuChevronDown } from "react-icons/lu";

const FeatureCardCollapse = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="collapse">
      <input type="checkbox" className="peer" checked={isChecked} onChange={handleClick} />
      <div
        className="collapse-title">
        <div className="flex items-center gap-4 text-blue-800 font-bold"><div>{!isChecked ? "See Features" : "Close Features"}</div> <LuChevronDown /></div>
      </div>
      <div
        className="collapse-content">
       { children }
      </div>
    </div>
  )
}

export default FeatureCardCollapse