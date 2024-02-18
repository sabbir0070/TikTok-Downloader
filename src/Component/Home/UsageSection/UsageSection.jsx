
import usage_ios from "/src/assets/images/usage-ios.png";
import usage_pc from "/src/assets/images/usage-pc.png";
import { useTranslation } from "react-i18next";

const UsageSection = () => {
const { t } = useTranslation("common");

  return (
    <div>
        <section className="usage-section" aria-label="Usage Section">
          <div className="container">
            <div className="usage-list">
              {/* Usage 1 */}
              <div className="usage">
                <div className="usage-content">
                  <h3> {t("How to download TikTok video on PC")} </h3>
                  <p>
                    {t(
                      "This method is universal and convenient. A file will be saved without any trademark in the highest quality. It works perfectly on Windows, Mac OS, and Linux. PC users are not required to install any additional apps to save TikTok videos, and this is another plus when using this method."
                    )}
                  </p>
                  <p>
                    {t(
                      "In order to use the :appName app on PC, laptop (Windows 7, 10), Mac, or a laptop you will need to copy a link from the website."
                    )}
                  </p>
                  <p>
                    {t(
                      'Next, go back to :appName tool and paste the link in the text field on the main page. After that, you need to click on the "Download" button to get the link.'
                    )}
                  </p>
                </div>
                <figure className="usage-image">
                  <img
                    src={usage_pc}
                    alt="TikTok downloader on PC"
                    width="1080"
                    height="1080"
                  />
                </figure>
              </div>

              {/* Usage 2 */}
              <div className="usage">
                <div className="usage-content">
                  <h3>
                    {t("How to download TikTok video on iPhone or iPad (iOS)")}
                  </h3>
                  <p>
                    {t(
                      "If you are an iPhone or iPad owner, you need to install the Documents by Readdle app from the App Store."
                    )}
                  </p>
                  <p>
                    {t(
                      "Due to Apple security policy, iOS users starting with the 12th version can't save TikTok videos directly from the browser. Copy the link of any TikTok file via the app, and launch the Documents by Readdle."
                    )}
                  </p>
                  <p>
                    {t(
                      "In the bottom right corner of the screen, you will see a web browser icon. Tap it."
                    )}
                  </p>
                  <p>
                    {t(
                      "When the browser is open, go to :appHost and paste the link in the text field. Choose the option you like and press the button again. The video will be saved to your device."
                    )}
                  </p>
                </div>
                <figure className="usage-image">
                  <img
                    src={usage_ios}
                    alt="TikTok downloader on iOS"
                    width="1080"
                    height="1080"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default UsageSection;