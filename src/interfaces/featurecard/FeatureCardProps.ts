import { ReactNode } from "react";

export interface FeatureCardProps {
    children: React.ReactNode;
    featureImageUrl: string;
    showButton?: boolean;
    isButtonOutLine?: boolean;
    hasCollapse?: boolean;
    cssElement?: string;
    showTitleImage?: string;
    titleText: string;
    titleSubtitle: ReactNode ;
    titleDescription: string;
    buttonText: string;
}