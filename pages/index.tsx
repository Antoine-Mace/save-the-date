import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapPin } from "@fortawesome/free-solid-svg-icons";

import { atcb_init } from "add-to-calendar-button";
import { useEffect, useMemo } from "react";

import "add-to-calendar-button/assets/css/atcb.css";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  useEffect(atcb_init, []);

  const event = useMemo(
    () =>
      JSON.stringify({
        name: t("addToCalendarEventTitle"),
        startDate: "2023-05-14",
        endDate: "2023-05-14",
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
        timeZone: "Europe/London",
        iCalFileName: "Reminder-Event",
      }),
    []
  );

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

      <div className="atcb">{event}</div>

      <main className={styles.main}>
        <h1 className={styles.title}>{t("title")}</h1>
        <h2 className={styles.mainInfo}>
          {t("weddingDate")}
          <br></br>
          <a href="https://goo.gl/maps/WDnfZMKcNV65ZeVB8" target="_blank">
            <FontAwesomeIcon icon={faMapPin} /> {t("weddingLocation")}
          </a>
        </h2>
        <a
          className={styles.card}
          target="_blank"
          href="https://forms.gle/EZonTT83boCHZTMWA"
        >
          <p>{t("weddingConfrimationCTA")}</p>
        </a>
        <br></br>
      </main>

      <footer className={styles.footer}>
        <p>Bonnie & Antoine Macé © 2022</p>
      </footer>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
