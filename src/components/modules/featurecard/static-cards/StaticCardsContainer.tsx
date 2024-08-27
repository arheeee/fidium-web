import { StaticCardsPageBlock, StaticFeatureCtaButton } from "@/interfaces/featurecard/StaticCards";
import FeatureCardButton from "../FeatureCardButton";
import { addCssClassToHTMLText } from "@/lib/utils";

const StatiCardsContainer = ({
  children,
  cardsEntries,
}: Readonly<{
  children: React.ReactNode;
  cardsEntries: StaticCardsPageBlock[]
}>) => {
  const ctaButton: StaticFeatureCtaButton[] = cardsEntries[0].staticFeatureCtaButton as unknown as StaticFeatureCtaButton[];
  return (
    <div className="p-10 m-10 bg-green-700 rounded-3xl">
      <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="text-white font-bold text-3xl">{cardsEntries[0].staticFeatureCardHeader}</h1>
        <div className="text-white my-5 text-xs">{cardsEntries[0].staticFeatureCardSubHeader}</div>
      </div>
      <div className="grid md:grid-cols-3 rounded-t-3xl bg-white">
        {children}
      </div>
      {
        cardsEntries[0].staticFeatureCardAddCta ?
          <div className="flex flex-col justify-center md:flex-row md:justify-start md:items-center gap-4 w-full rounded-b-3xl bg-slate-100 p-8 border">
            <FeatureCardButton buttonType={ctaButton[0].buttonType} textButton={ctaButton[0].buttonLabel} />
            <div className="font-bold text-center md:text-start" dangerouslySetInnerHTML={{ __html: cardsEntries[0].staticFeatureCtaContent as string }}></div>
          </div> : <div></div>
      }
    </div>
  )
}

export default StatiCardsContainer