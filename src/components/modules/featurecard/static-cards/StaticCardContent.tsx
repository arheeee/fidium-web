import { StaticFeatureCard } from "@/interfaces/featurecard/StaticCards"
import Image from "next/image"

const StaticCardContent = ({
    card
  }: Readonly<{
   card: StaticFeatureCard
  }>) => {
  return (
    <div className="flex flex-col p-5">
            <div className="flex items-center justify-start gap-4">
                <Image 
                    className="mb-4 w-10 h-10 md:w-20 md:h-20 " 
                    src={card.staticFeatureIcon[0].url} 
                    alt="Card Icon" 
                    width="80" 
                    height="80" 
                />
                <p className="font-bold">{card.staticFeatureHeader}</p>
            </div>
            <div>
                <p className="text-sm">{card.staticFeatureDescription}</p>
            </div>
    </div>
  )
}

export default StaticCardContent