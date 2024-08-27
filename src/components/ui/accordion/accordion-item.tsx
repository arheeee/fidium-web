"use client";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { AccordionItemProps } from "@/types/types";
import React, { useMemo, useState } from "react";
import PlusIcon from "@/components/icons/plus-icon";
import MinusIcon from "@/components/icons/minus-icon";

const AccordionCollapsedIcon: React.FC = () => {
  return (
    <div className="size-7 flex items-center justify-center rounded-full bg-[#EBECF2]">
      <PlusIcon />
    </div>
  );
};

const AccordionExpandedIcon: React.FC = () => {
  return (
    <div className="size-7 flex items-center justify-center rounded-full bg-[#EBECF2]">
      <MinusIcon />
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ header, content }) => {
  const [expanded, setExpanded] = useState(false);

  const expandIcon = useMemo(() => {
    return expanded ? <AccordionExpandedIcon /> : <AccordionCollapsedIcon />;
  }, [expanded]);

  return (
    <Accordion
      className="py-2"
      expanded={expanded}
      onChange={(e, ex) => setExpanded(ex)}
    >
      <AccordionSummary
        expandIcon={expandIcon}
        className="font-semibold text-base lg:text-xl"
      >
        {header}
      </AccordionSummary>
      <AccordionDetails>
        <div
          className="text-sm lg:text-base font-normal"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
