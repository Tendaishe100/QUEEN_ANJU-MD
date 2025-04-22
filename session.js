const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "rJRSaoA#p_nvlK-Mr5zTZAcDC4X9mKYUC-6W1Au7ABXrrALDjRc",
};
