
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
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
                <h3>{t("How to Download video Tiktok no watermark?")}</h3>
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
                    "Open Tik Tok app on your phone/or Web on your browser. Choose whatever video you want to download. Click to the Share button at the right bottom. Click the Copy Link button. Download by using your browsers: I want to keep things simple for you. No need to download or install any software. I make an application for this purpose as well but you can only install whenever you like. Go back to ccctik and paste your download link to the field above then click to the Download button. Wait for our server to do its job and then, save the video to your device."
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
                <h3>{t("How to get the TikTok video download link?")}</h3>
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
                    "Open your TikTok application Choose the TikTok video that you want to download Click Share and at the Share options, find Copy Link button Your download URL is ready on the clipboard. For example, the link would look like this https://v.douyin.com/UFLNjnh/ or https://www.tiktok.com/@philandmore/video/6805867805452324102 or https://m.tiktok.com/v/6805867805452324102.html and more..."
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
                  {t("Where are TikTok videos saved after being downloaded?")}
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
                    "When you're downloading files, they are usually saved into whatever folder you have set as your default. Your browser normally sets this folder for you. In browser settings, you can change and choose manually the destination folder for your downloaded TikTok videos."
                  )}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 3 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(3)}
              >
                <h3>
                  {t(
                    "Does ccctik store downloaded videos or keep a copy of videos?"
                  )}
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
              {activeAccordion === 3 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t(
                    "ccctik doesn't store videos, neither do i keep copies of downloaded videos. All videos are hosted on TikTok's servers. Also, i don't keep track of the download histories of our users, thus making using ccctik totally anonymous."
                  )}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 4 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(4)}
              >
                <h3>{t("Do I need to install instructions or extensions?")}</h3>
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
              {activeAccordion === 4 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t(
                    "No. I try to keep things easy for our users. All you need is your TikTok download video links. That's it."
                  )}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 5 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(5)}
              >
                <h3>
                  {t(
                    "Do I have to pay to Tiktok Downloader without watermark (ccctik)?"
                  )}
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
              {activeAccordion === 5 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t(
                    "No, you don't have to pay for anything because our software is always free. You can support us by turning off your Ad Blocks or making donations. It supports our further development."
                  )}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 6 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(6)}
              >
                <h3>
                  {t(
                    "Can I use this Tiktok video downloader on my Android phone?"
                  )}
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
              {activeAccordion === 6 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t(
                    "Yes, it’s better to use ccctik to save no-watermark TikTok videos on your Android phone. ccctik is super FAST, 100% FREE, and getting updated frequently."
                  )}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 7 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(7)}
              >
                <h3>
                  {t(
                    "How do I save tiktok video /download my favorite Tik Tok mp4 videos to my iPhone (IOS)?"
                  )}
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
              {activeAccordion === 7 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t(
                    "Because of Apple's privacy policy, from IOS 12 and IPAD OS 12 and below you cannot download any videos, music or movies to your iPhone. You should update to the latest iOS to be able to use Safari to download Tiktok videos From ccctik. If you still can't download please follow the tutorial How to download tiktok videos without watermark on iPhone"
                  )}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 8 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(8)}
              >
                <h3>
                  {t("Is there a limit to download Tiktok videos at ccctik?")}
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
              {activeAccordion === 8 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t(
                    "No, you can download many of your favorite TikTok videos at ccctik with no download limit."
                  )}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 9 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(9)}
              >
                <h3>
                  {t(
                    "Does ccctik support downloading multiple videos / Download all videos from a certain tiktok / Htags channel?"
                  )}
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
              {activeAccordion === 9 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t("No, ccctik does not support this feature yet.")}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 10 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(10)}
              >
                <h3>
                  {t("Can I download high resolution TikTok videos at ccctik?")}
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
              {activeAccordion === 10 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t("Can I edit TikTok videos downloaded at ccctik?")}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 11 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(11)}
              >
                <h3>
                  {t(
                    "No, ccctik is just a TikTok video downloader, not supporting video editing. Use specialized video editing software on your phone or PC"
                  )}
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
              {activeAccordion === 11 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t(
                    "When you're downloading files, they are usually saved into whatever folder you have set as your default. Your browser normally sets this folder for you. In browser settings, you can change and choose manually the destination folder for your downloaded TikTok videos."
                  )}
                </div>
              )}
            </div>
            <div className="accordion">
              <button
                className={`accordion-toggle ${
                  activeAccordion === 12 ? "is-open" : ""
                }`}
                onClick={() => toggleShow(12)}
              >
                <h3>
                  {t("Does ccctik provide tiktok mp3 download solution?")}
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
              {activeAccordion === 12 && (
                <div className="accordion-content">
                  {/* ... */}
                  {t(
                    "ccctik respects the intellectual property rights of the tracks so ccctik will not provide this solution. However, there are currently quite a few application websites that provide this Tiktok Mp3 service such as Tikmate, SaveTik.Net, SSStiktok, etc. You can download TikTok mp3 music but are not allowed to use it for commercial activities, monetize it."
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
    </div>
  );
};

export default Faq;