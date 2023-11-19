/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HousemateCreateFormInputValues = {
    points?: number;
};
export declare type HousemateCreateFormValidationValues = {
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HousemateCreateFormOverridesProps = {
    HousemateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HousemateCreateFormProps = React.PropsWithChildren<{
    overrides?: HousemateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HousemateCreateFormInputValues) => HousemateCreateFormInputValues;
    onSuccess?: (fields: HousemateCreateFormInputValues) => void;
    onError?: (fields: HousemateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HousemateCreateFormInputValues) => HousemateCreateFormInputValues;
    onValidate?: HousemateCreateFormValidationValues;
} & React.CSSProperties>;
export default function HousemateCreateForm(props: HousemateCreateFormProps): React.ReactElement;
