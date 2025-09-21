const schedule = require("node-schedule");

module.exports.config = {
    name: "NamazReminder",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SaGor",
    description: "নামাজের সময় হলে সবাইকে মেনশন করে নামাজে যাওয়ার নির্দেশ দিবে",
    commandCategory: "AI",
    usages: "namaz auto reminder",
    cooldowns: 5,
};

// --- নামাজের সময় সেট (বাংলাদেশ সময় ধরে) ---
const prayerTimes = {
    fajr: "05:00",    // ফজর
    dhuhr: "12:45",   // যোহর
    asr: "03:40",     // আসর
    maghrib: "18:10", // মাগরিব
    isha: "19:30"     // এশা
};

// --- প্রতিটি নামাজের জন্য মেসেজ ---
const prayerMessages = {
    fajr: [
        "🕌 সবাইকে ফজরের নামাজের জন্য মসজিদে যাওয়ার আহ্বান করছি 🌸",
        "✨ ঘুম ভেঙে গেছে? তাহলে ফজরের নামাজে চলে যাও ইনশাআল্লাহ 🙏",
    ],
    dhuhr: [
        "🕌 এখন যোহরের নামাজের সময় ⏰ সবাই নামাজের জন্য প্রস্তুত হোন 🌸",
        "☀️ দুপুর হয়ে গেছে, যোহরের নামাজ ভুলে যাবেন না 🙏",
    ],
    asr: [
        "🕌 আসরের নামাজের সময় হয়ে গেছে 🌤️ সবাই মসজিদে যান ✨",
        "🌸 দুনিয়ার কাজ রেখে আসরের নামাজ আদায় করুন 🕋",
    ],
    maghrib: [
        "🕌 মাগরিবের আজান হয়ে গেছে 🌆 সবাই নামাজ পড়তে ভুলবেন না 🙏",
        "✨ সন্ধ্যা নেমে এসেছে, মাগরিবের নামাজ আদায় করুন 🕋",
    ],
    isha: [
        "🕌 ইশার নামাজের সময় হয়ে গেছে 🌙 সবাই নামাজে আসুন ✨",
        "😴 ঘুমানোর আগে ইশার নামাজ আদায় করে নিই ইনশাআল্লাহ 🌸",
    ]
};

// --- Utility: র‌্যান্ডম মেসেজ ---
function getRandomMessage(list) {
    return list[Math.floor(Math.random() * list.length)];
}

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID } = event;

    // --- নামাজ Reminder Scheduler ---
    Object.keys(prayerTimes).forEach(prayer => {
        const [hour, minute] = prayerTimes[prayer].split(":");
        schedule.scheduleJob({ hour: parseInt(hour), minute: parseInt(minute) }, async () => {
            try {
                const threadInfo = await api.getThreadInfo(threadID);
                const mentions = threadInfo.participantIDs.map(id => ({ tag: "@everyone", id }));
                
                api.sendMessage(
                    {
                        body: `📢 ${getRandomMessage(prayerMessages[prayer])}\n\n@everyone`,
                        mentions: mentions
                    },
                    threadID
                );
            } catch (e) {
                console.log("Namaz Reminder Error:", e);
            }
        });
    });
};

module.exports.run = async function () {
    return;
};
