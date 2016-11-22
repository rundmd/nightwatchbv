define([
  'intern/dojo/node!leadfoot/keys',
  'common/actions',
  'require'
], function(keys, actions, require) {
  return {
    approveContent: function (session, filter) {
      return session
        .findByCssSelector('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > img')
        .then( (element) => {
          return session.moveMouseTo(element);
        })
        .sleep(2000)
        .findByXpath('//*[@id="content"]/div/div[1]/section/div[3]/div[2]/div[1]/div[1]/div/div/button')
        //.findByCssSelector('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > button')
        .then( (element) => {
          return session.moveMouseTo(element).clickMouseButton(0);
        })
        .then( () => {
          //return actions.clickButton(session, '#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > button');
          return actions.clickButton(session, '#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(3) > div > div > div > button:nth-child(1)', 'css');
        })
        .sleep(5000);
    },

    rejectContent: function (session, filter) {
      return session
        //.findByCssSelector('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > img')
        .findByCssSelector('#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div > div > div:nth-child(1) > div > div > img')
        .then( (element) => {
          session.moveMouseTo(element);
          return element.click();
        })
        .sleep(5000)
        .then( () => {
          return actions.clickButton(session, '#content > div > div:nth-child(2) > section > div.panel-body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > button:nth-child(2)', 'css');
        });
    }
  }

});

