module.exports.config = {
    name: "mentionReply",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "SaGor",
    description: "নির্দিষ্ট আইডি mention করলে বট আলাদা আলাদা রিপ্লাই দিবে",
    commandCategory: "group",
    usages: "auto mention reply",
    cooldowns: 5,
};

module.exports.run = async function () {
    // এখানে কিছু লাগবে না
};

module.exports.handleEvent = async function ({ api, event }) {
    try {
        // ✅ এখানে UID + Reply Message সেট করুন
        const targetUsers = {
            "61571990502278": "👉 {name}\n😎 সে এখন তার বউ এর সাথে ব্যস্ত আছে 🥰🥀 ",
            "61579865605110": "👉 {name}\n🥰 মেনশন করিও না সে এখন @শুভ্র চৌধুরী সাথে ব্যস্ত🥰💕",
            "": "👉 {name}\n🤧 মেনশন করো না, সে এখন ঘুমাচ্ছে 😴"
        };

        const mentions = Object.keys(event.mentions || {});
        if (mentions.length > 0) {
            for (let uid of mentions) {
                if (targetUsers[uid]) {
                    let name = event.mentions[uid];
                    let replyMsg = targetUsers[uid].replace("{name}", name);

                    return api.sendMessage(replyMsg, event.threadID, event.messageID);
                }
            }
        }
    } catch (err) {
        console.error("mentionReply error:", err);
    }
};
