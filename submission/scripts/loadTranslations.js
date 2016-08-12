var jsonfile = require('jsonfile');
var glob = require('glob');
var finder = require('findit')('../curations-submission/server/lib/translation/locales');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var settings = require('./settings');
var argv = require('minimist')(process.argv.slice(2));

var mongoUrl;
var text = 'new text';
var translationsDoc = {};
var testing = 'testing';
var ENV;

if (typeof argv.env !== 'undefined') {
  ENV = argv.env.toLowerCase();
}

if (ENV == 'prod') {
  mongoUrl = settings.mongoHostProd;
} else {
  mongoUrl = settings.mongoHostLocal;
}
  
var insertDocument = function (db, translations, callback) {
   db.collection('translations').insertOne(translations, function(err, result) {
     assert.equal(err, null);
     callback(); 
   });
};

var replaceDocument = function (db, translations, callback) {
   db.collection('translations').replaceOne({ "locale" : translations.locale }, translations, function(err, results) {
     assert.equal(err, null);
     callback();
   });
};


finder.on('directory', function (dir) {
  var locale = dir.match(/[a-z]{2}-[a-z]{2}(?!\S)/);
  if (locale != null) {
    jsonfile.readFile(dir + '/main.json', function (err, translations) {
      translations.translate.locale = locale[0];
      translations.translate.submissionUrl = settings.submissionUrl + '&locale=' + locale[0].replace(/-/, '_');
      var keys = Object.keys(translations.translate);
      keys.forEach( function (key) {
      });
      translations.translate.cta = translations.translate.cta.replace(/%\{[\s\S]+\}/, settings.product);
      translations.translate.agree = translations.translate.agree.replace(/%\{[\s\S]+\}/, translations.translate.terms);

      MongoClient.connect(mongoUrl, function(err, db) {
        assert.equal(null, err);
        if (argv.action == 'replace') {
          replaceDocument(db, translations.translate, function() {
            db.close();
          });
        } else if (argv.action == 'insert') {
          insertDocument(db, translations.translate, function() {
            db.close();
          });
        }
      });

    });
  }
});
