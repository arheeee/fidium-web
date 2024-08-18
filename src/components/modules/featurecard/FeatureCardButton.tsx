import { FeatureButtonCardProps } from "@/interfaces/featurecard/FeatureCardButtonProps"

const FeatureCardButton = ({ isButtonOutLine , textButton }: FeatureButtonCardProps) => {
  return (
    <button className={isButtonOutLine ? "btn !border-2 border-blue-900 hover:border-blue-900 text-blue-900 bg-white hover:bg-white" : "btn text-white bg-blue-900 hover:bg-blue-800"}>{textButton}</button>
  )
}

export default FeatureCardButton