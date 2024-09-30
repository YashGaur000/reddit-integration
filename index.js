// require('dotenv').config();
// const snoowrap = require('snoowrap');

// // Authentication Setup
// const r = new snoowrap({
//   userAgent: 'A random string.',
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   refreshToken: process.env.REFRESH_TOKEN,
// });

// console.log(r);
// // Get Personal Info
// r.getMe().then((data) => {
//   console.log(JSON.stringify(data, null, 2));
// });

// require('dotenv').config();
// const snoowrap = require('snoowrap');

// // Authentication Setup
// const r = new snoowrap({
//   userAgent: 'my-app (by /u/yashgaur)', 
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   refreshToken: process.env.REFRESH_TOKEN,
// });

// console.log('Snoowrap instance initialized:', r);

// (async () => {
//   try {
//     // Get Personal Info
//     const me = await r.getMe();
//     console.log('Authenticated user data:', JSON.stringify(me, null, 2));
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//   }
// })();


// // Getting Overview of an User
// r.getUser('ChoicePurpose').getOverview().then(console.log);

// // Get Other User Details
// r.getUser('crownthedaisha')
//   .fetch()
//   .then((user) => {
//     let newUser = {};
//     newUser.name = user.name;
//     newUser.karma = user.total_karma;
//     newUser.icon = user.icon_img;
//     newUser.description = user.subreddit.display_name.public_description;
//     console.log(newUser);
//   });

// // Getting Subreddits I am Subscribed to
// r.getSubscriptions().then((details) => {
//   details.forEach((detail) => {
//     console.log(detail.display_name);
//   });
// });

// // returns description, name, banner image url, header title, public description, advertiser_category,subsribers and a lot
// r.getSubreddit('uptoTech').fetch().then(console.log);

// // Getting Posts
// // Types of Posts that can be fetched -> hot, new, top, controversial, rising, spam(removed Items), and more
// r.getSubreddit('uptoTech')
//   .getHot()
//   .then((posts) => {
//     posts.forEach((post) => {
//       let postObj = {};
//       postObj.subreddit = post.subreddit.display_name;
//       postObj.author = post.author.name;
//       postObj.title = post.title;
//       postObj.upvote = post.ups;
//       postObj.awards = post.total_awards_received;
//       postObj.link = post.url;
//       postObj.id = post.id;
//       postObj.createdUtc = post.created_utc;
//       // console.log(postObj);
//     });
//   }); // Public Subreddit

// // Getting Comments of a Submission
// r.getSubmission('m8dw99')
//   .expandReplies({ limit: Infinity, depth: Infinity })
//   .then((data) => {
//     console.log(data.title, data.selftext, data.comments);
//   });

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import 'dotenv/config';
// import snoowrap from 'snoowrap';

// // Authentication Setup
// const r = new snoowrap({
//   userAgent: 'my-app (by /u/yashgaur)',
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   refreshToken: process.env.REFRESH_TOKEN,
// });

// console.log('Snoowrap instance initialized:', r);

// (async () => {
//   try {
//     // Get Personal Info
//     const me = await r.getMe();
//     console.log('Authenticated user data:', JSON.stringify(me, null, 2));

// //     // Getting Overview of a User
//     const overview = await r.getUser('ChoicePurpose').getOverview();
//     console.log('User Overview:', overview);

//     // Get Other User Details
//     const user = await r.getUser('crownthedaisha').fetch();
//     const newUser = {
//       name: user.name,
//       karma: user.total_karma,
//       icon: user.icon_img,
//       description: user.subreddit.display_name.public_description,
//     };
//     console.log('User Details:', newUser);

//     // Getting Subreddits I am Subscribed to
//     const subscriptions = await r.getSubscriptions();
//     subscriptions.forEach((detail) => {
//       console.log('Subscribed to:', detail.display_name);
//     });

//     // Fetching Subreddit Details
//     const subredditDetails = await r.getSubreddit('uptoTech').fetch();
//     console.log('Subreddit Details:', subredditDetails);

//     // Getting Hot Posts from a Subreddit
//     const hotPosts = await r.getSubreddit('uptoTech').getHot();
//     hotPosts.forEach((post) => {
//       const postObj = {
//         subreddit: post.subreddit.display_name,
//         author: post.author.name,
//         title: post.title,
//         upvote: post.ups,
//         awards: post.total_awards_received,
//         link: post.url,
//         id: post.id,
//         createdUtc: post.created_utc,
//       };
//       console.log('Post Details:', postObj);
//     });

//     // Getting Comments of a Submission
//     const submission = await r.getSubmission('m8dw99').expandReplies({ limit: Infinity, depth: Infinity });
//     console.log('Submission Details:', submission.title, submission.selftext, submission.comments);

//   } catch (error) {
//     console.error('Error:', error);
//   }
// })();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// require('dotenv').config()
// const express = require('express');
// const rp = require('request-promise');
// const fs = require('fs');

// import 'dotenv/config';
// import express from 'express';
// import rp from 'request-promise';
// import fs from 'fs';

// const app = express();
// const port = 1234;

// app.get('/auth/reddit',(req,res)=>{
//     const authUrl = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=RANDOM&redirect_uri=${process.env.REDIRECT_URI}&duration=permanent&scope=read`;
//     res.redirect(authUrl);
// })

// app.get('/reddit/callback',async(req,res)=>{
//   app.get('/',async({query},res)=>{
//     const {code} = query;

//     const options = {
//         method: 'POST',
//         uri: 'https://www.reddit.com/api/v1/access_token',
//         auth: {
//           user: process.env.CLIENT_ID,
//           pass: process.env.CLIENT_SECRET,
//         },
//         formData: {
//           grant_type: 'authorization_code',
//           code: code,
//           redirect_uri: process.env.REDIRECT_URI,
//         },
//         headers: {
//           'User-Agent': process.env.USER_AGENT,
//         },
//         json: true,
//       };
    
//     try{
//         const response = await rp(options);
//         console.log(response);
//         fs.writeFile('reddit_token.txt',response.access_token,(err)=>{
//             if(err){
//                 console.error('Couldn\'t save token')
//             }else{
//                 console.log('token saved');
//             }
//         });
//         res.send('Logged in!');
//     }catch(error){
//         console.error('Error',error);
//     }

//     return res.sendFile('index.html', { root: '.' });

// });

// app.get('/list',async(req,res)=>{
//     const token = fs.readFileSync('reddit_token.txt','utf8');
//     const options = {
//         method:'GET',
//         uri:'https://oauth.reddit.com/hot',
//         headers:{
//             'Authorization':`Bearer ${token}`,
//             'User-Agent':process.env.USER_AGENT
//         },
//         json:true
//     };
//     try{
//         const response = await rp(options);
//         res.json(response);
//     }catch(error){
//         console.error('Error',error)
//     }
// })

// app.get('/create-post',async(req,res)=>{
//     const token = fs.readFileSync('reddit_token.txt','utf8');
//     const options = {
//         method: 'POST',
//         uri: 'https://oauth.reddit.com/api/submit',
//         headers:{
//             'Authorization': `Bearer ${token}`,
//             'User-Agent': process.env.USER_AGENT
//         },
//         form:{
//             api_type:'json',
//             kind:'self',
//             sr:'developer',
//             title:'CodingWithAdo is the best youtube channel',
//             text:'You should go and check: https://www.youtube.com/@codingwithado'
//         },
//         json: true
//     };
//     try{
//         const response = await rp(options);
//         res.json(response);
//     }catch(error){
//         console.error('Error',error);
//     }
// })


// app.listen(port,()=>{
//   console.log(`App listening at http://localhost:${port}`)});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import express from 'express';
// import snoowrap from 'snoowrap';
// import crypto from 'crypto';
// // const express = require('express');
// // const snoowrap = require('snoowrap');
// // const crypto = require('crypto');
// const app = express();
// const port = 1234;

// // Replace these with your actual Reddit API credentials
// const clientId = '-iELCLOQv2rZ-GzPmTCbww';
// const clientSecret = 'QRbbzIOMn741kpIaDeY6rqW6IIgKIA';
// const redirectUri = 'http://localhost:1234';
// const userAgent = 'asdfghjkl123456789zxcvbnm';

// let r; // We'll initialize this later with the user's credentials

// function generateRandomString(length) {
//   return crypto.randomBytes(Math.ceil(length / 2))
//     .toString('hex')
//     .slice(0, length);
// }

// app.get('/', (req, res) => {
//   res.send('<a href="/login">Login with Reddit</a>');
// });

// app.get('/login', (req, res) => {
//   const authUrl = snoowrap.getAuthUrl({
//     clientId,
//     scope: ['identity', 'read', 'subscribe'],
//     redirectUri,
//     permanent: false,
//     state: generateRandomString(16)
//   });
//   res.redirect(authUrl);
// });

// app.get('/', async (req, res) => {
//   const code = req.query.code;
  
//   try {
//     r = await snoowrap.fromAuthCode({
//       code,
//       userAgent,
//       clientId,
//       clientSecret,
//       redirectUri
//     });
//     res.redirect('/check_subscription');
//   } catch (error) {
//     console.error('Authentication error:', error);
//     res.status(500).send('Authentication failed: ' + error.message);
//   }
// });

// app.get('/check_subscription', async (req, res) => {
//   if (!r) {
//     return res.redirect('/login');
//   }

//   try {
//     const me = await r.getMe();
//     const subredditName = 'midjourney';
//     const subreddit = await r.getSubreddit(subredditName);
    
//     const isModerator = await subreddit.isModerator();
//     if (isModerator) {
//       res.send("You are a moderator of the subreddit!");
//     } else {
//       const subscribed = await subreddit.isSubscribed();
//       if (subscribed) {
//         res.send("You have joined the subreddit!");
//       } else {
//         res.send("You haven't joined the subreddit yet.");
//       }
//     }
//   } catch (error) {
//     console.error('Error checking subscription:', error);
//     res.status(500).send('Error checking subscription: ' + error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });


import express from 'express';
import snoowrap from 'snoowrap';
import crypto from 'crypto';
const app = express();
const port = 1234;

const clientId = '-iELCLOQv2rZ-GzPmTCbww';
const clientSecret = 'QRbbzIOMn741kpIaDeY6rqW6IIgKIA';
const redirectUri = 'http://localhost:1234';
const userAgent = 'asdfghjkl123456789zxcvbnm';

let r;

function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

app.get('/', (req, res) => {
  res.send('<a href="/login">Login with Reddit</a>');
});

app.get('/login', (req, res) => {
  const authUrl = snoowrap.getAuthUrl({
    clientId,
    scope: ['identity', 'read'],
    redirectUri,
    permanent: false,
    state: generateRandomString(16)
  });
  res.redirect(authUrl);
});

app.get('/reddit_callback', async (req, res) => {
  const code = req.query.code;
  
  try {
    r = await snoowrap.fromAuthCode({
      code,
      userAgent,
      clientId,
      clientSecret,
      redirectUri
    });
    res.redirect('/subreddit_info');
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).send('Authentication failed: ' + error.message);
  }
});

app.get('/subreddit_info', async (req, res) => {
  if (!r) {
    return res.redirect('/login');
  }

  try {
    const subredditName = 'midjourney';
    const subreddit = await r.getSubreddit(subredditName);
    
    const isModerator = await subreddit.isModerator();
    let output = `Subreddit: ${subredditName}<br>`;
    output += `Subscribers: ${await subreddit.subscribers}<br>`;
    output += `Active Users: ${await subreddit.accounts_active}<br>`;

    if (isModerator) {
      output += "You are a moderator. Here's some additional info:<br>";
      
      // Get recent posts
      const newPosts = await subreddit.getNew({limit: 10});
      output += "Recent posts:<br>";
      for (let post of newPosts) {
        output += `- ${post.title} by ${post.author.name}<br>`;
      }

      // Get recent comments
      const newComments = await subreddit.getNewComments({limit: 10});
      output += "Recent comments:<br>";
      for (let comment of newComments) {
        output += `- ${comment.body.substring(0, 50)}... by ${comment.author.name}<br>`;
      }

      // Get moderator list
      const moderators = await subreddit.getModerators();
      output += "Moderators:<br>";
      for (let mod of moderators) {
        output += `- ${mod.name}<br>`;
      }
    } else {
      output += "You are not a moderator of this subreddit.<br>";
    }

    res.send(output);
  } catch (error) {
    console.error('Error fetching subreddit info:', error);
    res.status(500).send('Error fetching subreddit info: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});