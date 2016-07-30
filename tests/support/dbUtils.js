define([
  'intern/chai!assert',
  'intern/dojo/node!leadfoot/keys',
  './pages/elementsPage',
  './pages/propertiesPage',
  'intern/dojo/node!mongodb',
  'intern/dojo/node!monk',
  'require'    
], function(assert, keys, elements, properties, mongodb, monk, require) {
  return {
    dbConnect: function(ENV) {
      var mongoUrl;

      if (ENV == 'qa') {
        mongoUrl = 'mongodb://' + properties.MONGO_QA_HOST;
      } else {
        mongoUrl = 'mongodb://' + properties.MONGO_LOCAL_HOST;
      } 
        
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
        return db.collection('translations').find({ locale: { $in: locales } }, { _id: 0 } )
          .then( (docs) => {
            db.close();
            return docs;
          });
       }
      
      }

    }
});
