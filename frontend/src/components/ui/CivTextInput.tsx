import { For, createSignal } from "solid-js";

interface CivTextInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    maxLength?: number;
    required?: boolean;
    onChange: (value: string) => void;
}

const CivTextInput = ({
    label,
    placeholder,
    value,
    maxLength,
    required,
    onChange,
}: CivTextInputProps) => {
    const handleChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        onChange(target.value);
    }

    return (
        <div class="civ-input-wrapper">
            {label && <label>{label}</label>}
            <input
                class="civ-input"
                type="text"
                value={value}
                placeholder={placeholder}
                onInput={handleChange}
                maxlength={maxLength}
                required={required}
            />
        </div>
    );
}

export default CivTextInput;