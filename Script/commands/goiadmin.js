module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JOY",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61575791445818","100088836995808","100029990749091","61579261550244") {
    var aid = ["61575791445818","100088836995808","100029990749091","61579261550244"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার বস এখন ব্যস্ত আছে🥰", "প্রিন্স স্যার এখন ঘুমিয়ে আছে তাকে মেনশন দিয়ে ডিস্টার্ব করবেন না😈","বস একটু ব্যস্ত আছে🍒","বস এখন ঘুমিয়ে আছে ডিস্টার্ব করবেন না 😡","আমার বস এখন বিজি আছে 🥰", "প্রিন্স স্যার এখন ব্যস্ত আছে 🌺","বস এখন বিজি আছে","বস এখন ঘুমিয়ে আছে ডিস্টার্ব করবেন না 😴",,"বস এখন ঘুমিয়ে আছে😍","আপনি মেনশন দিলে বসের ঘুমের ডিস্টার্ব হয়","দিন শেষে সবাই আমার বসকেই খুঁজে 🫶🥰","  ধন্যবাদ আমার বসকে মেনশন করার জন্য আমার বস লাইনে আসলে আপনার সাথে কথা বলবে🌚🫶"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
