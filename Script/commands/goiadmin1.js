module.exports.config = {
  name: "goiadminn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SaGor",
  description: "Bot will rep ng tag admin or rep ng tagbot bot admin",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61560964919057","61579216094723","61566510730280","100073298735758") {
    var aid = ["61560964919057","61579216094723","61566510730280","100073298735758"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["ম্যাম এখন ব্যস্ত আছে🥰", "ম্যাম এখন ঘুমিয়ে আছে তাকে মেনশন দিয়ে ডিস্টার্ব করবেন না😈","ম্যাম একটু ব্যস্ত আছে🍒","ম্যাম এখন ঘুমিয়ে আছে ডিস্টার্ব করবেন না 😡","আমার ম্যাম এখন বিজি আছে 🥰", "ম্যাম এখন ব্যস্ত আছে 🌺","ম্যাম এখন বিজি আছে","ম্যাম এখন ঘুমিয়ে আছে ডিস্টার্ব করবেন না 😴",,"ম্যাম এখন ঘুমিয়ে আছে😍","আপনি মেনশন দিলে ম্যামের ঘুমের ডিস্টার্ব হয়","ম্যাম এখন ব্যস্ত আছে আসলে কথা বলবে🫶🥰","ধৈর্য ধরো আমার ম্যাম আসলে কথা বলবে🌚🫶"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
