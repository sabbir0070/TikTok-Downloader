// {/* <div className="accordion">
//               <button
//                 className={`accordion-toggle ${show ? "is-open" : ""}`}
//                 onClick={toggleShow}
//               >
//                 <h4>How to get the TikTok video download link?</h4>
//                 {/* SVG Icon */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="icon"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
//                     clip-rule="evenodd"
//                   />
//                 </svg>
//               </button>
//               {show && (
//                 <div
//                   className="accordion-content"
//                   data-collapse
//                   data-cloak
//                   data-show={show}
//                 >
//                   <p>
//                     Open your TikTok application Choose the TikTok video that
//                     you want to download Click Share and at the Share options,
//                     find Copy Link button Your download URL is ready on the
//                     clipboard. For example, the link would look like this
//                     https://v.douyin.com/UFLNjnh/ or
//                     https://www.tiktok.com/@philandmore/video/6805867805452324102
//                     or https://m.tiktok.com/v/6805867805452324102.html and
//                     more...
//                   </p>
//                 </div>
//               )}
//             </div>

//            // const handleWithWaterMarkDownloadHD = () => {
  //   // Set the URL of the video file
  //   var fileUrl = data?.data?.hdplay;
  //   console.log(fileUrl);
  //   // Set the desired filename for the downloaded file
  //   var fileName = "TikTok Video.mp4";
  //   showLoaderHandler();

  //   // Fetch the file and initiate download
  //   fetch(fileUrl)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       // Create a temporary link element
  //       var link = document.createElement("a");
  //       link.href = window.URL.createObjectURL(blob);
  //       link.download = fileName;
  //       // Programmatically click the link to initiate the download
  //       link.click();
  //       // Clean up by removing the temporary link
  //       window.URL.revokeObjectURL(link.href);
  //       hideLoaderHandler();
  //     })
  //     .catch((error) => console.error("Error downloading file:", error));
  // };

  // const handleWithOutWaterMarkDownload = () => {
  //   console.log("hdplay");
  //   // Set the URL of the video file
  //   var fileUrl = data?.data?.wmplay;
  //   console.log(fileUrl);
  //   // Set the desired filename for the downloaded file
  //   const fileName = `${data?.data?.title}.mp4`;

  //   {
  //     /* Button to trigger showing the loader */
  //   }
  //   showLoaderHandler();

  //   // Fetch the file and initiate download
  //   fetch(fileUrl)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       // Create a temporary link element
  //       const link = document.createElement("a");
  //       link.href = window.URL.createObjectURL(blob);
  //       link.download = fileName;
  //       // Programmatically click the link to initiate the download
  //       link.click();
  //       // Clean up by removing the temporary link
  //       window.URL.revokeObjectURL(link.href);
  //       hideLoaderHandler();
  //     })
  //     .catch((error) => console.error("Error downloading file:", error));
  // };

  // const handleWithWaterMarkAudioDownload = () => {
  //     console.log("AudioPlay");
  //     // Set the URL of the video file
  //     var fileUrl = data?.data?.music_info.play;
  //     console.log(fileUrl);
  //     // Set the desired filename for the downloaded file
  //     var fileName = "TikTok Video.mp4";
  //     showLoaderHandler();
  //     // Fetch the file and initiate download
  //     fetch(fileUrl)
  //       .then((response) => response.blob())
  //       .then((blob) => {
  //         // Create a temporary link element
  //         var link = document.createElement("a");
  //         link.href = window.URL.createObjectURL(blob);
  //         link.download = fileName;
  //         // Programmatically click the link to initiate the download
  //         link.click();
  //         // Clean up by removing the temporary link
  //         window.URL.revokeObjectURL(link.href);
  //         hideLoaderHandler();
  //       })
  //       .catch((error) => console.error("Error downloading file:", error));
  //   };
