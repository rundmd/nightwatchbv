module.exports = {
  'Console Login': function (client) {
    var login = client.page.loginPage();
    //client
    //  .url('https://regression.feedmagnet.com/beta_tab/');
    login
      .navigate()
      .signin();
    client.end();
  }
};

