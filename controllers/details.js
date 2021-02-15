import { google } from 'googleapis';
import { parse } from 'iso8601-duration';

export const getDetails = async (req, res) => {
  if (!req) return res.json({ msg: `plz provide link` });
  const playlistID = req.query.list;
  if (!playlistID) return res.json({ msg: `plz provide playlist` });

  // empty obj to be sent to client
  let sendToClient = {};

  //   **************** calculation of duration ********************* //
  const getvideoId = async (pId) => {
    var videoId = [];
    return google
      .youtube('v3')
      .playlistItems.list({
        key: process.env.YT_API_KEY,
        part: 'contentDetails',
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
      .youtube('v3')
      .videos.list({
        key: process.env.YT_API_KEY,
        part: 'contentDetails',
        id: vid,
        maxResults: 100,
      })
      .then((response) => {
        const { data } = response;
        return data.items[0].contentDetails.duration;
      })
      .catch((err) => console.log(err));
  }

  let d, timing;
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
    });

    //calculating total time
    let secR, secTomin, minR, minTohour;
    secR = secT % 60;
    secTomin = Math.floor(secT / 60);
    minT += parseInt(secTomin);
    minR = minT % 60;
    minTohour = Math.floor(minT / 60);
    hoursT += minTohour;

    let r_data;
    r_data = [hoursT, minR, secR, total_videos];
    return r_data;
  };

  let vidId = getvideoId(playlistID);

  await time()
    .then(async (d) => {
      let details;
      details = patternF(d);
      return details;
    })
    .then((data) => (sendToClient.totalDuration = data))
    .catch((err) => console.log(err));
  //   **************** End calculation of duration ********************* //

  res.status(200).json(sendToClient);
};
