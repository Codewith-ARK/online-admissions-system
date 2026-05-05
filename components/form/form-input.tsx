import React from 'react'
import { useForm, useFormContext } from 'react-hook-form';

type FormInputProps = {
    name: string;
    label: string;
    isOptional?: boolean;
    className?: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"]
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">

const InputField = ({
    type,
    name,
    label,
    isOptional = false,
    className,
    ...inputProps
}: FormInputProps) => {
    const { register } = useFormContext();
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <input
                type={type}
                placeholder="Type here"
                className={`input ${className ?? ''}`}
                {...inputProps}           // overrides defaults if passed
                {...register(name)}  // register should be last (owns onChange/onBlur)
            />
            {isOptional && <p className="label">Optional</p>}
        </fieldset>
    )
}

export default InputField
