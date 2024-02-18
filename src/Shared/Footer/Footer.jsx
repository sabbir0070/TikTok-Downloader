import { t } from "i18next";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <nav className="footer-nav" aria-label="Footer Navigation">
          <a>{t("Contact US")}</a>
          <a>{t("Terms of Service")}</a>
          <a>{t("Privacy Policy")}</a>
          <a>{t("FAQ")}</a>
        </nav>
        <noindex>
          <b>
            {t(
              "This product is in no way affiliated with, authorized, maintained, sponsored or endorsed by TikTok or any of its affiliates or subsidiaries."
            )}
          </b>
        </noindex>
        <p> {t("Copyright © :year")} </p>
      </footer>
    </div>
  );
};

export default Footer;
