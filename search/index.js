require("dotenv").config();
const { google } = require("googleapis");
const YT_API_KEY = "AIzaSyDSCRke_pC6I4w402Ny8tvokTdc8vONTuc";
//console.log("PLAYLIST ID ---- PLRfY4Rc-GWzhdCvSPR7aTV0PJjjiSAGMs \n");
//console.log(process.env.YT_API_KEY);
const getvideoId = async (pId) => {
  var videoId = [];
  return google
    .youtube("v3")
    .playlistItems.list({
      key: YT_API_KEY,
      part: "contentDetails",
      playlistId: pId,
      maxResults: 100,
    })
    .then((response) => {
      const { data } = response;
      data.items.forEach((item) => videoId.push(item.contentDetails.videoId));
      return videoId;
    })
    .catch((err) => console.log(err));
};

async function read(vid) {
  return google
    .youtube("v3")
    .videos.list({
      key: YT_API_KEY,
      part: "contentDetails",
      id: vid,
      maxResults: 100,
    })
    .then((response) => {
      const { data } = response;
      //duration.push(data.items[0].contentDetails.duration);
      // console.log("VIDEO ID ----", data.items[0].id);
      // console.log("DURATION ----", data.items[0].contentDetails.duration);
      // console.log("QUALITY ----", data.items[0].contentDetails.definition);
      // console.log(
      //   "HAS CAPTIONS ----",
      //   data.items[0].contentDetails.caption,
      //   "\n"
      // );
      return data.items[0].contentDetails.duration;
    })
    .catch((err) => console.log(err));
}

async function time() {
  d = await vidId
    .then(async (data) => {
      const durations = data.map(async (vid) => {
        const duration = await read(vid);
        return duration;
      });
      timing = await Promise.all(durations);
      return timing;
    })
    .catch((err) => console.log(err));
  return d;
}

const patternF = (d) => {
  var hours_pattern = /(\d+)H/; //regex patterns
  var minutes_pattern = /(\d+)M/;
  var seconds_pattern = /(\d+)S/;
  var [hoursT, minT, secT] = [0, 0, 0];
  var total_videos = d.length;

  console.log(d);
  d.map((dur) => {
    var has_hours = hours_pattern.test(dur);
    var has_minutes = minutes_pattern.test(dur);
    var has_seconds = seconds_pattern.test(dur);

    if (has_hours) {
      var hours = hours_pattern.exec(dur)[1];
      hoursT += parseInt(hours);
    }
    if (has_minutes) {
      var minutes = minutes_pattern.exec(dur)[1];
      minT += parseInt(minutes);
    }
    if (has_seconds) {
      var seconds = seconds_pattern.exec(dur)[1];
      secT += parseInt(seconds);
    }

    // console.log("total time", hoursT, minT, secT);
  });
  //calculating total time
  // console.log("hours min sec after map", hoursT, minT, secT);
  secR = secT % 60;
  secTomin = Math.floor(secT / 60);
  minT += parseInt(secTomin);
  minR = minT % 60;
  minTohour = Math.floor(minT / 60);
  hoursT += minTohour;
  // console.log("min after adding sec", minT);
  // console.log("secR secTomin", secR, secTomin);
  // console.log("min work", minR, minTohour);

  console.log("Your Playlist is:", hoursT, " H", minR, " M", secR, " S");

  r_data = [hoursT, minR, secR, total_videos];
  console.log(r_data);
  return r_data;
};

let pId = "PLCN-kVZjfOxYVELKtoK2AzG4PoF47SBm5";
let vidId = getvideoId(pId);

time()
  .then((d) => {
    console.log(d);
    details = patternF(d);
    console.log("details are", details);
  })
  .catch((err) => console.log(err));
