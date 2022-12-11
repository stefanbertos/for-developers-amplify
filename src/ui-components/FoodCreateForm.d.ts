/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FoodCreateFormInputValues = {
    image?: string;
    title?: string;
    description?: string;
    quantity?: number;
    pickUpTime?: string;
    location?: string;
};
export declare type FoodCreateFormValidationValues = {
    image?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    pickUpTime?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodCreateFormOverridesProps = {
    FoodCreateFormGrid?: FormProps<GridProps>;
    image?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextAreaFieldProps>;
    quantity?: FormProps<TextFieldProps>;
    pickUpTime?: FormProps<TextFieldProps>;
    location?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type FoodCreateFormProps = React.PropsWithChildren<{
    overrides?: FoodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FoodCreateFormInputValues) => FoodCreateFormInputValues;
    onSuccess?: (fields: FoodCreateFormInputValues) => void;
    onError?: (fields: FoodCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FoodCreateFormInputValues) => FoodCreateFormInputValues;
    onValidate?: FoodCreateFormValidationValues;
} & React.CSSProperties>;
export default function FoodCreateForm(props: FoodCreateFormProps): React.ReactElement;
