import { FeatureButtonCardProps } from "@/interfaces/featurecard/FeatureCardButtonProps"
import { Button } from "@mui/material"

const FeatureCardButton = ({ buttonType, textButton }: FeatureButtonCardProps) => {
  return (
    <>
      {
        buttonType === "primary" || buttonType === "tertiary" ? <Button sx={{ backgroundColor: "#003595" }} variant="contained">{textButton}</Button> : <></>
      }
      {
        buttonType === "secondary" ? <Button sx={{ borderColor: "#003595" }} variant="outlined">{textButton}</Button> : <></>
      }
    </>
  )
}

export default FeatureCardButton