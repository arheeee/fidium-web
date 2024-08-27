import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Image from "next/image"
import FeatureCardCollapse from './FeatureCardCollapse';
import FeatureListItem from './FeatureListItem';
import FeatureCardButton from './FeatureCardButton';
import { FeatureCardElem } from '@/interfaces/featurecard/ExpandingCards';
import FeatureCardEyebowHeader from './FeatureCardEyebowHeader';

const FeatureCardContent = ({
  cardFeature,
}: Readonly<{
  cardFeature: FeatureCardElem;
}>) => {
  return (
    <Card sx={{ padding: '30px'}} className='!rounded-3xl lg:!rounded-r-none lg:!rounded-l-3xl'>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Image src={process.env.NEXT_PUBLIC_CRAFT_CMS_BASE_PATH + cardFeature.featureCardImage[0]?.url} width={172} height={172} alt="card image" />
          <FeatureCardEyebowHeader cardFeature={cardFeature} />
        </div>
        { cardFeature.featureCardContent ? <div className="my-5 text-center md:text-start" dangerouslySetInnerHTML={{ __html: cardFeature.featureCardContent }}></div> : <></>}
      </CardContent>
      <CardActions>
        {
          !cardFeature.featureCardExpandable ? <div className="card-actions justify-center md:justify-start" >
            <FeatureCardButton buttonType={cardFeature.featureCardButton[0]?.buttonType} textButton={cardFeature.featureCardButton[0]?.buttonLabel} />
          </div> : 
          <FeatureCardCollapse closeText={cardFeature.featureCardCloseLabel} openText={cardFeature.featureCardOpenLabel}>
              {
                cardFeature.featureCardListBlock.map((listItem) => <FeatureListItem key={listItem.id} textItem={listItem.featureItem} />)
              }
          </FeatureCardCollapse>
        }

      </CardActions>
    </Card>
  )
}

export default FeatureCardContent