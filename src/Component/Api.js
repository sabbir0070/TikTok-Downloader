import axios from "axios";
// const axios = require('axios')

const tiktokVideoDownloader = async (url) =>{

const options = {
  method: 'GET',
  // url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
  // url: 'tiktok-download5.p.rapidapi.com',
  url: 'https://tiktok-download5.p.rapidapi.com/getVideo',
 
  params: {
    url: url,
    hd: '1'
  },
  headers: {
    

 'X-RapidAPI-Key': '08a9a5bb40msh999bc7661f8a72fp1f7defjsn54b8c1b5055d',
    'X-RapidAPI-Host': 'tiktok-download5.p.rapidapi.com'

  }
};

try {
	const response = await axios.request(options);
const responseData = response.data;
return responseData;
} catch (error) {
	console.error(error);
throw error;
}

};

export default tiktokVideoDownloader;