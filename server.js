    const express = require('express');
    const app = express();
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('883538341f71457ba6c73d9c90831f77');
    const path = require('path');
    // var jsdom = require('jsdom');
    // const { JSDOM } = jsdom;
    // const { document } = (new JSDOM('')).window;
    // global.document = document;
    // var $ = require('jquery');
    
    
    // const db = require('./db');
    const port = process.env.PORT || 5000 ;

    var bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.text());
    app.use('/',express.static(path.join(__dirname,'frontend')));

    app.listen(port, () => {
        console.log(`Listening at ${port}`);
        get_data();
    });
    var breaking_news = [];
    var sports_news = [];
    var business_news = [];
    var ent_news = [];
    var health_news = [];
    var science_news = [];
    var tech_news = [];
    function get_data()
    {
        newsapi.v2.topHeadlines({
            language: 'en',
            country: 'in'
          }).then(response => {
            breaking_news = response['articles'];
          });
          newsapi.v2.topHeadlines({
            category: 'business',
            language: 'en',
            country:'in'
          }).then(response => {
            business_news =response['articles'];
          });   
          newsapi.v2.topHeadlines({
            category: 'science',
            language: 'en',
            country:'in'
          }).then(response => {
            science_news =response['articles'];
          });   
          newsapi.v2.topHeadlines({
            category: 'entertainment',
            language: 'en',
            country:'in'
          }).then(response => {
            ent_news =response['articles'];
          });    
            newsapi.v2.topHeadlines({
              category: 'sports',
              language: 'en',
              country:'in'
            }).then(response => {
              sports_news = response['articles']
            });      
          newsapi.v2.topHeadlines({
            category: 'health',
            language: 'en',
            country:'in'
          }).then(response => {
            health_news = response['articles'];
          });
          newsapi.v2.topHeadlines({
            category: 'technology',
            language: 'en',
            country:'in'
          }).then(response => {
            tech_news = response['articles'];
          });
      
    }
    // get_data();
    setInterval(()=>{
      get_data()
    },1270588);
  

// newsapi.v2.topHeadlines({
//   language: 'en',
//   country: 'in'
// }).then(response => {
//   console.log(response['articles']);
// });
// newsapi.v2.everything({
//     q: 'business',
//     language: 'en'
//   }).then(response => {
//     console.log(response);
//   });

    app.get('/breaking',(req,res)=>
    {
    res.send(breaking_news);
    })
    app.get('/business',(req,res)=>
    {
    res.send(business_news);
    })
    app.get('/sports',(req,res)=>
    {
    res.send(sports_news);
    })
    app.get('/entertainment',(req,res)=>
    {
    res.send(ent_news);
    })
    app.get('/health',(req,res)=>
    {
    res.send(health_news);
    })
    app.get('/science',(req,res)=>
    {
    res.send(science_news);
    })
    app.get('/tech',(req,res)=>
    {
    res.send(tech_news);
    })