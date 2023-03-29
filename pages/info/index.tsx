import type { NextPage } from "next";
import styles from "../../src/styles/Default.module.css";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapPin } from "@fortawesome/free-solid-svg-icons";


const Info: NextPage = () => {
    const { t } = useTranslation("common");

    return (
        <Layout>
            <h1 className={styles.title}>{t("infoTitle")}</h1>

            <div className={styles.infoContainer}>

                <div className={styles.infoCard}>
                    <h2>{t("whereTitle")}</h2>
                    <p>
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
                    <p dangerouslySetInnerHTML={{ __html: t("giftText") }} />
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
