import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Default.module.css";

import { useTranslation } from "next-i18next/pages";

import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { League_Script } from "next/font/google";

// Self-hosted at build time, so the site makes no request to Google Fonts.
const leagueScript = League_Script({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-league-script",
});

// The calendar button registers a custom element on import, which needs a browser.
const AddToCalendar = dynamic(() => import("./addToCalendar"), { ssr: false });

const Layout: NextPage<{ children: any }> = ({ children }) => {
    const router = useRouter();
    const { t } = useTranslation("common");

    const navbarItemClass = (path?: string) => router.pathname === path ? styles.navbarItemActive : styles.navbarItem;

    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <div className={`${styles.container} ${leagueScript.variable}`}>
            <Head>
                <title>{t("pageTitle")}</title>
                <meta name="description" content={t("pageDescription")} />
                <meta
                    name="viewport"
                    content="width=device-width, height=device-height, initial-scale=1"
                />
            </Head>

            {/* CUSTOMIZE: replace public/wedding.mp4 with your own video. If the important part of
                the frame isn't at the top, adjust `object-position` on .backgound in Default.module.css. */}
            <video
                playsInline
                autoPlay
                muted
                loop
                className={styles.backgound}
            >
                <source src="/wedding.mp4" type="video/mp4"></source>
            </video>

            <div className={styles.backgound}></div>

            <div className={styles.calendarButton}>
                <AddToCalendar />
            </div>

            <nav className={styles.navbar} id="navbar">
                <Link href="/" className={navbarItemClass("/")}>
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link href="/info" className={navbarItemClass("/info")}>
                    <p>{t("infoTitle")}</p>
                </Link>
                {/* CUSTOMIZE: your own menu/RSVP form link, or remove this item. */}
                <a
                    className={navbarItemClass()}
                    target="_blank"
                    rel="noreferrer"
                    href="https://forms.gle/forfcoWhudKuxVYn7"
                >
                    <p>{t("chooseYourMenu")}</p>
                </a>
            </nav>


            <main className={styles.main}>
                {children}
            </main>
            {/* CUSTOMIZE: your names and your own link in the footer. */}
            <footer className={styles.footer}>
                <p>Bonnie & <a rel="noreferrer" target="_blank" href="https://www.antoinemace.com">Antoine Macé</a> © {year}</p>
            </footer>

            {/* CUSTOMIZE: links to the original project. Keep it as credit, point it at your fork, or remove it. */}
            <a
                href="https://github.com/Antoine-Mace/save-the-date"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubBadge}
                aria-label={`${t("openSourceBadge")} (${t("opensInNewTab")})`}
            >
                <svg viewBox="0 0 16 16" width="20" height="20" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>{t("openSourceBadge")}</span>
            </a>

        </div >
    );
};
export default Layout;
