"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion/accordion"
import { GET_ALL_FAQ } from "@/utils/queries";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect } from "react";

type Faq = {
  id: string;
  header: string;
  content: string;
}

export default function FAQs() {
  const { data, loading, error } = useQuery(GET_ALL_FAQ);
  if (loading) return null;
  return (
    <main className="w-full max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl px-4 lg:px-0 hidden lg:flex">
          Have questions? <span className="text-[#008533]">We’ve got answers.</span>
        </h1>
        <h1 className="text-3xl px-4 lg:px-0 lg:hidden">
          <span className="text-[#008533]">Everything</span> you need to know (and more)
        </h1>
        <Link href="/" className="text-[#003595] text-lg hidden lg:flex items-center space-x-2">
          <span>View all FAQs</span>
          <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector 1" d="M1 9.5L5 5.5L1 1.5" stroke="#003595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
      <div className="mt-8 w-full bg-white px-4 rounded-lg border-gray-100 shadow">
        <Accordion type="multiple">
          {data.faqsEntries.map((faq: any) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b-2 border-gray-100">
              <AccordionTrigger>
                {faq.title}
              </AccordionTrigger>
              <AccordionContent>
                <div dangerouslySetInnerHTML={{__html: faq.bodyContent[0].richText}} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Link href="/" className="text-[#003595] text-lg pl-4 mt-8 flex lg:hidden items-center space-x-2">
        <span>View all FAQs</span>
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector 1" d="M1 9.5L5 5.5L1 1.5" stroke="#003595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </main>
  );
}