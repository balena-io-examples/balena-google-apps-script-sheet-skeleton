import * as fetchGoogleAppsScriptPonyfill from 'fetch-google-apps-script-ponyfill';
import PineClientFetch from 'pinejs-client-fetch';

export const API_BASE_URL = 'https://api.balena-cloud.com/';
export const API_VERSION = 'v6/';

export function getPine() {
	const pine = new PineClientFetch(
		{ apiPrefix: API_BASE_URL + API_VERSION },
		{ fetch: fetchGoogleAppsScriptPonyfill.fetch },
	);
	return pine;
}
