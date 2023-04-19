require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Category = require('./models/category');

(async function() {

    //deleting all before I reseed in my current process of setting up
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Lofi-HipHop', videoId: 'jiIv_yt72xA', ambienceType: 'Rain', cardImage: 'https://i.pinimg.com/564x/26/da/d9/26dad9af2d0642387ad470ef836d29a3.jpg', hiddenCardImage: 'https://i.pinimg.com/564x/5f/99/26/5f9926a7992820254c7c0970775b0a3f.jpg'},
        {name: 'Lofi-HipHop', videoId: 'FCJ5feGz-k0', ambienceType: 'Snow', cardImage: 'https://i.pinimg.com/564x/ac/fb/a3/acfba3ad7508eaf3f0b381f68d44abea.jpg', hiddenCardImage: 'https://i.pinimg.com/564x/5d/e3/0d/5de30dc66fb8ee97e5f82828f767073b.jpg'},
        {name: 'Cafe & Jazz', videoId: 'NJuSStkIZBg', ambienceType: 'Rain', cardImage:'https://i.pinimg.com/564x/23/2d/55/232d55345f7e6e710ff2a61014fe4ca8.jpg', hiddenCardImage:'https://i.pinimg.com/564x/07/5f/90/075f908a12d1a3eef560e8bd39087fef.jpg'},
        {name: 'Floating in Space', videoId: 'xKrNDV4yG6Q', ambienceType: 'Space', cardImage: 'https://i.pinimg.com/564x/3a/65/6d/3a656d679cdd9e5ad14ab231ef983abe.jpg', hiddenCardImage: 'https://i.pinimg.com/564x/42/63/4f/42634f11d9c526fbee46543707500311.jpg'},
    ])

    console.log(categories)

    process.exit();

})();