import { useState } from "react";
import { useTranslation } from "react-i18next";

const DownloadMp3Faq = () => {
  const { t } = useTranslation("common");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleShow = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <section className="faq-section" aria-label="FAQ Section">
        <div className="container">
          <div className="accordion">
            <button
              className={`accordion-toggle ${
                activeAccordion === 0 ? "is-open" : ""
              }`}
              onClick={() => toggleShow(0)}
            >
              <h3>{t("How to Download TikTok sounds and videos for free?")}</h3>
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
              {/* ... */}
            </button>
            {activeAccordion === 0 && (
              <div className="accordion-content">
                {/* ... */}

                {t(
                  "For users who want to download TikTok sounds in mp3 from videos, and remove the watermark, we have developed the simplest and most convenient solution. To download a download TikTok songs without the watermark, just paste the link into the input field and click the Download button."
                )}
              </div>
            )}
          </div>
          <div className="accordion">
            <button
              className={`accordion-toggle ${
                activeAccordion === 1 ? "is-open" : ""
              }`}
              onClick={() => toggleShow(1)}
            >
              <h3>{t("How to download TikTok MP3 using our website?")}</h3>
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
              {/* ... */}
            </button>
            {activeAccordion === 1 && (
              <div className="accordion-content">
                {/* ... */}
                {t(
                  "If you want to convert TikTok to mp3 for free with the help of our TikTok song downloader website, you just need to paste the link into the input field on our TikTok MP3 downloader and select the file format."
                )}
              </div>
            )}
          </div>
          <div className="accordion">
            <button
              className={`accordion-toggle ${
                activeAccordion === 2 ? "is-open" : ""
              }`}
              onClick={() => toggleShow(2)}
            >
              <h3>
                {t("How to save TikTok MP3 songs without an application?")}
              </h3>
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
              {/* ... */}
            </button>
            {activeAccordion === 2 && (
              <div className="accordion-content">
                {/* ... */}
                {t(
                  "To save a TikTok song in MP3 format for free using our TikTok audio downloader, just paste the link in the input field and click the Download button."
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadMp3Faq;
