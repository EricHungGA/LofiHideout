require('dotenv').config();;
require('./config/database');

const User = require('./models/user');
const Category = require('./models/category');

(async function() {

    //deleting all before I reseed in my current process of setting up
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'blank', video: 'blank'}
    ])

    console.log(categories)

    process.exit();

})();