import Image from "next/image"

interface FeatureListItemProps {
    textItem: string
}

const FeatureListItem = ({textItem}: FeatureListItemProps) => {
  return (
    <li className="flex gap-4"><Image src="/check.svg" width={16} height={16} alt="icon" /> <div>{textItem}</div></li>
  )
}

export default FeatureListItem