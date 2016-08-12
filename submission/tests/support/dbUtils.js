define([
  'intern/chai!assert',
  'intern/dojo/node!leadfoot/keys',
  './pages/elements',
  './pages/properties',
  'intern/dojo/node!mongodb',
  'intern/dojo/node!monk',
  'require'    
], function(assert, keys, elements, properties, mongodb, monk, require) {
  return {
    dbConnect: function(ENV) {
      var mongoUrl;

      if (ENV == 'prod') {
        mongoUrl = 'mongodb://' + properties.MONGO_PROD_HOST;
      } else {
        mongoUrl = 'mongodb://' + properties.MONGO_LOCAL_HOST;
      }
      console.log('mongohost: ', mongoUrl);
      return  monk(mongoUrl, function(err) {
        if (err) console.error(err);
     });
    },

    getLocaleText: function(db, locales) {
      if (typeof locales === 'undefined' || locales == null) {
        return db.collection('translations').find({}, { _id: 0 } )
          .then( (docs) => {
            db.close();
            return docs;
          });
      } else {
        locales = locales.split(',');
        console.log('locales: ', locales);
        return db.collection('translations').find({ locale: { $in: locales } }, { _id: 0 } )
          .then( (docs) => {
            db.close();
            return docs;
          });
       }
      
      }

    }
});
