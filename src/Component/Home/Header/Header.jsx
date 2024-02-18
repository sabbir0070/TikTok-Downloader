import loading from "/src/assets/images/loading.gif";
import logo from "/src/assets/images/logo.svg";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import "../Home";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import tiktokVideoDownloader from "../../Api";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  useEffect(() => {
    // Check if language cookie exists
    const languageCookie = getCookie("preferredLanguage");

    // Set the initial language based on the cookie or default to English
    const initialLanguage = languageCookie || "en";

    // Apply the initial language
    i18n.changeLanguage(initialLanguage);

    // Update the state with the initial language
    setSelectedLanguage(initialLanguage);
  }, [i18n]);

 const changeLang = (lang) => {
    // Set the language in the i18next instance
    i18n.changeLanguage(lang);

    // Set the selected language in a cookie that expires in 365 days
    setCookie("preferredLanguage", lang, 365);

    // Update the state
    setSelectedLanguage(lang);

    console.log("Language changed to:", lang);
  };

  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}; expires=${expirationDate.toUTCString()}; path=/`;

    document.cookie = cookieString;
  };

  const getCookie = (name) => {
    const decodedName = encodeURIComponent(name);
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.startsWith(decodedName + "=")) {
        return decodeURIComponent(cookie.substring(decodedName.length + 1));
      }
    }

    return null;
  };

  // HeaderComponent
  const HeaderComponent = () => {
    const [showNav, setShowNav] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleNav = () => {
      setShowNav((prev) => !prev);
    };

    const toggleMenu = () => {
      setShowMenu((prev) => !prev);
    };

    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (link) => {
      setActiveLink(link);
      console.log(link);
    };

    return (
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
        <div>
          <div
            className={`change-locale mi-start ${showMenu ? "is-open" : ""}`}
          >
            <button
              className="change-locale-toggle"
              aria-label="Change locale"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon mi-end"
                aria-hidden="true"
              >
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>

              <span aria-label="Current locale">
                {/* {selectedLanguage} */}
                {t ? `${t("language")}` : "English"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="arrow mi-start"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            {showMenu && (
              <div className=" change-locale-menu inset-i-end" dir="ltr">
                <a onClick={() => changeLang("en")}>English</a>
                <a onClick={() => changeLang("ar")}>Arabic</a>
                <a onClick={() => changeLang("id")}>Bahasa Indonesia</a>
                <a onClick={() => changeLang("de")}>Deutsch</a>
                <a onClick={() => changeLang("es")}>Español</a>
                <a onClick={() => changeLang("tr")}>Türkçe</a>
                <a onClick={() => changeLang("fr")}>Français</a>
                <a onClick={() => changeLang("ru")}>Russian</a>
              </div>
            )}
          </div>

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
        </div>
      </header>
    );
  };

  const [videoUrl, setURL] = useState("");
  // const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  console.log(data, 766);
  console.log(data?.msg);

  const [processing, setProcessing] = useState(false);

  const isValidUrl = (url) => {
    // Simple URL validation using a regular expression
    const tiktokUrlRegex =
      /^(https?:\/\/)?(www\.)?tiktok\.com\/[^\/]+\/video\/[^\/]+$/;
    return tiktokUrlRegex.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidUrl(videoUrl)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Not a Valid TikTok Url",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    try {
      setProcessing(true);
      const response = await tiktokVideoDownloader(videoUrl);
      setData(response);
      console.log(response?.msg, 227);
    } catch (error) {
      setError(error.message);
    }

    setProcessing(false);
  };

  console.log(data?.msg);
  const handlePasteUrl = () => {
    navigator.clipboard
      .readText()
      .then((text) => setURL(text))
      .catch((err) => console.error("Failed to read clipboard:", err));
  };

  const resetVideo = () => {
    window.location.reload();
  };

  const [showLoader, setShowLoader] = useState(false);
  const [progress, setProgress] = useState(0);
  // Function to show the loader
  const showLoaderHandler = () => {
    setShowLoader(true);
  };

  // Function to hide the loader
  const hideLoaderHandler = () => {
    setShowLoader(false);
  };

  // Download Successful Alert
  const handleDownloadSuccessAlert = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Download Successful",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const handleWithWaterMarkDownloadHD = () => {
    // Set the URL of the video file
    const fileUrl = data?.data?.play;
    console.log(fileUrl);
    // Set the desired filename for the downloaded file
    const fileName = `${data?.data?.title}.mp4`;

    showLoaderHandler();
    // Open a new tab
    const downloadTab = window.open("/loading", "_blank");

    // Fetch the file and initiate download
    fetch(fileUrl)
      .then((response) => {
        const total = parseInt(response.headers.get("content-length"), 10);
        let loaded = 0;

        const chunks = [];
        const reader = response.body.getReader();

        // Set progress to 1% when download starts
        setProgress(1);

        const progressBar = document.getElementById("progressBar"); // Assuming you have a progress bar element in your HTML

        function pump() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              // Download completed, create temporary link
              const blob = new Blob(chunks);
              const link = document.createElement("a");
              link.href = window.URL.createObjectURL(blob);
              link.download = fileName;
              // Programmatically click the link to initiate the download in the new tab
              // downloadTab.location.href = link.click();
              link.click();
              // Clean up by removing the temporary link
              window.URL.revokeObjectURL(link.href);
              hideLoaderHandler();

              // Close the new tab
              downloadTab.close();
              // Display toast when download is completed
              handleDownloadSuccessAlert();

              return;
            }

            // Update progress bar
            loaded += value.length;
            const currentProgress = Math.min((loaded / total) * 100, 100);
            setProgress(Math.round(currentProgress));

            // Update the progress bar visually
            progressBar.value = currentProgress;

            // Update the title of the new tab with the loading progress
            downloadTab.document.title = `Downloading... ${Math.round(
              currentProgress
            )}%`;

            // Continue reading
            // Continue reading
            chunks.push(value);
            return pump();
          });
        }

        return pump();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
        hideLoaderHandler();

        // Close the new tab in case of an error
        downloadTab.close();
      });
  };

  const handleWithOutWaterMarkDownload = () => {
    // Set the URL of the video file
    const fileUrl = data?.data?.wmplay;
    // Set the desired filename for the downloaded file
    const fileName = `${data?.data?.title}.mp4`;
    showLoaderHandler();
    // Open a new tab
    const downloadTab = window.open("/loading", "_blank");

    // Fetch the file and initiate download
    fetch(fileUrl)
      .then((response) => {
        const total = parseInt(response.headers.get("content-length"), 10);
        let loaded = 0;

        const chunks = [];
        const reader = response.body.getReader();

        // Set progress to 1% when download starts
        setProgress(1);

        const progressBar = document.getElementById("progressBar"); // Assuming you have a progress bar element in your HTML

        function pump() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              // Download completed, create temporary link
              const blob = new Blob(chunks);
              const link = document.createElement("a");
              link.href = window.URL.createObjectURL(blob);
              link.download = fileName;
              // Programmatically click the link to initiate the download in the new tab
              // downloadTab.location.href = link.click();
              link.click();
              // Clean up by removing the temporary link
              window.URL.revokeObjectURL(link.href);
              hideLoaderHandler();

              // Close the new tab
              downloadTab.close();
              handleDownloadSuccessAlert();
              return;
            }

            // Update progress bar
            loaded += value.length;
            const currentProgress = Math.min((loaded / total) * 100, 100);
            setProgress(Math.round(currentProgress));

            // Update the progress bar visually
            progressBar.value = currentProgress;

            // Update the title of the new tab with the loading progress
            downloadTab.document.title = `Downloading... ${Math.round(
              currentProgress
            )}%`;

            // Continue reading
            // Continue reading
            chunks.push(value);
            return pump();
          });
        }

        return pump();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
        hideLoaderHandler();

        // Close the new tab in case of an error
        downloadTab.close();
      });
  };
  const handleWithWaterMarkAudioDownload = () => {
    // Set the URL of the video file
    const fileUrl = data?.data?.music_info.play;
    // Set the desired filename for the downloaded file
    const fileName = `${data?.data?.title}.mp4`;
    showLoaderHandler();
    // Open a new tab
    const downloadTab = window.open("/loading", "_blank");

    // Fetch the file and initiate download
    fetch(fileUrl)
      .then((response) => {
        const total = parseInt(response.headers.get("content-length"), 10);
        let loaded = 0;

        const chunks = [];
        const reader = response.body.getReader();

        // Set progress to 1% when download starts
        setProgress(1);

        const progressBar = document.getElementById("progressBar"); // Assuming you have a progress bar element in your HTML

        function pump() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              // Download completed, create temporary link
              const blob = new Blob(chunks);
              const link = document.createElement("a");
              link.href = window.URL.createObjectURL(blob);
              link.download = fileName;
              // Programmatically click the link to initiate the download in the new tab
              // downloadTab.location.href = link.click();
              link.click();
              // Clean up by removing the temporary link
              window.URL.revokeObjectURL(link.href);
              hideLoaderHandler();

              // Close the new tab
              downloadTab.close();
              handleDownloadSuccessAlert();
              return;
            }

            // Update progress bar
            loaded += value.length;
            const currentProgress = Math.min((loaded / total) * 100, 100);
            setProgress(Math.round(currentProgress));

            // Update the progress bar visually
            progressBar.value = currentProgress;

            // Update the title of the new tab with the loading progress
            downloadTab.document.title = `Downloading... ${Math.round(
              currentProgress
            )}%`;

            // Continue reading
            // Continue reading
            chunks.push(value);
            return pump();
          });
        }

        return pump();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
        hideLoaderHandler();

        // Close the new tab in case of an error
        downloadTab.close();
      });
  };
console.log(data?.data?.origin_cover);
  return (
    <div>
      <HeaderComponent />

      {showLoader ? (
        <>
          <p id="progressBar" max="100" value={progress}></p>
          {/* <p className="loader">{progress}%</p> */}
          {/* <Loading progress={progress}></Loading> */}
        </>
      ) : null}
      <section className="splash" aria-label="Download TikTok Video Section">
        <div className="container">
          <div className={`splash-form ${data?.msg === "success" && "hide"}`}>
            <h1 className="">
              {/* {content == {} ? "Download TikTok Video" : content.title}{" "} */}
              {t("Download TikTok Video")}
            </h1>

            <div id="result" className="mt-3"></div>
            <form onSubmit={handleSubmit}>
              <div className="splash-search pi">
                <input
                  type="hidden"
                  name="_token"
                  value="xjeigbC4uh8b1NU6M63ELDAwAhak2d42rPw3NA2h"
                />
                <input
                  x-model="url"
                  id="videoUrl"
                  name="videoUrl"
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setURL(e.target.value)}
                  placeholder={t("Just insert a link")}
                  aria-label="Search Tiktok Video"
                  pattern="https?://.+"
                  title="Please provide a valid URL"
                  className="splash-search-input pi-end"
                  required
                />
                <button
                  type="button"
                  onClick={handlePasteUrl}
                  // x-show="canPaste"
                  className="splash-paste-button mi-end"
                  aria-label="Paste"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon mi-end"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span aria-hidden="true">{t("Paste")}</span>
                </button>
                <button type="submit" className="splash-search-button">
                  {!processing ? (
                    <>
                      {" "}
                      <span>{t("Download")}</span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        src={loading}
                        className="downloadLoading"
                        alt="loading"
                      />{" "}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          {/* Add the code for the TikTok video section here */}
          {/* <template x-if="tiktokVideo">  */}
          {data?.msg === "success" && (
            <div className="splash-video-wrapper">
              <div className="splash-video">
                <img
                  src={data?.data?.origin_cover}
                  className="splash-video-bg"
                  id="coverImage"
                  crossOrigin="anonymous"
                  alt="Cover Image"
                />

                <div className="details-section">
                  <img
                    src={data?.data?.author?.avatar}
                    className="avatarimg"
                    id="avatarImage"
                    crossOrigin="anonymous"
                    alt="Avatar"
                  />
                  <div>
                    <h2 id="username">{data?.data?.author?.unique_id}</h2>
                    <p className="captionText" id="caption">
                      {data?.data?.title}
                    </p>
                  </div>
                </div>

                <div className="download-section">
                  <a
                    id="downloadBtn"
                    target="_blank"
                    rel="noreferrer"
                    data-extension="mp4"
                    onClick={handleWithWaterMarkDownloadHD}
                  >
                    {t("Without Watermark [:idx] HD")}
                  </a>

                  <a
                    target="_blank"
                    id="downloadnoBtn"
                    rel="noreferrer"
                    data-extension="mp4"
                    onClick={handleWithOutWaterMarkDownload}
                  >
                    {t("Original Video with Watermark")}
                  </a>
                  <a
                    target="_blank"
                    id="downloadmusicBtn"
                    rel="noreferrer"
                    download="audio"
                    data-extension="mp3"
                    onClick={handleWithWaterMarkAudioDownload}
                  >
                    {t("Download MP3 Audio")}
                  </a>

                  <div id="trending-actions" className="trending-actions">
                    <div className="card-reaction">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-thumbs-up"
                        >
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                      </div>
                      <div id="like">{data?.data?.collect_count}</div>
                    </div>
                    <div className="card-reaction">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <div id="comment">{data?.data?.comment_count}</div>
                    </div>
                    <div className="card-reaction">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-share-2"
                      >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                      <div id="share">{data?.data?.share_count}</div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="reset-video" onClick={resetVideo}>
                {t("Download another video")}
              </button>
            </div>
          )}
          {/* </template>  */}
        </div>
      </section>
    </div>
  );
};

export default Header;
