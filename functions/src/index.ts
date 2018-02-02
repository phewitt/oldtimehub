import * as functions from 'firebase-functions';

const algoliasearch = require('algoliasearch');


// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;

const ALGOLIA_INDEX_NAME = 'tunes';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY)

exports.onTuneCreated = functions.firestore.document("tunes/{tuneId}").onCreate(event => {
  // Get the note document
  const tune = event.data.data();

  // Add an 'objectID' field which Algolia requires
  tune.objectID = event.params.tuneId;

  // Write to the algolia index
  const index = client.initIndex(ALGOLIA_INDEX_NAME);
  return index.saveObject(tune);
});

exports.onTuneDeleted = functions.firestore.document("tunes/{tuneId}").onDelete(event => {

  const objectID = event.params.tuneId;

  const index = client.initIndex(ALGOLIA_INDEX_NAME);
  return index.deleteObject(objectID);
});
