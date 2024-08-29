import { ExpandingCardsEntries } from "@/interfaces/featurecard/ExpandingCards"
import { StaticCardsEntries } from "@/interfaces/featurecard/StaticCards"
import { VideoCardsEntries } from "@/interfaces/featurecard/VideoCards"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const filterEntryByTypeName = (data: ExpandingCardsEntries | StaticCardsEntries | VideoCardsEntries, typeName: string ) => {
    return data ? data?.entries[0].pageBlocks.filter((page) => page.__typename === typeName) : []
}

export const addCssClassToHTMLText = (textSelected : string, addingClass :string ) => {
    return textSelected.replace("<span>", `<span class="${addingClass}" >` );
}