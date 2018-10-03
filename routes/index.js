var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
// var options = {
//   server: {
//     socketOptions: {
//       connectTimeoutMS: 5000
//     }
//   }
// };

//**************************** connecté le serveure avec la Base de donné ****************************
// mongoose.connect('mongodb://mnp:azerty22@ds225308.mlab.com:25308/masternodepooldatabase',
//   options,
//   function(err) {
//     console.log(err);
//   }
// );


//**************************** envoyer les donner saisie dans le formulair vers la BD ****************************
// var AdSchema = mongoose.Schema({
//   niveauEtude: String,
//   contract: boolean,
//   secteur: String,
//   salair:number,
// });
// var AdModel = mongoose.model('formulaire', AdSchema);


//**************************** Scraping le site Monster pour récupérer les salair & post avec cheerio ****************************
// var scrapData = [];
//   request("https://www.monster.fr/", function(error, response, body) {
//     var $ = cheerio.load(body);
//       // console.log(body);
//     $('tr').each(function(){
//       var salair = {};
//       $(this).find('td').each(function(i){
//       if(i == 2){
//       post.name = $(this).text();
//       }
//       if(i == 3){
//       post.price = $(this).text();
//       }
//       })
//       scrapData.push(salair);
//     })
//     req.session.scrapData = scrapData;
//     if (scrapData.length == req.session.scrapData.length) {
//         for (var i = 0; i < req.session.dataAd.length; i++) {
//           for (var j = 0; j < req.session.scrapData.length; j++) {
//           if (req.session.dataAd[i].salair == req.session.scrapData[j].name) {
//             req.session.dataAd[i].post = req.session.scrapData[j].price;
//             console.log(i);
//             }
//           }
//           if (req.session.dataAd.length == i+1) {
//           console.log(req.session.dataAd);
//         res.render('index', {dataAd: req.session.dataAd, IsLog: req.session.IsLog, user: req.session.user});
//       }
//       }
//     }
// });
    //**************************** GET Signup page ****************************
    router.get('/signUp', function(req, res, next) {
      res.render('signUp');
    });

//**************************** Get user form database ****************************

router.post('/signUp', function(req, res, next) {
if (req.body.password == req.body.confirm) {


UserModel.find(
 {email: req.body.email},
 function(err, users) {
   if (users.length == 0) {

     var newUser = new UserModel({
       name: req.body.username,
       email: req.body.email,
       password: req.body.password
     });
     newUser.save(
       function(error, user) {
         req.session.user = user;

         req.session.IsLog = true;

             res.render('index', {dataAd: req.session.dataAd, IsLog: req.session.IsLog, user : req.session.user });

                     }
                   )
                     } else {
                   req.session.IsLog = false;
                   res.render('signUp',{});
                 }
               }
             )
           } else {
             req.session.IsLog = false;
             res.render('signUp',{});

           }
           }
           );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
