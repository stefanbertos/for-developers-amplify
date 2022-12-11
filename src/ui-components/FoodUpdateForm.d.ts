/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Food } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FoodUpdateFormInputValues = {
    title?: string;
    description?: string;
    quantity?: number;
    pickUpTime?: string;
    location?: string;
    image?: string;
};
export declare type FoodUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    pickUpTime?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodUpdateFormOverridesProps = {
    FoodUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
    pickUpTime?: FormProps<TextFieldProps>;
    location?: FormProps<TextAreaFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodUpdateFormProps = React.PropsWithChildren<{
    overrides?: FoodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    food?: Food;
    onSubmit?: (fields: FoodUpdateFormInputValues) => FoodUpdateFormInputValues;
    onSuccess?: (fields: FoodUpdateFormInputValues) => void;
    onError?: (fields: FoodUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FoodUpdateFormInputValues) => FoodUpdateFormInputValues;
    onValidate?: FoodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FoodUpdateForm(props: FoodUpdateFormProps): React.ReactElement;
