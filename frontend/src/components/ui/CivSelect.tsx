import { For, createSignal, onCleanup } from "solid-js";
import styles from './CivSelect.module.css';

interface CivSelectProps<T> {
    enumType: T;
    label?: string;
    value: T[keyof T];
    onChange: (value: T[keyof T]) => void;
}

const CivSelect = <T extends Record<string, string>>({
    enumType,
    label,
    value,
    onChange,
}: CivSelectProps<T>) => {
    const [selected, setSelected] = createSignal<T[keyof T]>(value);
    const [isOpen, setIsOpen] = createSignal(false);
    let dropdownRef: HTMLDivElement | undefined;

    const toggleDropdown = () => { setIsOpen((prev) => !prev); }

    const handleOutsideClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (dropdownRef && !dropdownRef.contains(target)) {
            setIsOpen(false);
        }
    };

    const handleChange = (value: T[keyof T]) => {
        setSelected(() => value);
        onChange(value);
    }

    document.addEventListener("click", handleOutsideClick);
    onCleanup(() => {
        document.removeEventListener("click", handleOutsideClick);
    });

    return (
        <div class={styles.CivSelect} ref={dropdownRef} onClick={toggleDropdown}>
            <div class={"civ-input-wrapper " + styles.CivSelectInput}>
                <div class={"civ-input " + styles.CivSelectValue}>
                    <p>{selected()}</p>
                    <br/>
                </div>
                <div class={"civ-input " + styles.CivSelectArrow}></div>
            </div>
            <div class={styles.CivSelectOptionsWrapper} style={{ display: isOpen() ? "block" : "none" }}>
                <div class={styles.CivSelectOptions}>
                    <For each={Object.entries(enumType)}>
                        {([key, val]) => (
                            <div
                                data-value={key}
                                class="civ-input-wrapper"
                                onClick={(e) => handleChange(val as T[keyof T])}
                            >
                                <div class="civ-input">{val}</div>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </div>
    );
}

export default CivSelect;