document.addEventListener("DOMContentLoaded", function () {
    // Get all dropdown wrappers
    const dropdowns = document.querySelectorAll(".civ-select");

    dropdowns.forEach((dropdown) => {
        const hiddenInput = dropdown.querySelector(".select-hidden");
        const selectInput = dropdown.querySelector(".civ-select-input");
        const selectValue = dropdown.querySelector(".civ-select-display-value");
        const optionsWrapper = dropdown.querySelector(".civ-select-options-wrapper");

        optionsWrapper.style.display = "none";

        // Toggle dropdown options visibility
        selectInput.addEventListener("click", (event) => {
            // Close other dropdowns
            document.querySelectorAll(".civ-select-options-wrapper").forEach((opts) => {
                if (opts !== optionsWrapper) opts.style.display = "none";
            });

            // Toggle current dropdown
            optionsWrapper.style.display =
                optionsWrapper.style.display === "block" ? "none" : "block";

            // Prevent event propagation to document click handler
            event.stopPropagation();
        });

        // Handle option selection
        optionsWrapper.addEventListener("click", (event) => {
            const selectedOption = event.target.closest("[data-value]");
            if (selectedOption) {
                const value = selectedOption.getAttribute("data-value");
                const text = selectedOption.textContent;

                // Update the hidden input value
                hiddenInput.value = value;

                // Update the displayed dropdown text
                selectValue.textContent = text;

                // Close the dropdown options
                optionsWrapper.style.display = "none";
            }

            // Prevent event propagation to document click handler
            event.stopPropagation();
        });

        // Close the dropdown when clicking outside
        document.addEventListener("click", () => {
            optionsWrapper.style.display = "none";
        });
    });
});
