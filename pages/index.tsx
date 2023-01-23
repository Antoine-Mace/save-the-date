import type { NextPage } from "next";
import styles from "../src/styles/Default.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapPin } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
        <a href="https://goo.gl/maps/WDnfZMKcNV65ZeVB8" target="_blank" className={styles.link}>
            <FontAwesomeIcon icon={faMapPin} /> {t("weddingLocation")}
          </a>
      </h2>
      {/* <a
        className={styles.card}
        target="_blank"
        href="https://forms.gle/EZonTT83boCHZTMWA"
      >
        <p>{t("weddingConfirmationCTA")}</p>
      </a> */}
    </Layout >
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
