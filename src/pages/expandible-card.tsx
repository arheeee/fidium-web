import FeatureCard from "@components/modules/featurecard/FeatureCard";
import FeatureCardCollapse from "@components/modules/featurecard/FeatureCardCollapse";
import FeatureCardContainer from "@components/modules/featurecard/FeatureCardContainer";
import FeatureListItem from "@components/modules/featurecard/FeatureCard";

export default function ExpandibleCards() {
  return (
    <>
      <FeatureCardContainer isBlockElement={false}>
        <FeatureCard 
            featureImageUrl="/card_image_1.svg" 
            showButton={false} 
            cssElement="w-full shadow-xl md:w-1/3 border-4 md:rounded-tl-3xl"
            titleText="" 
            titleSubtitle={<><p className="font-medium text-4xl mt-2"><span className="text-green-600">Connect</span> without the chaos</p></>} 
            titleDescription="The after-school rush has never been smoother. Scroll dinner recipes while the kids use their iPads. Enjoy the same strong WiFi across all devices, in every room."
            buttonText="Get chaos-free connection"
            >
              <FeatureCardCollapse>
                  <ul className="list-none">
                    <FeatureListItem textItem="Keep your touch-tone phone and your number" />
                    <FeatureListItem textItem="Never miss an important call again with call forwarding" />
                    <FeatureListItem textItem="Access your voicemails faster with voice-to-email" />
                    <FeatureListItem textItem="Block spam and anonymously reject callers" />
                    <FeatureListItem textItem="Automatically connect your address to 911" />
                    <FeatureListItem textItem="Options to add phone service for a small monthly fee" />
                  </ul>
                </FeatureCardCollapse>
            </FeatureCard>

            <FeatureCard 
            featureImageUrl="/card_image_1.svg" 
            showButton={false} 
            cssElement="w-full shadow-xl md:w-1/3 border-4 md:rounded-tr-3xl"
            titleText="" 
            titleSubtitle={<><p className="font-medium text-4xl mt-2"><span className="text-green-600">Connect</span> without the chaos</p></>} 
            titleDescription="The after-school rush has never been smoother. Scroll dinner recipes while the kids use their iPads. Enjoy the same strong WiFi across all devices, in every room."
            buttonText="Get chaos-free connection"
            >
              <FeatureCardCollapse>
                  <ul className="list-none">
                    <FeatureListItem textItem="Keep your touch-tone phone and your number" />
                    <FeatureListItem textItem="Never miss an important call again with call forwarding" />
                    <FeatureListItem textItem="Access your voicemails faster with voice-to-email" />
                    <FeatureListItem textItem="Block spam and anonymously reject callers" />
                    <FeatureListItem textItem="Automatically connect your address to 911" />
                    <FeatureListItem textItem="Options to add phone service for a small monthly fee" />
                  </ul>
                </FeatureCardCollapse>
            </FeatureCard>
      </FeatureCardContainer>
      <div className="m-10"></div>
      <FeatureCardContainer isBlockElement={true}>
        <FeatureCard 
            featureImageUrl="/card_image_1.svg" 
            showButton={false} 
            cssElement="w-full md:w-1/3 border md:rounded-l-3xl"
            titleText="" 
            titleSubtitle={<><p className="font-medium text-4xl mt-2"><span className="text-green-600">Connect</span> without the chaos</p></>} 
            titleDescription="The after-school rush has never been smoother. Scroll dinner recipes while the kids use their iPads. Enjoy the same strong WiFi across all devices, in every room."
            buttonText="Get chaos-free connection"
            >
              <FeatureCardCollapse>
                  <ul className="list-none">
                    <FeatureListItem textItem="Keep your touch-tone phone and your number" />
                    <FeatureListItem textItem="Never miss an important call again with call forwarding" />
                    <FeatureListItem textItem="Access your voicemails faster with voice-to-email" />
                    <FeatureListItem textItem="Block spam and anonymously reject callers" />
                    <FeatureListItem textItem="Automatically connect your address to 911" />
                    <FeatureListItem textItem="Options to add phone service for a small monthly fee" />
                  </ul>
                </FeatureCardCollapse>
            </FeatureCard>

            <FeatureCard 
            featureImageUrl="/card_image_1.svg" 
            showButton={false} 
            cssElement="w-full md:w-1/3 border md:rounded-r-3xl"
            titleText="" 
            titleSubtitle={<><p className="font-medium text-4xl mt-2"><span className="text-green-600">Connect</span> without the chaos</p></>} 
            titleDescription="The after-school rush has never been smoother. Scroll dinner recipes while the kids use their iPads. Enjoy the same strong WiFi across all devices, in every room."
            buttonText="Get chaos-free connection"
            >
              <FeatureCardCollapse>
                  <ul className="list-none">
                    <FeatureListItem textItem="Keep your touch-tone phone and your number" />
                    <FeatureListItem textItem="Never miss an important call again with call forwarding" />
                    <FeatureListItem textItem="Access your voicemails faster with voice-to-email" />
                    <FeatureListItem textItem="Block spam and anonymously reject callers" />
                    <FeatureListItem textItem="Automatically connect your address to 911" />
                    <FeatureListItem textItem="Options to add phone service for a small monthly fee" />
                  </ul>
                </FeatureCardCollapse>
            </FeatureCard>
      </FeatureCardContainer>
    </>
  );
}
