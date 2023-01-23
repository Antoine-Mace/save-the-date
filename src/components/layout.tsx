import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Default.module.css";

import { useTranslation } from "next-i18next";

import AddToCalendar from "./addToCalendar";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from 'next/link'


const Layout: NextPage<{ children: any }> = ({ children }) => {
    const router = useRouter();
    const { t } = useTranslation("common");

    const navbarItemClass = (path?: string) => router.pathname === path ? styles.navbarItemActive : styles.navbarItem;

    // useEffect(() => {
    //     window.onscroll = function () { scrollFunction() };

    //     function scrollFunction() {
    //         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //             document.getElementById("navbar").style.backgroundColor = "black";
    //         } else {
    //             document.getElementById("navbar").style.fontSize = "transparent";
    //         }
    //     }
    // }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>{t("pageTitle")}</title>
                <meta name="description" content={t("pageDescription")} />
                <meta
                    name="viewport"
                    content="width=device-width, height=device-height, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=League+Script"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Courier+New"
                ></link>
            </Head>

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

            <AddToCalendar />

            <nav className={styles.navbar} id="navbar">
                <Link
                    href="/"
                    passHref legacyBehavior
                >
                    <a className={navbarItemClass("/")}>
                        <FontAwesomeIcon icon={faHome} />
                    </a>
                </Link>
                <Link
                    href="/info"
                    passHref legacyBehavior
                >
                    <a className={navbarItemClass("/info")}>
                        <p>{t("infoTitle")}</p>
                    </a>
                </Link>
                <a
                    className={navbarItemClass()}
                    target="_blank"
                    href="https://forms.gle/EZonTT83boCHZTMWA"
                >
                    <p>RSVP</p>
                </a>
            </nav>


            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>Bonnie & <a target="_blank" href="https://www.antoinemace.com">Antoine Macé</a> © 2023</p>
            </footer>

        </div >
    );
};
export default Layout;
