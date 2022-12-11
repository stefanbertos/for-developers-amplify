/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FoodCardProps } from "./FoodCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type FoodCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FoodCardProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function FoodCardCollection(props: FoodCardCollectionProps): React.ReactElement;
