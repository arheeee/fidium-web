import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import Image from "next/image"

interface FeatureListItemProps {
  textItem: string
}

const FeatureListItem = ({ textItem }: FeatureListItemProps) => {

  return (
    <ListItemButton sx={{ padding: '2px'}}>
      <ListItemIcon>
        <Image src="/check.svg" width={16} height={16} alt="icon" />
      </ListItemIcon>
      <ListItemText primary={textItem} />
    </ListItemButton>
  )
}

export default FeatureListItem