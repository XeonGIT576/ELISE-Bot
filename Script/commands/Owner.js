const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "Rudues",
  aliases: ["Shadow", "Formless"],
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  const info = `
👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢

👤 𝗡𝗮𝗺𝗲: Rudues Gray
🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲: Shadow
🎂 𝗔𝗴𝗲: 20+
💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻: 𝗦𝗶𝗻𝗴𝗹𝗲
🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻: Who Knows 
📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻: Don't Know
🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: Doesn't Have Any 

🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦

📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
fb.com/61591445297058

💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿:
m.me/61591445297058

📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:
wa.me/Won't Give It To You
`;

  const images = [
    "https://i.imgur.com/hPtliXo.jpeg",
    "https://i.imgur.com/cwd64Av.jpeg",
    "https://i.imgur.com/L7txp4M.jpeg",
    "https://i.imgur.com/5dG8PS5.jpeg"
  ];

  const randomImg =
    images[Math.floor(Math.random() * images.length)];

  const filePath = __dirname + "/cache/owner.jpg";

  const callback = () => {
    api.sendMessage(
      {
        body: info,
        attachment: fs.createReadStream(filePath)
      },
      event.threadID,
      () => {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    );
  };

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(filePath))
    .on("close", callback);
};
