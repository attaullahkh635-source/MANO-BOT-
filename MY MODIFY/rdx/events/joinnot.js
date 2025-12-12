module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "CatalizCS", //fixing ken gusler
    description: "Notify bot or group member with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "joinGif");
    if (existsSync(path)) mkdirSync(path, { recursive: true });        

    const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`{ \( {global.config.PREFIX} } × \){(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("Hello Everyone🙋‍♂️ 𝐁𝐨𝐭 𝐢𝐬 𝐍𝐨𝐰 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝⛓️", event.threadID, () => api.sendMessage({body:`
🌺 ꧁S͟Ã͟R͟D̃͟A͟R͟ R͟D͟X͟꧂🌺     

ׂ╰┈➤»CONNECTED«

...🍫🥀Ɱɣ ❍wɳɛɽ ɪs Ɱɽ 𝐒𝐚𝐫𝐝𝐚𝐫 𝐑𝐝𝐱...🕊️☃️

${global.config.PREFIX}🌺🍃Ƈɑɭɭɑɗ føɽ Ɑɳɣ ɪʂʂuɛ 
<<<<<------------------------------>>>>>
A̸N̸D̸ F̸O̸R̸ A̸N̸Y̸ R̸E̸P̸O̸R̸T̸ O̸R̸ C̸O̸N̸T̸A̸C̸T̸ B̸O̸T̸ D̸E̸V̸A̸L̸O̸P̸A̸R̸....💙🍫

💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞꧁𝐒𝐚𝐫𝐝𝐚𝐫-𝐑𝐝𝐱꧂☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ℝ𝔻𝕏 ℙℝ𝕀ℕℂ𝔼🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞https://www.facebook.com/profile.php?id=100086033644262&mibextid=ZbWKwL\n
👋For Any Kind Of Help Contact On Telegram  Username 👉 @zainijutt7😇 


💎━━━━━🌟━━━━━💎
✨ IMPORTANT NOTE ✨
💎━━━━━🌟━━━━━💎

📌 YA BOT ID MAXIMUM 5 DIN CHLY GI.  
📌 PHR BAND HO JY GI.  
📌 NEW BOT ADD KRWANE K LY BOT KA ADMIN KO ADD KIA JY.  
📌 JB ES ID MA PROBLEM HO TO NEW ID SA BOT RUN KR SKY. 😊  

BOT KA OWNER KI ID KA LINK YA RHA:  
👉 [Click Here](https://www.facebook.com/profile.php?id=100086033644262)  

AGR AP KO APNE GROUP MA ADMIN KA NAME KA BOT CHAHIE TO WHATSAPP PA CONTACT KR SAKTY:  
📞 +923301068874  

💖 THANKS FOR USING RDX BOT 💖  
💎━━━━━🌟━━━━━💎
⟦🕊️⟦──🎀🧸💖🧸🎀──❀💞⟧  
🍒🌟✧𝓢𝒶𝓇𝒹𝒶𝓇✧  
⟧🕊️⟧──🎀🧸💖🧸🎀──❀💞⟧
`, attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);

            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `${threadID}.gif`);

            var mentions = [], nameArray = [], memLength = [], i = 0;

            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);

            (typeof threadData.customJoin == "undefined") ? msg = "Hello  {name},\n\n ❤ » —— ╫ ❲ ❤ ❳ ╫ —— « ❤\n\n You're The {soThanhVien}Member \n\n ❤ » —— ╫ ❲ ❤ ❳ ╫ —— « ❤\n Of {threadName} Group\n\n❤ » —— ╫ ❲ ❤ ❳ ╫ —— « ❤\n\n Please Enjoy Your Stay\n\n❤ » —— ╫ ❲ ❤ ❳ ╫ —— « ❤\n\n And Make Lots Of Friends =) \n\n°° 𝗧𝗿𝘂𝘀𝘁 𝗺𝗲 🔐 °° \n☁️✨❤️ My One & Only Owner ✦͙͙͙͙❥⃝.｡♡\n ʚ SARDAR RDX ɞ \n ♡｡.❤️ Love you endlessly... Muaaah 😘❤️😍" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);

            if (existsSync(path)) mkdirSync(path, { recursive: true });

            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }

            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
}