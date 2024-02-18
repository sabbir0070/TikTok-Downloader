import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorPage from "../Home/ErrorPage/ErrorPage";
import Loading from "../Loading/Loading";
import Home from "../Home/Home";



import DownloadTikTokVideo from "../../Pages/DownloadTikTokVideo/DownloadTikTokVideo";
import DownloadTikTokMp3 from "../../Pages/DownloadTikTokMp3/DownloadTikTokMp3";
import Blog from "../../Pages/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/how-to-save",
        element: <DownloadTikTokVideo></DownloadTikTokVideo>,
      },
      {
        path: "/download-tiktok-mp3",
        element: <DownloadTikTokMp3></DownloadTikTokMp3>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/loading",
        element: <Loading></Loading>,
      },
    ],
  },
]);

export default router;
