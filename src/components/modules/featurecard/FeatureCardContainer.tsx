import clsx from "clsx";
import { FeatureCardContainerProps } from "@/interfaces/featurecard/FeatureCardContainerProps";
const FeatureCardContainer = ({
  children,
  isBlockElement
}: FeatureCardContainerProps) => {
  return (
      <div className={clsx(["flex flex-col md:flex md:flex-row", isBlockElement ? "gap-0" : "gap-4"])}>
        {children}
      </div>
  )
}

export default FeatureCardContainer