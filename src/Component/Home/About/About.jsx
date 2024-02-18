
import { useTranslation } from "react-i18next";

const About = () => {
const { t } = useTranslation("common");
  return (
    <div>
         <section className="about-section" aria-label="About Section">
          <div className="container">
            <p>
              {t(
                ":appName is one of the most popular tools to save no-watermark TikTok videos. No need to install any apps to use our service, all you need is a browser and a valid link to paste in the input field on :appName website and remove the watermark from TikTok video."
              )}
            </p>
            <div className="service-cards">
              {/* Service Cards */}
              {/* Service Card 1 */}
              <div className="service-card">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p>
                  {t(
                    "It's a perfect solution for post-editing and publishing videos."
                  )}
                </p>
              </div>
              {/* {Service Cards} */}
              <div className="service-card">
                <div className="icon">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p>
                  {" "}
                  {t(
                    "It is free. You can save as many mp4 files as you want."
                  )}{" "}
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="service-card">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                </div>
                <p>
                  {t(
                    "Registration is not required. Just open our website and paste the link."
                  )}
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="service-card">
                <div className="icon">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
                  </svg>
                </div>
                <p>
                  {" "}
                  {t(
                    "Download TikTok videos without watermark at high speed."
                  )}{" "}
                </p>
              </div>

              {/* Service Card 5 */}
              <div className="service-card">
                <div className="icon">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M17.721 1.599a.75.75 0 01.279.584v11.29a2.25 2.25 0 01-1.774 2.198l-2.041.442a2.216 2.216 0 01-.938-4.333l2.662-.576a.75.75 0 00.591-.734V6.112l-8 1.73v7.684a2.25 2.25 0 01-1.774 2.2l-2.042.44a2.216 2.216 0 11-.935-4.33l2.659-.574A.75.75 0 007 12.53V4.237a.75.75 0 01.591-.733l9.5-2.054a.75.75 0 01.63.149z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p>
                  {t("Save TikTok without watermark in mp4 or mp3 online.")}{" "}
                </p>
              </div>

              {/* Service Card 6 */}
              <div className="service-card">
                <div className="icon">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p>
                  {t(
                    "TikTok download works in every browser and operating system."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;