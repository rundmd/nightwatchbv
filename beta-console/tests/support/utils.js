define([
    'intern/dojo/node!leadfoot/keys',
    './pages/elements',
    './pages/properties',
    'require'    
], function(keys, elements, properties, require) {
    return {
        addFilter: function(session, filter) {
            console.log('going to add filter');
            var text = filter.text.split('');
            return session
                .then(function () {
                    text.forEach( function(entry) {
                        session.pressKeys(entry);
                    });
                    session.pressKeys(keys.RETURN);
                })
        },

        addComboFilter: function(session, filter) {
            var text = filter.text.split('');
            var input;
            return session
                .then(function () {
                    input = session.findByXpath(filter.locator);
                    input.click();
                    if (!filter.locator.match(/display/i)) {
                        text.forEach( function(entry) {
                            input.pressKeys(entry);
                        });
                        input.pressKeys(keys.RETURN);
                    }
                })
                //.sleep(2000);
        },

        elementIsVisible: function(element) {
            return (element.isDisplayed()) ? true : null;;
        },

        elementIsVisible2: function(session) {
            console.log("check visibility");
            return (element.offsetParent !== null) ? element : null;
        }, 

        addCookie: function(session, COOKIE) {
            return session
                .then(function () {
                    COOKIE.forEach( function(entry) {
                        console.log('adding cookie');
                        session.setCookie(entry);
                    });
                });
        },

        removeCookie: function(session, COOKIE) {
            return session
                .then(function () {
                    COOKIE.forEach( function(entry) {
                        console.log('removing cookie');
                        session.deleteCookie(entry.name);
                    });
                });
        },

        openAdvancedSearch: function(session) {
            console.log('trying to open adv search');
            return session
                .get(properties.CONSOLE_URL)
                .setFindTimeout(10000)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end();
                //.setFindTimeout(10000)
                //.findByXpath(elements.MODAL_CLOSE_BTN_LOCATOR)
                //    .click()
                //    .end()
                //.sleep(1000);
            //.then(pollUntil('return document.getElementById("btn-filters");', 10000))
            // TO DO
        },

        instagramLogin: function(session) {
            // Store the current window handle
            var winHandleBefore = session.getCurrentWindowHandle();

            // Perform the click operation that opens new window

            session.findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR).click();

            session.switchToWindow().getCurrentWindowHandle();

            // Switch to new window opened
            // for(String winHandle : driver.getWindowHandles()){
            //    driver.switchTo().window(winHandle);
            //}

            //var windowHandles = session.getAllWindowHandles();
            //console.log('window handles: ' + str);
            //console.log('window handles: ' + windowHandles[1]);
            //windowHandles.forEach( function(winHandle) {
            //    session.switchToWindow(winHandle);
            //});

            return session
                .sleep(2000)
                .findById(elements.INSTA_USERNAME_ID)
                    .type(properties.INSTA_USERNAME)
                    .end()
                .findById(elements.INSTA_PW_ID)
                    .type(properties.INSTA_PW)
                    .end()
                .findByCssSelector(elements.INSTA_LOGIN_BTN)
                    .click()
                    .end();
        },

        fillUploadForm: function(session) {
            console.log('in fillUploadForm');
            return session
                .findByXpath(elements.UPLOAD_PHOTO_COMMENT_LOCATOR)
                    .type('testing')
                    .sleep(1000)
                    .end()
                //.findByXpath('//*[@id="caption"]/div[2]/div[2]/div/div/div/form/div/input')
                .findByXpath(elements.UPLOAD_NICKNAME_LOCATOR)
                    .click()
                    .type('tester')
                    .sleep(1000)
                    .end()
                .findById(elements.UPLOAD_TC_ID)
                    .click()
                    .sleep(1000)
                    .end()
                //.findByXpath('//*[@id="caption"]/div[2]/div[2]/div/div/div/form/button')
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end();
        },
	
     	fillUploadFormTest: function(session, theCheck) {
		console.log('in fillUploadForm');
		var comment;
		var nickname;
	
		if(theCheck=="photo" || theCheck=="insta" || theCheck=="fb")
		{
			comment=elements.UPLOAD_PHOTO_COMMENT_LOCATOR;
			nickname=elements.UPLOAD_NICKNAME_LOCATOR;
		}
		else if(theCheck=="video")
		{
			comment=elements.UPLOAD_VIDEO_COMMENT_LOCATOR;
                        nickname=elements.UPLOAD_VIDEO_NICKNAME_LOCATOR;
		}
		
		//change to what we decide the deafult is, also add more sources
		else
		{
			comment=elements.UPLOAD_VIDEO_COMMENT_LOCATOR;
                        nickname=elements.UPLOAD_VIDEO_NICKNAME_LOCATOR;
		}
		var timestamp=Date.now();
        var time=timestamp.toString();
		return session
			.findByXpath(comment)
                   		 .type(time)
                   		 .sleep(1000)
                   		 .end()
  
               		 .findByXpath(nickname)
                   		 .click()
                   		 .type(time)
                   		 .sleep(1000)
                   		 .end()
               		 .findById(elements.UPLOAD_TC_ID)
                   		 .click()
                   		 .sleep(1000)
                   		 .end()
            
               		 .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                   		 .click()
                   		 .sleep(2000)
                   		 .end();

	  },

        fillUploadFormTest2: function(session, theCheck, theTime) {
            console.log('in fillUploadForm');
            var comment;
            var nickname;

            if(theCheck=="photo" || theCheck=="insta" || theCheck=="fb")
            {
                comment=elements.UPLOAD_PHOTO_COMMENT_LOCATOR;
                nickname=elements.UPLOAD_NICKNAME_LOCATOR;
            }
            else if(theCheck=="video")
            {
                comment=elements.UPLOAD_VIDEO_COMMENT_LOCATOR;
                nickname=elements.UPLOAD_VIDEO_NICKNAME_LOCATOR;
            }

            //change to what we decide the deafult is, also add more sources
            else
            {
                comment=elements.UPLOAD_VIDEO_COMMENT_LOCATOR;
                nickname=elements.UPLOAD_VIDEO_NICKNAME_LOCATOR;
            }
            //var timestamp=Date.now();
            //var time=timestamp.toString();
            return session
                .findByXpath(comment)
                .type(theTime)
                .sleep(1000)
                .end()

                .findByXpath(nickname)
                .click()
                .type(theTime)
                .sleep(1000)
                .end()
                .findById(elements.UPLOAD_TC_ID)
                .click()
                .sleep(1000)
                .end()

                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .click()
                .sleep(2000)
                .end();

        }

    }
});
