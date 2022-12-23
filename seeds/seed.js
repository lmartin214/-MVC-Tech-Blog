const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
//Imported
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


//Force creates DB and connects 
const seedDB = async () => {
 await sequelize.sync({ force: true });
 const users = await User.bulkCreate(userData,{ //Used to creat and store
  individualHooks: true,
  returning: true,
 });

 for (const post of postData) {
  await Post.create({ //create a post with a user id from the userData array
    ...post,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  });
 await Comment.bulkCreate(commentData) //Creates and store comments
};
   process.exit(0);
};

seedDB();