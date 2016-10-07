define([
  'intern/chai!assert',
  '../utils', 
  './properties',
  './elements', 
  'common/actions', 
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, props, elems, actions, pollUntil, require) {
  return {   
    facebookFilter: { locator: elems.CHANNEL_FILTER_LOCATOR, text: 'facebook', locatorType: 'id', clearLocator: elems.FACEBOOK_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.FACEBOOK_FILTER_RESULTS },
    googleplusFilter: { locator: elems.CHANNEL_FILTER_LOCATOR, text: 'google', locatorType: 'id', clearLocator: elems.GOOGLEPLUS_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.GOOGLEPLUS_FILTER_RESULTS },
    instagramFilter: { locator: elems.CHANNEL_FILTER_LOCATOR, text: 'instagram', locatorType: 'id', clearLocator: elems.INSTAGRAM_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.INSTAGRAM_FILTER_RESULTS },
    twitterFilter: { locator: elems.CHANNEL_FILTER_LOCATOR, text: 'twitter', locatorType: 'id', clearLocator: elems.TWITTER_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.TWITTER_FILTER_RESULTS },
    youtubeFilter: { locator: elems.CHANNEL_FILTER_LOCATOR, text: 'youtube', locatorType: 'id', clearLocator: elems.YOUTUBE_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.YOUTUBE_FILTER_RESULTS },
    englishFilter: { locator: elems.LANGUAGE_FILTER_LOCATOR, text: 'english', locatorType: 'id', clearLocator: elems.ENGLISH_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.ENGLISH_FILTER_RESULTS },
    germanFilter: { locator: elems.LANGUAGE_FILTER_LOCATOR, text: 'german', locatorType: 'id', clearLocator: elems.GERMAN_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.GERMAN_FILTER_RESULTS },
    spanishFilter: { locator: elems.LANGUAGE_FILTER_LOCATOR, text: 'spanish', locatorType: 'id', clearLocator: elems.SPANISH_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.SPANISH_FILTER_RESULTS },
    tag1Filter: { locator: elems.CONTENT_TAG_FILTER_LOCATOR, text: 'pp5006281289', locatorType: 'id', clearLocator: elems.CONTENT_TAG1_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.CONTENT_TAG1_FILTER_RESULTS },
    tag2Filter: { locator: elems.CONTENT_TAG_FILTER_LOCATOR, text: 'almond milk', locatorType: 'id', clearLocator: elems.CONTENT_TAG2_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.CONTENT_TAG2_FILTER_RESULTS },
    tag3Filter: { locator: elems.CONTENT_TAG_FILTER_LOCATOR, text: 'spm-liketoknow.it', locatorType: 'id', clearLocator: elems.CONTENT_TAG3_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.CONTENT_TAG3_FILTER_RESULTS },
    tag4Filter: { locator: elems.CONTENT_TAG_FILTER_LOCATOR, text: 'pp5006281282', locatorType: 'id', clearLocator: elems.CONTENT_TAG4_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.CONTENT_TAG4_FILTER_RESULTS },
    photoFilter: { locator: elems.ATTACHMENT_FILTER_LOCATOR, text: 'photo', locatorType: 'id', clearLocator: elems.PHOTO_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.PHOTO_FILTER_RESULTS },
    videoFilter: { locator: elems.ATTACHMENT_FILTER_LOCATOR, text: 'video', locatorType: 'id', clearLocator: elems.VIDEO_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.VIDEO_FILTER_RESULTS },
    geotagFilter: { locator: elems.ATTACHMENT_FILTER_LOCATOR, text: 'geotag', locatorType: 'id', clearLocator: elems.GEOTAG_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.GEOTAG_FILTER_RESULTS },
    modQueuedFilter: { locator: elems.MODERATION_FILTER_LOCATOR, text: 'queued', locatorType: 'id', clearLocator: elems.MOD_QUEUED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.MOD_QUEUED_FILTER_RESULTS },
    modPendingFilter: { locator: elems.MODERATION_FILTER_LOCATOR, text: 'pending', locatorType: 'id', clearLocator: elems.MOD_PENDING_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.MOD_PENDING_FILTER_RESULTS },
    modApprovedFilter: { locator: elems.MODERATION_FILTER_LOCATOR, text: 'approved', locatorType: 'id', clearLocator: elems.MOD_APPROVED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.MOD_APPROVED_FILTER_RESULTS },
    modRejectedFilter: { locator: elems.MODERATION_FILTER_LOCATOR, text: 'rejected', locatorType: 'id', clearLocator: elems.MOD_REJECTED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.MOD_REJECTED_FILTER_RESULTS },
    modOverruledFilter: { locator: elems.MODERATION_FILTER_LOCATOR, text: 'overruled', locatorType: 'id', clearLocator: elems.MOD_OVERRULED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.MOD_OVERRULED_FILTER_RESULTS },
    taggingQueuedFilter: { locator: elems.TAGGING_FILTER_LOCATOR, text: 'queued', locatorType: 'id', clearLocator: elems.TAGGING_QUEUED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.TAGGING_QUEUED_FILTER_RESULTS },
    taggingPendingFilter: { locator: elems.TAGGING_FILTER_LOCATOR, text: 'pending', locatorType: 'id', clearLocator: elems.TAGGING_PENDING_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.TAGGING_PENDING_FILTER_RESULTS },
    taggingCompletedFilter: { locator: elems.TAGGING_FILTER_LOCATOR, text: 'completed', locatorType: 'id', clearLocator: elems.TAGGING_COMPLETED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.TAGGING_COMPLETED_FILTER_RESULTS },
    taggingRejectedFilter: { locator: elems.TAGGING_FILTER_LOCATOR, text: 'rejected', locatorType: 'id', clearLocator: elems.TAGGING_REJECTED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.TAGGING_REJECTED_FILTER_RESULTS },
    rightsQueuedFilter: { locator: elems.RIGHTS_FILTER_LOCATOR, text: 'queued', locatorType: 'id', clearLocator: elems.RIGHTS_QUEUED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.RIGHTS_QUEUED_FILTER_RESULTS },
    rightsPendingFilter: { locator: elems.RIGHTS_FILTER_LOCATOR, text: 'pending', locatorType: 'id', clearLocator: elems.RIGHTS_PENDING_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.RIGHTS_PENDING_FILTER_RESULTS },
    rightsGrantedFilter: { locator: elems.RIGHTS_FILTER_LOCATOR, text: 'granted', locatorType: 'id', clearLocator: elems.RIGHTS_GRANTED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.RIGHTS_GRANTED_FILTER_RESULTS },
    rightsDeniedFilter: { locator: elems.RIGHTS_FILTER_LOCATOR, text: 'denied', locatorType: 'id', clearLocator: elems.RIGHTS_DENIED_CLEAR_LOCATOR, clearLocatorType: 'css', results: props.RIGHTS_DENIED_FILTER_RESULTS },
  };

});

