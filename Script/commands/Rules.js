const fs = require("fs");
module.exports.config = {
	name: "RuleBot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SaGor", 
	description: "no prefix",
	commandCategory: "Rules",
	usages: "RuleBot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Rule")==0 || (event.body.indexOf("Rules")==0)) {
		var msg = {
				body: "⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n   ✨আসসালামু়আলাইকুম✨\nসবার সুবিধার জন্যই কিছু নিয়ম\nনিয়মগুলো হলোঃ👇\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n｢১｣ কেউ কারো অনুমতি ছাড়া ইনবক্সে নক করবেন না🫡 এবং কি ফ্রেন্ড রিকোয়েস্ট পাঠানো যাবে না❤️ \n｢২｣ সালাম দিয়ে কথা শুরু করতে হবে\n｢৩｣গ্রুপের প্রোফাইল এবং নাম পরিবর্তন করা যাবে না\n｢৪｣সবার সাথে ভালো ব্যবহার করতে হবে⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆❤️🌸\n আশা করি সবাই বুঝতে পেরেছেন⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n তাই সকলকে নিয়মগুলো মানার জন্য বিশেষভাবে অনুরোধ করা হলো⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n\n\n অনুরোধেঃ👇\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐌𝐑 𝐏𝐑𝐈𝐍𝐂𝐄 ☞𝐁𝐋𝐀𝐂𝐊 𝐋𝐎𝐕𝐄𝐑🖤🥀\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
