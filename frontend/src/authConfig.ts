export const msalConfig = {
  auth: {
    clientId: '7b33a059-1d99-4935-94d8-246a037aebdf',
    authority:
      'https://login.microsoftonline.com/b2ddd752-4de4-47ed-b791-5f5b14a7f7b4', // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: 'http://localhost:3000',
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ['User.Read'],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: 'https://localhost:5001/',
};
