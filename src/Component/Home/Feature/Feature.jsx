import { useTranslation } from "react-i18next";
import feature_download from "/src/assets/images/feature-download.png";
import feature_mp3 from "/src/assets/images/feature-mp3.png";
import feature_vip from "/src/assets/images/feature-vip.png";

const Feature = () => {
const { t } = useTranslation("common");

  return (
    <div>
             <section className="features-section" aria-label="Feature Section">
          <div className="container">
            <h2>{t("Download TikTok videos with ease")}</h2>
            <div className="card">
              <img
                src={feature_download}
                alt="Unlimited downloads"
                height="125px"
                width="200px"
                loading="lazy"
              />
              <h3>{t("Unlimited downloads")}</h3>
              <p>
                {t(
                  "Save as many videos as you need, no limits or any other restrictions."
                )}
              </p>
            </div>
            <div className="card">
              <img
                src={feature_vip}
                alt="No Watermark!"
                height="125px"
                width="200px"
                loading="lazy"
              />
              <h3>{t("No TikTok Watermark!")}</h3>
              <p>
                {t(
                  "Download TikTok videos without watermark, it removes the TikTok logo."
                )}
              </p>
            </div>
            <div className="card">
              <img
                src={feature_mp3}
                alt="MP4 and MP3 supported"
                height="125px"
                width="200px"
                loading="lazy"
              />
              <h3>{t("MP4 and MP3 supported")}</h3>
              <p>
                {t(
                  "Save videos in hd quality, MP4 file format or convert to audio MP3."
                )}
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Feature;