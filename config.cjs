const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkg4QXU1bmpsbTdrN3d2WjBwVmFKSnArTHZmSFB5cnVsYUlldFpmTzltbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN05ZT1NwbSt0N291cG5vdk9GbC9hOXV3SUJ1Yno5Z1lwWkJ0Z1VUbzEycz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTWFUbkxvL3g3VzVSMDl3em8zYlVzYXB4Y3Ewb0NkV25rc1BoRmdZdlUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxdkEyRmZEL3dlK1labnpjVzlGVmlMQk5odTExNmpaY3dicFNUTFZ4c3prPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9KNXNoK0wzdnZjMERwOEVkc3ROTUhUY2pNMExrTjQ1RG5WeHR0OEdRWFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhETG1jbkdkZkduYzA3dDlXK1Yrd0xxRWtVVy9ER2VKOFBXd1d2Qy9FRHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUc5eUtQRy8xWDZpeEtPODZGemdybFIvZHk1OEd5bFdoZjZrbkpxaElFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkkwdERoYjhURDc0aTF3d2p1VzNoVXVjeFN5dVNUSUNoaTJ6R3k1TWtudz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKKzRHaUt5Rm1VQ1NTQjFoSm15Q3NlUENYTU03UUNZU2Z6MWFrN0kxVnNEZUxtQXRxK0Jld3BubUNaYzl0d2VyK2hmMlgzYnVFcEYySGRGaDJVdGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJCZE5odE5rOWpBM2c1T3Z3N2NJU2kybDhDWGk1OGVwTGhTZTRJNHl2T3hrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIyV0FHQTdOWiIsIm1lIjp7ImlkIjoiMjU0NzE1MTgyMTUzOjI4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjE1NzcwMTMyODkwNTM6MjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMnFycWNHRUpycDJNd0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkbWwvRE0vR2sxMkVYTm5PZW5XRWsyazhRUjYvSVpaaWcyYjNtUFFabkhrPSIsImFjY291bnRTaWduYXR1cmUiOiJOVnFLbHUwckhjc1JuNHJOY2ZHQjFyOW5VdnBxQkh5dldMRFhCK055T3ZKL211eWYyN0oyMXpGVlhadTU0aEtSZ3FscXJBYTQ4dmV5ZERveDBFc1BEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZnErRGx2VWJMVDJTQ3I5eCtLSHBTZHJ3bEtDNGNUSDYyM2FVT2xsWFh0RTVnMWlPVTRvR1ZwVkM0OGVEVU5LMFVXMzZTZFNERHBoOWNBL2gyVW1pZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTUxODIxNTM6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFpwZnd6UHhwTmRoRnpaem5wMWhKTnBQRUVldnlHV1lvTm05NWowR1p4NSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzcxNDUxNTYwLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUp1byJ9",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "254715182153",
  "OWNER_NAME": process.env.OWNER_NAME || "Samyaza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "254",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
