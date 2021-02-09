require("dotenv").config();
const { google } = require("googleapis");
console.log("PLAYLIST ID ---- PLRfY4Rc-GWzhdCvSPR7aTV0PJjjiSAGMs \n");
const getvideoId = async () => {
  var videoId = [];
  return google
    .youtube("v3")
    .playlistItems.list({
      key: process.env.YT_API_KEY,
      part: "contentDetails",
      playlistId: "PLRfY4Rc-GWzhdCvSPR7aTV0PJjjiSAGMs",
      maxResults: 50,
    })
    .then((response) => {
      const { data } = response;
      data.items.forEach((item) => videoId.push(item.contentDetails.videoId));
      return videoId;
    })
    .catch((err) => console.log(err));
};
const EachId = async () => {
  const vidId = await getvideoId();
  console.log("TOTAL VIDEOS IN THE PLAYLIST ----", vidId.length, "\n");
  var duration = [];
  vidId.forEach(async (vid) => {
    const d1 = google
      .youtube("v3")
      .videos.list({
        key: process.env.YT_API_KEY,
        part: "contentDetails",
        id: vid,
        maxResults: 50,
      })
      .then((response) => {
        const { data } = response;
        duration.push(data.items[0].contentDetails.duration);
        console.log("VIDEO ID ----", data.items[0].id);
        console.log("DURATION ----", data.items[0].contentDetails.duration);
        console.log("QUALITY ----", data.items[0].contentDetails.definition);
        console.log(
          "HAS CAPTIONS ----",
          data.items[0].contentDetails.caption,
          "\n"
        );
      })
      .catch((err) => console.log(err));
  });
};
const submain = async () => {
  var dList = await EachId();
};
submain();
