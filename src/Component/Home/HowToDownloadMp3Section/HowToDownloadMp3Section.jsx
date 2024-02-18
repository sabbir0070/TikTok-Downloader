import { useTranslation } from "react-i18next";


const HowToDownloadMp3Section = () => {
const { t } = useTranslation("common");

  return (
    <div>
         <section className="how-to-section" aria-label="How to Section">
          <div className="container">
            <h2>
              {t(
                "The fastest and easiest way to save Audio is to copy a link and paste it on the main page of our website www.ccctik.com"
              )}
            </h2>
            <div className="how-to-card">
              <h3> {t("How to download TikTok without watermark?")} </h3>
              <ol>
                <li className="inset-i-start">
                  <b> {t("Find a TikTok")} </b>
                  <span>
                    {t(
                      "play a video that you want to save to your mobile device, using the TikTok app"
                    )}
                  </span>
                </li>
                <li className="inset-i-start">
                  <b>{t("Copy the link")}</b>
                  <span>
                    {t(
                      'tap "Share" (the arrow button on top of a chosen video), and then tap "Copy link"'
                    )}
                  </span>
                </li>
                <li className="inset-i-start">
                  <b> {t("Download")} </b>
                  <span>
                    {t(
                      'go back to :appName and paste the link in the text field on the page and tap on the "Download" button'
                    )}
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>
    </div>
  );
};

export default HowToDownloadMp3Section;