import * as functions from 'firebase-functions';
import server from './server';

export let serverService = functions.https.onRequest(server);