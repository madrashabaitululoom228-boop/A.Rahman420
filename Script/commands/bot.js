const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
 credits: "JOY",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["তুই বট তোর নানি বট তো চৌদ্দগুষ্টি বট😈😒", "বট বললে এমন অভিশাপ দেব কখনো বিয়ে করতে পারবে না বেবি বল😒", "আল্লাহ গো তোমার বান্দা আমারে বট বলে 🥺😭", " বুঝলাম না এদেরকে পাবনা থেকে ছাড়লো কে 🤔 আমার বস প্রিন্স কত সুন্দর নাম রেখেছে বেবি নাম ধরে বল 😈", "আমি বুঝতে পারছি তোর মাথায় সমস্যা তাই তোর সাথে কথা বলে লাভ নাই কারণ তুই আমার নামই জানোস না আমার নাম বেবি 🫶","  বট বললে তোর নানিরে তুলে নিয়ে আসব বেবি বল🤬😡", "প্রিন্স স্যার দেখেন না আমারে বট বলে😭 আমি মাদ্রাসায় পড়ি বলে গালি দিলাম না বেবি বল সময় আছে 😡", " আরেক বার বট বললে প্রিন্স স্যারের কাছে বিচার দেবো😏 এখনো সময় আছে বেবি বল 🥱","আরেক বার বট বলবে কানের নিচে দিমু 😒 বেবি বলতে কি সমস্যা হয় 😡", " দেখ আমারে বট বলিস না বেবি বল 😛","আরেক বার বট বলবি প্রিন্স স্যার কে বলে তোর সাথে কথা বলা বন্ধ করব","বুঝছি তোমার মাথায় সমস্যা যাও মাথাটা ডাক্তার দেখাও তখন আমার নাম জানতে পারবা আমার নাম বেবি 🥰😒","আমারে না রাগিয়ে যাও পড়তে বসো 🖤🫶","  বট না বলে বেবি বলো আড্ডা দেবো😘"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  if (event.body.indexOf("বট") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
  
