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
export declare type HousemateUpdateFormInputValues = {
    points?: number;
};
export declare type HousemateUpdateFormValidationValues = {
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HousemateUpdateFormOverridesProps = {
    HousemateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HousemateUpdateFormProps = React.PropsWithChildren<{
    overrides?: HousemateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    housemate?: any;
    onSubmit?: (fields: HousemateUpdateFormInputValues) => HousemateUpdateFormInputValues;
    onSuccess?: (fields: HousemateUpdateFormInputValues) => void;
    onError?: (fields: HousemateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HousemateUpdateFormInputValues) => HousemateUpdateFormInputValues;
    onValidate?: HousemateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HousemateUpdateForm(props: HousemateUpdateFormProps): React.ReactElement;
