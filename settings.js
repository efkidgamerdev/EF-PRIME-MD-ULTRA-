const fs = require('fs');
const chalk = require('chalk');

/*
	* Created By FrankKaumbaDev
	* EF-PRIME-MD-ULTRA - Advanced WhatsApp Bot
	* Follow https://github.com/efkidgamerdev
	* Whatsapp : https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07
*/

//~~~~~~~~~~~~< EF-PRIME-MD-ULTRA SETTINGS >~~~~~~~~~~~~\\

global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(',').map(v => v.trim()) : ['265888123456'];

global.packname = process.env.PACKNAME || 'EF-PRIME-MD';
global.author = process.env.AUTHOR || 'FrankKaumbaDev';
global.botname = process.env.BOT_NAME || 'EF-PRIME-MD-ULTRA';
global.listprefix = process.env.PREFIX ? process.env.PREFIX.split(',') : ['.','!','+','#'];
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆'];

global.tempatDB = process.env.MONGODB_URI || 'database.json';
global.tempatStore = process.env.MONGODB_URI || 'baileys_store.json';
global.timezone = process.env.TIME_ZONE || 'Africa/Blantyre';
global.pairing_code = process.env.PAIRING_CODE !== 'false';
global.number_bot = process.env.BOT_NUMBER || '';

global.my = {
	yt: process.env.MY_YOUTUBE || 'https://youtube.com/@efkidgamer',
	gh: process.env.MY_GITHUB || 'https://github.com/efkidgamerdev',
	gc: process.env.MY_GROUP || 'https://whatsapp.com/channel/0029VbBMv2IDeON5eOz38p1M',
	ch: process.env.MY_CHANNEL || '120363423961368163@newsletter',
	web: process.env.MY_WEBSITE || 'frankkaumba.gamer.gd',
	email: process.env.MY_EMAIL || 'efkidgamer@gmail.com'
}

global.limit = {
	free: 100,
	premium: 999,
	vip: 9999
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/prime.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.mess = {
    key: '🔐 Your API key has expired, please visit\nhttps://my.hitori.pw',
    owner: '👑 *EF-PRIME Owner Only Feature!* ',
    admin: '🛡️ *Admin Only Feature!* 🔰',
    botAdmin: '🤖 *Bot needs admin privileges!* ⚙️',
    group: '👥 *Use this command in a group!* 💬',
    private: '🔒 *Use this command in private chat!* 💭',
    limit: '⏰ *Your daily limit has been exhausted!* 📊',
    prem: '💎 *Premium users only feature!* ✨',
    wait: '⏳ *EF-PRIME is processing...* 🚀',
    error: '❌ *An error occurred!* 🔧',
    done: '✅ *Task completed successfully!* 🎉',
    welcome: '🎊 *Welcome to EF-PRIME-MD-ULTRA!* 🌟',
    premium: '👑 *Upgrade to premium for unlimited access!* 💫'
}

global.APIs = {
	hitori: 'https://api.hitori.pw',
}

global.APIKeys = {
	'https://api.hitori.pw': 'htrkey-77eb83c0eeb39d40',
	geminiApikey: ['AIzaSyD0lkGz6ZhKi_MHSSmJcCX3wXoDZhELPaQ','AIzaSyDnBPd_EhBfr73NssnThVQZYiKZVhGZewU','AIzaSyA94OZD-0V4quRbzPb2j75AuzSblPHE75M','AIzaSyB5aTYbUg2VQ0oXr5hdJPN8AyLJcmM84-A','AIzaSyB1xYZ2YImnBdi2Bh-If_8lj6rvSkabqlA']
}

global.badWords = ['fuck','shit','bitch','damn','ass','hell','crap','piss','bastard','whore','slut','idiot','stupid','moron','retard','fag','gay','lesbian','pussy','dick','cock','boobs','tits','sex','porn','nude','naked','asshole','motherfucker','goddamn','bullshit','dumbass','jackass','faggot','nigga','nigger','cunt','dildo','orgasm','anal','blowjob','handjob','masturbate','prostitute','rape','virgin','horny','kinky','sexy','suck','lick','bang','screw','hump'];
global.chatLength = 1000;

// EF-PRIME Features
global.features = {
	autoread: process.env.AUTO_READ === 'false',
	publicMode: process.env.PUBLIC_MODE === 'true',
	antilink: true,
	antispam: true,
	welcome: true,
	goodbye: true
}

// EF-PRIME Branding
global.branding = {
	name: 'EF-PRIME-MD-ULTRA',
	version: '3.0.1',
	author: 'FrankKaumbaDev',
	github: 'https://github.com/efkidgamerdev/EF-PRIME-MD-ULTRA',
	support: 'https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07'
}

//~~~~~~~~~~~~~~~< EF-PRIME PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`🔄 Update ${__filename}`));
	delete require.cache[file];
	require(file);
});
