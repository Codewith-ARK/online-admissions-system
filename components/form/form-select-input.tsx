import React from 'react'
import { useFormContext } from 'react-hook-form'

type SelectOption = {
    label: string;
    value: string | number;
    disabled?: boolean;
}

type SelectInputProps = {
    name: string;
    label: string;
    options: SelectOption[];
    isOptional?: boolean;
    className?: string;
    placeholder?: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "name" | "defaultValue">

const SelectInput = ({
    name,
    label,
    isOptional = false,
    className,
    options,
    placeholder = "Select an option",
    ...selectProps
}: SelectInputProps) => {
    const { register } = useFormContext();
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <select
                defaultValue=""
                className={`select ${className ?? ''}`}
                {...selectProps}
                {...register(name)}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option
                        key={`${option.value}`}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            {isOptional && <span className="label">Optional</span>}
        </fieldset>
    )
}

export default SelectInput
