const fs = require("fs");
module.exports.config = {
	name: "PrinceBot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SaGor", 
	description: "no prefix",
	commandCategory: "Prince",
	usages: "HiBot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Prince ke")==0 || (event.body.indexOf("Tomar boss ke")==0)) {
		var msg = {
				body: "আমার বসের পরিচয়🥰⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n🥰নামঃ Md Morshed🥰\n 😍সবাই ডাকে প্রিন্স😍\n😘প্রতিষ্ঠাতাঃ☞\n🥰আত-তাক্বওয়া ফাউন্ডেশন😍\n😘বর্তমান ঠিকানাঃ🥰\n😍😍বরিশাল😘😘⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n🥰ইসলামিক জীবনঃ😘\n😍ইসলামকে ভালোবাসে😘\n🥰এবং অসহায় মানুষদের পাশে দাঁড়ানোর জন্যই🖤\n❤️সে নিজে একটি🖤\n🩵আত- তাক্বওয়া ফাউন্ডেশন💛\n💙চালু করেছেন💛\n🤍জানো অসহায় মানুষের পাশে দাঁড়ানো যায়💜\n🤎আপনিও চাইলে❤️‍🔥\n💛আত-তাক্বওয়া ফাউন্ডেশন জয়েন হয়ে ইসলাম প্রচার করতে পারেন🥰⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆🥰🤗🌚❤️❤️‍🩹ব্যক্তিগত জীবনঃ🧡\n🤍তুমি খুব সাধারন একজন মানুষ🖤\n💛সবাইকে আগলে রাখার চেষ্টা করে💙\n💓মানুষের সাথে কম কথা বললেও কারো ক্ষতি করে না❤️\n❣️এটাকে অনেকে মনে করে তার Attitude এটা আসলে ভুল ধারণা\n সে বিশ্বাস করে হিংসা মানুষকে ধ্বংস করে\n যে একবার আমার বসকে বুঝবে,সারাজীবন আমার বস কে খুঁজবে🥰⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
			} 
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
      
      
