require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Category = require('./models/category');

(async function() {

    //deleting all before I reseed in my current process of setting up
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Rainy Lofi-HipHop', videoId: 'jiIv_yt72xA'},
        {name: 'Snowy Lofi-HipHop', videoId: 'FCJ5feGz-k0'},
        {name: 'Cafe Jazz & Rain', videoId: 'NJuSStkIZBg'},
        {name: 'Floating in Space', videoId: 'xKrNDV4yG6Q'},
    ])

    console.log(categories)

    process.exit();

})();