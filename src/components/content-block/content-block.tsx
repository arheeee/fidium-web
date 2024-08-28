import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type ContentBlockProps = {
  reverse?: boolean;
  inline?: boolean;
  image: string;
  heading: string;
  content: string;
  icon?: string;
};

const FiftyFiftyContentBlock: React.FC<ContentBlockProps> = ({
  reverse,
  inline,
  image,
  heading,
  content,
  icon,
}) => {
  return (
    <div className="relative w-full lg:w-[1200px] h-auto lg:min-h-[399px] flex flex-col lg:flex-row">
      {reverse && (
        <>
          <ContentBlockContent
            reversed={reverse || false}
            inline={inline}
            heading={heading}
            content={content}
            icon={icon}
          />
          <ImageBlock
            reversed={reverse || false}
            inline={inline}
            image={image}
          />
        </>
      )}
      {!reverse && (
        <>
          <ImageBlock
            reversed={reverse || false}
            inline={inline}
            image={image}
          />
          <ContentBlockContent
            reversed={reverse || false}
            inline={inline}
            heading={heading}
            content={content}
            icon={icon}
          />
        </>
      )}
    </div>
  );
};

const ImageBlock = ({
  reversed,
  inline,
  image,
}: {
  reversed: boolean;
  inline?: boolean;
  image: string;
}) => {
  return (
    <div
      className={clsx(
        "w-auto lg:w-[588px] h-399px]",
        !inline && reversed && "lg:absolute lg:right-28 lg:bottom-12",
      )}
    >
      <Image
        src={image}
        alt="Block content imag"
        height={399}
        width={588}
        className="w-full"
      />
    </div>
  );
};

const ContentBlockContent = ({
  reversed,
  inline,
  heading,
  content,
  link,
  linkLabel,
  icon,
}: {
  reversed: boolean;
  inline?: boolean;
  heading: string;
  content: string;
  link?: string;
  linkLabel?: string;
  icon?: string;
}) => {
  return (
    <div
      className={clsx(
        "z-10 pt-8 lg:px-24 lg:py-24 bg-white w-full lg:w-[588px] h-auto lg:h-[399px] border border-gray-100 rounded-3xl shadow flex flex-col justify-center items-center",
        !inline && !reversed && "lg:absolute lg:top-12 lg:right-28 ",
      )}
    >
      <div className="relative">
        <div className="flex flex-col">
          <div
            className="text-2xl lg:text-4xl px-4 lg:px-0"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <div
            className="mt-6 mb-8 px-4 lg:px-0"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {link && linkLabel && (
            <Link
              href={link}
              className="px-6 py-3 w-full lg:w-fit text-center bg-[#003595] text-[#F7F8FA] rounded-md"
            >
              [linkLabel]
            </Link>
          )}
          {icon && (
            <div
              className={clsx(
                "hidden absolute size-[120px] -top-28 lg:flex items-center justify-center rounded-full bg-gradient-to-r from-[#00AE42] to-[#93D500]",
                reversed && "-left-24",
                !reversed && "-right-24",
              )}
            >
              <Image
                width={0}
                height={0}
                alt="Icon"
                src={icon}
                className="size-6"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiftyFiftyContentBlock;
