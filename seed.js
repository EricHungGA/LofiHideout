require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Category = require('./models/category');

(async function() {

    //deleting all before I reseed in my current process of setting up
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Lofi-HipHop', videoId: 'jiIv_yt72xA', ambienceType: 'Rain', cardImage: 'https://i.pinimg.com/564x/26/da/d9/26dad9af2d0642387ad470ef836d29a3.jpg', hiddenCardImage: 'https://i.pinimg.com/564x/5f/99/26/5f9926a7992820254c7c0970775b0a3f.jpg', bImage:'https://i.pinimg.com/564x/18/0d/1b/180d1b0c762245f59ea87914d294e935.jpg', bAmbience:'https://i.pinimg.com/originals/b2/6a/ac/b26aac9e27b62fa97df88df0f1d9ab85.gif', bImageOpacity:100, bAmbienceOpacity:25, shadow:'green'},
        {name: 'Lofi-HipHop', videoId: 'FCJ5feGz-k0', ambienceType: 'Snow', cardImage: 'https://i.imgur.com/VY5snVU.jpg', hiddenCardImage: 'https://i.pinimg.com/564x/8d/44/ca/8d44cabd32f1df85f076778a9dafeeeb.jpg', bImage:'https://res.cloudinary.com/di8ugfihk/image/upload/v1681942805/1274942_uc37fc.jpg', bAmbience:'https://i.pinimg.com/originals/00/ee/e7/00eee7ae0d594a600c3444bd64378c88.gif', bImageOpacity:100, bAmbienceOpacity:20, shadow:'blue'},
        {name: 'Cafe & Jazz', videoId: 'NJuSStkIZBg', ambienceType: 'Rain', cardImage:'https://i.pinimg.com/564x/23/2d/55/232d55345f7e6e710ff2a61014fe4ca8.jpg', hiddenCardImage:'https://i.pinimg.com/564x/07/5f/90/075f908a12d1a3eef560e8bd39087fef.jpg', bImage:'https://res.cloudinary.com/di8ugfihk/image/upload/v1681946984/374116_yhigee.jpg', bAmbience:'https://res.cloudinary.com/di8ugfihk/image/upload/v1681947648/ezgif.com-crop_2_oqbiyk.gif', bImageOpacity:100, bAmbienceOpacity:20, shadow:'amber'},
        {name: 'Floating in Space', videoId: 'xKrNDV4yG6Q', ambienceType: 'Space', cardImage: 'https://i.pinimg.com/564x/3a/65/6d/3a656d679cdd9e5ad14ab231ef983abe.jpg', hiddenCardImage: 'https://i.pinimg.com/564x/42/63/4f/42634f11d9c526fbee46543707500311.jpg', bImage:'https://res.cloudinary.com/di8ugfihk/image/upload/v1681943912/grand_piano_musical_instrument_room_182009_4174x2352_ejyqgr.jpg', bAmbience:'https://res.cloudinary.com/di8ugfihk/image/upload/v1681944731/ezgif.com-crop_1_rtrt7l.gif', bImageOpacity:100, bAmbienceOpacity:40, shadow:'violet'},
        {name: 'Ocarina of Time', videoId: 'DKWhGkZ0XZU', ambienceType: 'Zelda', cardImage: 'https://i.pinimg.com/originals/55/21/ee/5521ee53d42830050924e8917427ce07.gif', hiddenCardImage: 'https://i.pinimg.com/564x/e3/1a/27/e31a27981e6e98ff39fe0bbed3cf8dae.jpg', bImage:'https://i.pinimg.com/originals/53/ad/0c/53ad0cc3373bbe0ea51dd878241952c6.gif', bAmbience:'https://i.pinimg.com/originals/2a/34/2e/2a342e3d63fbd58f0b7e6568bd5c2891.gif', bImageOpacity:100, bAmbienceOpacity:40, shadow:'violet'},
    ])

    console.log(categories)

    process.exit();

})();