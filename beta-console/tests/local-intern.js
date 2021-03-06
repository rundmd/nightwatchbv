// Learn more about configuring this file at <https://theintern.github.io/intern/#configuration>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites
define({
	// Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
	// specified browser environments in the `environments` array below as well. See
	// <https://theintern.github.io/intern/#option-capabilities> for links to the different capabilities options for
	// different services.
	//
	// Note that the `build` capability will be filled in with the current commit ID or build tag from the CI
	// environment automatically
	capabilities: {
		//'browserstack.selenium_version': '2.45.0'
		'browserstack.selenium_version': '2.48.2'
		//'selenium_version': '2.48.2'
	},

	defaultTimeout: 240000,
	// Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
	// OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
	// capabilities options specified for an environment will be copied as-is
	environments: [
		//	{ browserName: 'internet explorer', version: '11', platform: 'WIN8' /* WIN8 and IE11 for browserstack */ }
		//	{ browserName: 'internet explorer', version: '11', platform: 'WIN7' /* WIN7 and IE11 for saucelabs */ } 
		//	{ browserName: 'internet explorer', version: '10', platform: 'WIN8' },
		//	{ browserName: 'internet explorer', version: '9', platform: 'WINDOWS' },
		//	{ browserName: 'firefox', version: '37', platform: ['WINDOWS', 'MAC'] },
	    //		{ browserName: 'firefox', marionette: true, version: '49', os: 'OS X', os_version: 'Yosemite'}, 
		//	{ browserName: 'chrome', version: '39', platform: ['WINDOWS', 'MAC'] },
		  { browserName: 'chrome', version: '51', platform: ['MAC'] }
 		//{ browserName: 'phantomjs' }
		//	{ browserName: 'safari', version: '8', platform: 'MAC' }
		//         { browserName: 'chrome', version: '50', platform: ['MAC'] }
	],
	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 2,

	// Name of the tunnel class to use for WebDriver tests.
	// See <https://theintern.github.io/intern/#option-tunnel> for built-in options
	//tunnel: 'BrowserStackTunnel',
	//tunnel: 'SauceLabsTunnel',
	tunnel: 'NullTunnel',
	//tunnel: 'SeleniumTunnel',
      //tunnelOptions: {
      //  drivers: [ 'chrome' ]
      //},
      //excludeInstrumentation: true,
      //environments: [
      //  { browserName: 'firefox', marionette: true },
        // ...
      //],
    ////tunnelOptions: {
	////username: 'drewdimanlig1',
	////accessKey: '7vhcAVtLQRy7UxRJq5Gm'
	//    username: 'jakehatesgoonies1',
	//accessKey: '5616c670-da91-4921-a41f-3245d8c5e487'
	//    accessKey: 'nFU7hNEkRKaTDzkyJJLy'
	////},

	// Configuration options for the module loader; any AMD configuration options supported by the AMD loader in use
	// can be used here.
	// If you want to use a different loader than the default loader, see
	// <https://theintern.github.io/intern/#option-useLoader> for instruction
	loaderOptions: {
		// Packages that should be registered with the loader in each testing environment
		packages: [ { name: 'myPackage', location: '.' } ]
	},

	// Non-functional test suite(s) to run in each browser
	suites: [ /* 'myPackage/tests/foo', 'myPackage/tests/bar' */ ],

	// Functional test suite(s) to execute against each browser once non-functional tests are completed
	//functionalSuites: [ 'tests/functional/channelFilter', 'tests/functional/langFilter', /*'tests/functional/multipleFilters'*/ ],
	//functionalSuites: [ 'beta-console/tests/functional/rightsFilter', 'beta-console/tests/functional/taggingFilter'],
	//functionalSuites: [ 'beta-console/tests/functional/rightsFilter' ],
	//functionalSuites: [ 'beta-console/tests/functional/taggingFilter' ],
	//functionalSuites: [ 'beta-console/tests/functional/moderationFilter' ],
	//functionalSuites: [ 'beta-console/tests/functional/channelFilter' ],
	//functionalSuites: [ 'beta-console/tests/functional/languageFilter' ],
	//functionalSuites: [ 'beta-console/tests/functional/contentTagsFilter' ],
	//functionalSuites: [ 'beta-console/tests/functional/groupChannelFilter' ],
	functionalSuites: [ 'beta-console/tests/functional/editContent' ],
	//functionalSuites: [ 'beta-console/tests/functional/attachmentsFilter' ],
	//functionalSuites: [ 'submission/tests/functional/uploadPhotoFail' ],
	//functionalSuites: [ 'submission/tests/functional/uploadPhoto' ],
	//functionalSuites: [ 'submission/tests/functional/uploadTranslationTest' ],
	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^(?:tests|node_modules)\//


});
