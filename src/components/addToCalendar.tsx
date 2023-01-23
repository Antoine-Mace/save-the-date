import { atcb_init } from "add-to-calendar-button";
import { useEffect, useMemo } from "react";
import "add-to-calendar-button/assets/css/atcb.css";
import { useTranslation } from "next-i18next";

const AddToCalendar = () => {
    const { t } = useTranslation("common");

    useEffect(() => {
        atcb_init()
    }, []);

    const event = useMemo(
        () =>
            JSON.stringify({
                name: t("addToCalendarEventTitle"),
                startDate: "2023-05-14",
                endDate: "2023-05-14",
                startTime: "13:00",
                endTime: "23:59",
                timeZone: "Europe/London",
                location: "The Beacon, Tea Garden Ln, Tunbridge Wells TN3 9JH",
                label: t("addToCalendarCTA"),
                options: [
                    "Apple",
                    "Google",
                    "iCal",
                    "Microsoft365",
                    "Outlook.com",
                    "Yahoo",
                ],
                iCalFileName: "Reminder-Event",
            }),
        [t]
    );

    return <div className="atcb">{event}</div>
}

export default AddToCalendar;