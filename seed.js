require('dotenv').config();;
require('./config/database');

const User = require('./models/user');
const Category = require('./models/category');

(async function() {

    //deleting all before I reseed in my current process of setting up
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Rainy Lofi-HipHop', video: 'https://www.youtube.com/watch?v=jiIv_yt72xA&t=255s&ab_channel=FantasticMusic'},
        {name: 'Snowy Lofi-HipHop', video: 'https://www.youtube.com/watch?v=FCJ5feGz-k0&t=423s&ab_channel=demongummies'},
        {name: 'Cafe Jazz & Rain', video: 'https://www.youtube.com/watch?v=NJuSStkIZBg&t=497s&ab_channel=CoffeeShopVibes'},
        {name: 'Space Station', video: 'https://www.youtube.com/watch?v=-Nd3ztNP4zk&ab_channel=NineRoom'},
    ])

    console.log(categories)

    process.exit();

})();