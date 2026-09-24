import "add-to-calendar-button";
// CUSTOMIZE: import one language pack per non-English locale in next-i18next.config.js.
// Register the non-English packs up front. Without this the web component fetches
// them at runtime, which the site's connect-src 'self' CSP blocks.
import "add-to-calendar-button/i18n/fr";
import "add-to-calendar-button/i18n/nl";
// Same for the non-default button style: only "default" ships in the main bundle.
import "add-to-calendar-button/styles/text";

import type { ATCBLanguage } from "add-to-calendar-button";
import { useTranslation } from "next-i18next/pages";
import { useRouter } from "next/router";

const AddToCalendar = () => {
    const { t } = useTranslation("common");
    const { locale } = useRouter();

    // The site's three locales are all languages the button ships translations for.
    // CUSTOMIZE: keep this list in sync with the locales in next-i18next.config.js.
    const buttonLanguage = (["en", "fr", "nl"] as const).find((l) => l === locale) ?? "en";

    // v3 is a web component: attributes are kebab-case strings, and its own styles
    // live in shadow DOM, so it is themed through these attributes rather than CSS.
    // CUSTOMIZE: set your own date, times, IANA time zone (e.g. "Europe/Paris") and venue
    // address, matching `weddingDateAndTime` and `weddingLocation` in public/locales/<lang>/common.json.
    // Also rename `ical-file-name` (e.g. "Our-Wedding").
    return (
        <add-to-calendar-button
            name={t("addToCalendarEventTitle")}
            label={t("addToCalendarCTA")}
            start-date="2023-05-14"
            end-date="2023-05-14"
            start-time="13:00"
            end-time="23:59"
            time-zone="Europe/London"
            location="The Beacon, Tea Garden Ln, Tunbridge Wells TN3 9JH"
            options="'Apple','Google','iCal','Microsoft365','Outlook.com','Yahoo'"
            ical-file-name="Reminder-Event"
            language={buttonLanguage satisfies ATCBLanguage}
            button-style="text"
            list-style="dropdown"
            light-mode="bodyScheme"
            hide-background="true"
            hide-checkmark="true"
            style-light="--font: 'Courier New', Courier, monospace; --btn-text: #000; --btn-hover-text: #000; --list-text: #000; --list-hover-text: #000;"
        />
    );
};

export default AddToCalendar;
