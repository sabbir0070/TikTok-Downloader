import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/assets/images/logo.svg";
import { useTranslation } from "react-i18next";


const BlogHeader = () => {
const { t } = useTranslation("common");
  const [showNav, setShowNav] = useState(false);
 const toggleNav = () => {
      setShowNav((prev) => !prev);
    };

    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (link) => {
      setActiveLink(link);
      console.log(link);
    };
  return (
    <div>
      <header className="header" aria-label="Main Header">
    <div className="logo">
          <Link to="/" aria-label="TikTok Video Downloader">
            <img
              src={logo}
              alt="TikTok Video Downloader"
              aria-hidden="true"
              height="40"
              width="150"
            />
          </Link>
        </div>
        <nav
          className={`main-navigation ${showNav ? "is-open" : ""}`}
          aria-label="Main Navigation"
        >
          <ul>
            <li>
              <NavLink
                className={activeLink === "how-to-save" ? "active" : ""}
                onClick={() => handleLinkClick("how-to-save")}
                to="/how-to-save"
              >
                {t("How to save TikTok video?")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeLink === "download-tiktok-mp3" ? "active" : ""}
                onClick={() => handleLinkClick("download-tiktok-mp3")}
                to="/download-tiktok-mp3"
              >
                {t("Download TikTok MP3")}
              </NavLink>
            </li>
            <li>
              <Link to="/blog" className={activeLink === "blog" ? "active" : ""}
                onClick={() => handleLinkClick("blog")}>Blog</Link>
            </li>
          </ul>
        </nav>

       <button
            onClick={toggleNav}
            className="menu-toggle mi-start"
            aria-label="Toggle Navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={!showNav ? "" : "hidden"}
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={!showNav ? "hidden" : ""}
              // x-cloak="true"
              aria-hidden="true"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>

</header>
    </div>
  );
};

export default BlogHeader;