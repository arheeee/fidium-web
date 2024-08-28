import FiftyFiftyContentBlock from "@/components/content-block/content-block";
import InfoBlock from "@/components/content-block/info-block";

export default async function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-12 bg-[#EBECF2]">
      <FiftyFiftyContentBlock
        image="/images/image-1.jpg"
        heading={`<h3>
            <span style="color: #008533">Bringing</span>&nbsp; high-speed
            fiber internet across the country
          </h3>`}
        content={`<p>See if Fidium Fiber is coming to your town – when you pre-order your
            high-speed fiber internet, you’ll jump to the top of our
            installation list.</p>`}
      />
      <InfoBlock heading="Title" content="Content" />
    </div>
  );
}
