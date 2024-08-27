import { FeatureCardContainerProps } from "@/interfaces/featurecard/FeatureCardContainerProps"
import { cn } from "@/lib/utils"

const FeatureCardContainer = ({
  children,
  isBlockElement
}: FeatureCardContainerProps) => {
  return (
      <div className={cn(["grid md:grid-cols-2", isBlockElement ? "gap-0" : "gap-4"])}>
        {children}
      </div>
  )
}

export default FeatureCardContainer