import Image from "next/image"
import { FeatureCardElem } from "@/interfaces/featurecard/ExpandingCards";
import { addCssClassToHTMLText } from "@/lib/utils";

const FeatureCardEyebowHeader = ({
    cardFeature,
  }: Readonly<{
    cardFeature: FeatureCardElem;
  }>) => {

  return (
    <div className="flex flex-col md:ml-5 justify-center items-center md:items-start">
    {
      cardFeature.featureCardEyebrowType === "eyebrowText" ? <div className="text-center font-bold md:text-start uppercase text-green-600 text-xl">{cardFeature.featureCardEyebrowText}</div> : <Image src={cardFeature.featureCardEyebrowImage[0]?.url} width={100} height={100} alt="card image" />
    }
    { cardFeature.featureCardHeader ? <h2 className='text-3xl font-bold mt-2' dangerouslySetInnerHTML={{ __html: addCssClassToHTMLText(cardFeature.featureCardHeader, '!text-green-500') }}></h2> : <></>}
  </div>
  )
}

export default FeatureCardEyebowHeader