"use client";
import { useEffect } from "react";

const GTranslate = () => {
  useEffect(() => {
    // Define the gtranslate settings
    window.gtranslateSettings = {
      default_language: "fr",
      languages: ["fr", "en", "it", "ru"],
      wrapper_selector: ".gtranslate_wrapper",
    };

    // Dynamically load the GTranslate script
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.defer = true;
    document.body.appendChild(script);

    // After the script loads, customize the language selector
    script.onload = () => {
      const languageSelect = document.querySelector(".gt_selector");

      // Check if the select element exists
      if (languageSelect) {
        // Remove the "Select Language" option
        const defaultOption = languageSelect.querySelector('option[value=""]');
        if (defaultOption) {
          defaultOption.remove();
        }

        // Set the selected option to French
        languageSelect.value = "fr|fr";

        // Trigger the change event to reflect the change in the UI
        const event = new Event("change", { bubbles: true });
        languageSelect.dispatchEvent(event);
      }
    };

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslate;
