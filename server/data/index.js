import mongoose from "mongoose";

export const users = [
  {
    _id: "21", 
    username:"hotsauce", 
    password:"hotsauce12345", 
    email:"hotsauce@hotmail.com", 
    number: "0001001001", 
    location: 
    {
      type: "Point", 
      coordinates: [-121.33868266601519, 37.59729761382843]}, 
      profile_image:"profile.png", 
      build:"shooter"
  },  
  {
    _id: "1", 
    username:"chefCurry", 
    password:"chefcurds123", 
    email:"chefcurry@yahoo.com", 
    number: "0001001111", 
    location: 
    {
      type: "Polygon", 
      coordinates: [-121.56115581054638, 37.73644193427164]}, 
      profile_image:"profile1.png", 
      build:"center"
  },  
  {
    _id: "2", 
    username:"chefJoe", 
    password:"chefJoe123", 
    email:"chefJoe@yahoo.com", 
    number: "1001001111", 
    location: 
    {
      type: "Point", 
      coordinates: [-121.96885581054638, 37.33687193427164]}, 
      profile_image:"profile2.png", 
      build:"playmaker"
  },  
  {
    _id: "3", 
    username:"bbuckner2", 
    password:"PBVYL2yzBh0", 
    email:"shalbert2@latimes.com", 
    number: "2093737136", 
    location: 
    {
      type: "Polygon", 
      coordinates: [-134.1641616, 113.53198]}, 
      profile_image:"profile3.png", 
      build:"dunker"
  },  
  {
    _id: "4", 
    username:"cchattey3", 
    password:"FpiJjt4ZnqV", 
    email:"mocollopy3@csmonitor.com", 
    number: "5601845169", 
    location: 
    {
      type: "Point", 
      coordinates: [-110.363649, 116.6988851]}, 
      profile_image:"profile4.png", 
      build:"passer"
  },  
  {
    _id: "5":, 
    username:"thandrock4", 
    password:"fXV06tGS", 
    email:"abruggen4@va.gov", 
    number: "8374322724", 
    location: 
    {
      type: "Polygon", 
      coordinates: [-125.6379087, 71.9210047]}, 
      profile_image:"profile5.png", 
      build:"floor general"
  },  
  {
    _id: "6", 
    username:"gcaygill5", 
    password:"MgHM3EmLB", 
    email:"nechelle5@wikimedia.org", 
    number: "4604301008", 
    location: 
    {
      type: "Point", 
      coordinates: [-142.19179958, -87.2145498]}, 
      profile_image:"profile6.png", 
      build:"finisher"
  },  
  {
    _id: "7", 
    username:"jbrunsen6", 
    password:"D3NYUi1RSsK", 
    email:"sarthy6@eventbrite.com", 
    number: "1445831663", 
    location: 
    {
      type: "Polygon", 
      coordinates: [-120.6428123, 11.8598395]}, 
      profile_image:"profile7.png", 
      build:"defender"
  },  
  {
    _id: "8", 
    username:"cdiclaudio7", 
    password:"bRGJamrT5F", 
    email:"eloram7@harvard.edu", 
    number: "9038222189", 
    location: 
    {
      type: "Point", 
      coordinates: [-176.2899071, 38.8615521]}, 
      profile_image:"profile8.png", 
      build:"scorer"
  },  
  {
    _id: "9", 
    username:"tsinott8", 
    password:"X00v5MXq", 
    email:"bnorvell8@utexas.edu", 
    number: "6222724915", 
    location: 
    {
      type: "Point", 
      coordinates: [-117.6356163, 13.3236611]}, 
      profile_image:"profile9.png", 
      build:"bench warmer"
  },  
  {
    _id: "10", 
    username:"jcharlesworth9", 
    password:"IVu3wIoiur", 
    email:"meekan9@dedecms.com", 
    number: "9116138831", 
    location: 
    {
      type: "Polygon", 
      coordinates: [-103.72671, 98.90327]}, 
      profile_image:"profile10.png", 
      build:"center"
  },  
  {
    _id: "11", 
    username:"divanikova", 
    password:"PoFV4LjF", 
    email:"amateja@hatena.ne.jp", 
    number: "9403218603", 
    location: 
    {
      type: "Point", 
      coordinates: [-147.0175879, 115.3238]}, 
      profile_image:"profile11.png", 
      build:"center"
  },  
  {
    _id: "12", 
    username:"dlettyb", 
    password:"gns4Va86", 
    email:"rwareingb@phpbb.com", 
    number: "3867203571", 
    location: 
    {
      type: "Point", 
      coordinates: [-180.9980687, 13.643677]}, 
      profile_image:"profile12.png", 
      build:"playmaker"
  },  
  {
    _id: "13", 
    username:"cbaudtsc", 
    password:"GctPOH9x", 
    email:"ctantrumc@constantcontact.com", 
    number: "4441699074", 
    location: 
    {
      type: "Polygon", 
      coordinates: [-163.6101211, 124.684196]}, 
      profile_image:"profile13.png", 
      build:'dunker'
  },  
  {
    _id: "14", 
    username:"dmane", 
    password:"92vhjYY", 
    email:"gtabramd@nps.gov", 
    number: "4548523614", 
    location: 
    {
      type: "Point", 
      coordinates: [-79.6558242, 20.1323725]}, 
      profile_image:"profile14.png", 
      build:"passer"
  },  
  {
    _id: "15", 
    username:"jojice", 
    password:"yW4Q4XM4", 
    email:"ene@slideshare.net", 
    number: "3122737260", 
    location: 
    {
      type: "Polygon", 
      coordinates: [-110.6630784, 19.4369847]}, 
      profile_image:"profile15.png", 
      build:"floor general"
  },  
  {
    _id: "16", 
    username:"rcottey", 
    password:"ZfaLfZrH", 
    email:"denisf@google.ca", 
    number: "6079102780", 
    location: 
    {
      type: "Point", 
      coordinates: [-122.19179958, 67.2145498]}, 
      profile_image:"profile16.png", 
      build:"finisher"
  },  
  {
    _id: "17", 
    username:"wgodd", 
    password:"Kfe9HeOAtym", 
    email:"chaimg@meetup.com", 
    number: "1339318164", 
    location: 
    {
      type: "Polygon", 
      coordinates: [-174.5697617, 20.4607543395]}, 
      profile_image:"profile17.png", 
      build:"defender"
  },  
  {
    _id: "18", 
    username:"mbeer", 
    password:"0vsat4PDtv", 
    email:"markeyh@apache.org", 
    number: "6707765198", 
    location: 
    {
      type: "Point", 
      coordinates: [-126.6283278, 33.2221303]}, 
      profile_image:"profile18.png", 
      build:"scorer"
  },  
  {
    _id: "19", 
    username:"ollii", 
    password:"CPO6gT0K", 
    email:"sacqi@godaddy.com", 
    number: "5344804856", 
    location: 
    {
      type: "Point", 
      coordinates: [-106.1580937, 16.07818521]}, 
      profile_image:"profile19.png", 
      build:"bench warmer"
  },  
  {
    _id: "20", 
    username:"emum", 
    password:"panRsW", 
    email:"aplantj@time.com", 
    number: "8815689755", 
    location: 
    {
      type: "Polygon", 
      coordinates: [-122.4981661, 81.2133262]}, 
      profile_image:"profile20.png", 
      build:"center"
  },
];

export const posts = [
  {
    post_id: "1",
    author: {username:"hotsauce", _id: "2"},
    text: "This is the body of my post.",
    date: new Date("Dec 1, 2022"),
    location: [-121.33868266601519, 37.59729761382843],
    replies: [
      {
        author: {username:"chefCurry", _id: "1"},
        date: new Date("Dec 2, 2022"),
        reply: "DOOOOOOOOOPE post."
      },
    ],
  },
  {
    post_id: "2",
    author: {username:"emum", _id: "20"},
    text: "This is a test post.",
    date: new Date("Feb 1, 2023"),
    location: [-121.33868266601519, 37.59729761382843],
    replies: [
      {
        author: {username:"chefCurry", _id: "1"},
        date: new Date("Feb 2, 2023"),
        reply: "nice test."
      },
    ],
  },
  {
    post_id: "3",
    author: {username:"emum", _id: "20"},
    text: "Some really long random description",
    date: new Date("Feb 6, 2023"),
    location: [-121.33868266601519, 37.59729761382843],
    replies: [
      {
        author: {username:"bbuckner2", _id: "3"},
        date: new Date("Feb 7, 2023"),
        reply: "random comment"
      },
      {
        author: {username:"thandrock4", _id: "5"},
        date: new Date("Feb 10, 2023"),
        reply: "another random comment"
      },
    ],
  },
  {
    post_id: "4",
    author: {username:"jbrunsen6", _id: "7"},
    text: "Another really long random description. This one is longer than the previous one.",
    date: new Date("Mar 10, 2023"),
    location: [-121.33868266601519, 37.59729761382843],
    replies: [
      {
        author: {username:"wgodd", _id: "17"},
        date: new Date("Mar 20, 2023"),
        reply: "I'm going to play video games"
      },
    ],
  },
  {
    post_id: "5",
    author: {username:"divanikova", _id: "11"},
    text: "Yoooooooooooooooooooooooooooooo",
    date: new Date("Mar 18, 2023"),
    location: [-121.33868266601519, 37.59729761382843],
    replies: [
      {
        author: {username:"dmane", _id: "14"},
        date: new Date("Mar 22, 2023"),
        reply: "Pull up to the court!"
      },
    ],
  },
  {
    post_id: "6",
    author: {username:"emum", _id: "20"},
    text: "Just a short description. Have a good day.",
    date: new Date("Mar 19, 2023"),
    location: [-121.33868266601519, 37.59729761382843],
    replies: [
      {
        author: {username:"rcottey", _id: "16"},
        date: new Date("Mar 23, 2023"),
        reply: "one more random comment"
      },
      {
        author: {username:"tsinott8", _id: "9"},
        date: new Date("Mar 24, 2023"),
        reply: "one more random comment"
      },
    ],
  },
];
