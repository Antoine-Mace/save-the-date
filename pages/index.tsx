import type { NextPage } from "next";
import styles from "../src/styles/Default.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapPin } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "next-i18next/pages";

import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import Layout from "../src/components/layout";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
        <h1 className={styles.title}>{t("title")}</h1>
        <h2 className={styles.mainInfo}>
        {t("weddingDateAndTime")}
        <br></br>
        <br></br>
        {/* CUSTOMIZE: Google Maps link to your venue (also used in pages/info/index.tsx). */}
        <a href="https://goo.gl/maps/WDnfZMKcNV65ZeVB8" rel="noreferrer" target="_blank" className={styles.link}>
            <FontAwesomeIcon icon={faMapPin} /> {t("weddingLocation")}
          </a>
      </h2>
      {/* CUSTOMIZE: optional RSVP link. Uncomment it, set your form URL and the
          `weddingConfirmationCTA` text in public/locales/<lang>/common.json. */}
      {/* <a
        className={styles.card}
        target="_blank"
        href="https://forms.gle/EZonTT83boCHZTMWA"
      >
        <p>{t("weddingConfirmationCTA")}</p>
      </a>
      */}
    </Layout >
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
