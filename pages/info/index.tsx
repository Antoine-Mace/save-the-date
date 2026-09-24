import type { NextPage } from "next";
import styles from "../../src/styles/Default.module.css";
import { useTranslation } from "next-i18next/pages";
import { Trans } from "react-i18next";

import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import Layout from "../../src/components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapPin } from "@fortawesome/free-solid-svg-icons";


// CUSTOMIZE: your own gift/honeymoon fund link, or remove the Gifts card below.
const HONEYMOON_FUND_URL =
    "https://www.leetchi.com/c/bonnie-antoines-wedding?utm_source=copylink&utm_medium=social_sharing";

const Info: NextPage = () => {
    const { t } = useTranslation("common");

    return (
        <Layout>
            <h1 className={styles.title}>{t("infoTitle")}</h1>

            <div className={styles.infoContainer}>

                <div className={styles.infoCard}>
                    <h2>{t("whereTitle")}</h2>
                    <p>
                        {/* CUSTOMIZE: Google Maps link to your venue (also used in pages/index.tsx). */}
                        <a href="https://goo.gl/maps/WDnfZMKcNV65ZeVB8" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faMapPin} /> {t("weddingLocation")}
                        </a>
                    </p>
                </div>


                <div className={styles.infoCard}>
                    <h2>{t("whenTitle")}</h2>
                    <p>
                        {t("weddingDateAndTime")}
                    </p>
                </div>
            </div>

            <hr />
            {/* CUSTOMIZE: these cards are specific to Bonnie & Antoine's wedding ("Travelling to the UK" only applies
                to a UK wedding). Add, remove or reword them together with their keys in
                public/locales/<lang>/common.json. */}
            <div className={styles.infoContainer}>
                <div className={styles.infoCard}>
                    <h2>{t("travellingToTheUKTitle")}</h2>
                    <p>{t("travellingToTheUKText")}</p>
                </div>
                <div className={styles.infoCard}>
                    <h2>{t("howToGetHereTitle")}</h2>
                    <p>{t("howToGetHereText")}</p>
                </div>
                <div className={styles.infoCard}>
                    <h2>{t("whereToStayTitle")}</h2>
                    <p>{t("whereToStayText")}</p>
                </div>
                <div className={styles.infoCard}>
                    <h2>{t("onTheDayTitle")}</h2>
                    <p>{t("onTheDayText")}</p>
                </div>
                <div className={styles.infoCard}>
                    <h2>{t("dietaryRestrictionsTitle")}</h2>
                    <p>{t("dietaryRestrictionsText")}</p>
                </div>
                <div className={styles.infoCard}>
                    <h2>{t("dressCodeTitle")}</h2>
                    <p>{t("dressCodeText")}</p>
                </div>
                <div className={styles.infoCard}>
                    <h2>{t("giftTitle")}</h2>
                    <p>
                        <Trans
                            t={t}
                            i18nKey="giftText"
                            components={{
                                donate: (
                                    <a
                                        href={HONEYMOON_FUND_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                    />
                                ),
                            }}
                        />
                    </p>
                </div>
            </div>
        </Layout >
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Info;
