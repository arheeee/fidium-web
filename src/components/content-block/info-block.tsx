type InfoBlockProps = {
  heading: string;
  content: string;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ heading, content }) => {
  return (
    <div className="w-full lg:px-12 lg:py-6 bg-transparent lg:bg-white lg:rounded-2xl">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:divide-x-2 lg:divide-[#DADDE6]">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-3 lg:px-8">
          <div
            className="text-2xl"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-8 mt-4 lg:mt-0">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
