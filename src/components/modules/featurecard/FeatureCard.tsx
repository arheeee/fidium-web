import Image from "next/image"
import FeatureCardButton from "./FeatureCardButton"
import { FeatureCardProps } from "@/interfaces/featurecard/FeatureCardProps"
import clsx from "clsx"
import FeatureCardCollapse from "./FeatureCardCollapse"

const FeatureCard = ({ 
  children,
  featureImageUrl, 
  isButtonOutLine = false, 
  showButton = true, 
  cssElement = "", 
  showTitleImage = "" ,
  titleText = "",
  titleSubtitle,
  titleDescription="",
  buttonText=""
}: FeatureCardProps) => {
  return (
    <div className={clsx(["bg-base-100", cssElement])}>
      <div className="card-body">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Image src={featureImageUrl} width={172} height={172} alt="Card Image" />
          <div className="flex flex-col md:ml-5 justify-center items-center md:items-start">
            {
              showTitleImage !== "" ? <Image src={showTitleImage} width={100} height={35} alt="Card Image" /> : <h2 className="card-title uppercase text-green-600">{titleText}</h2>
            }
          <div className="my-5 text-center md:text-start">{titleSubtitle}</div>
          </div>
        </div>
        <div className="my-5 text-center md:text-start">{titleDescription}</div>
        {
          showButton ? <div className="card-actions justify-center md:justify-start" >
            <FeatureCardButton textButton={buttonText} buttonType={"primary"} />
          </div> : <div></div>
        }

        { children }
      </div>
    </div>
  )
}

export default FeatureCard