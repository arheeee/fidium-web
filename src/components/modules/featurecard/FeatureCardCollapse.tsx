"use client"
import { Collapse, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const FeatureCardCollapse = ({
  closeText,
  openText,
  children,
}: Readonly<{
  closeText: string;
  openText: string;
  children: React.ReactNode;
}>) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked(!isChecked)
  }

  return (
    <List
      className="w-full"
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText className="text-blue-800 !font-bold" primary={<><Typography sx={{ fontWeight: 'bold', display: 'flex'}}>{!isChecked ? openText : closeText}{isChecked ? <ExpandLess  className="text-blue-800 !font-bold" /> : <ExpandMore  className="text-blue-800 !font-bold" />}</Typography> </>}  />
        
      </ListItemButton>
      <Collapse in={isChecked} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            { children }
        </List>
      </Collapse>
    </List>
  )
}

export default FeatureCardCollapse