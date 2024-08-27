import { Accordion as AccordionType } from "@/types/types";
import Link from "next/link";
import Accordion from "../ui/accordion/accordion";
import AccordionItem from "../ui/accordion/accordion-item";
import ChevronRightIcon from "../icons/chrvron-right-icon";

const FaqSection: React.FC<{ faqs: AccordionType[] | undefined }> = ({
  faqs,
}) => {
  return (
    <div className="w-full p-8 flex flex-col bg-[#EBECF2]">
      <div className="w-full hidden lg:flex items-center justify-between">
        <div className="text-4xl font-semibold">
          Have questions?&nbsp;
          <span className="text-green-600">We’ve got answers.</span>
        </div>
        <Link href="" className="flex items-center space-x-4 text-[#003595]">
          <span>View all FAQs</span>
          <ChevronRightIcon />
        </Link>
      </div>
      <div className="text-2xl font-semibold lg:hidden">
        <span className="text-green-600">Everything</span> you need to know (and
        more)
      </div>
      <div className="mt-4 w-full flex items-center">
        <Accordion>
          {faqs?.map((faq, index) => (
            <AccordionItem
              key={index}
              header={faq.accordionSetHeader}
              content={faq.accordionSetContent}
            />
          ))}
        </Accordion>
      </div>
      <div className="mt-8 flex items-center justify-start lg:hidden">
        <Link href="" className="flex items-center space-x-4 text-[#003595]">
          <span>View all FAQs</span>
          <ChevronRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default FaqSection;
