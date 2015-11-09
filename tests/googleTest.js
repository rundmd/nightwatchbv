module.exports = {
  'Test': function (client) {
    var google = client.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit')
      .api.pause(2000)
      .assert.title('nightwatch - Google Search');

    client.end();
  }
};

