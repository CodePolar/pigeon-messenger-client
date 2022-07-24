export const mode = process.env.NODE_ENV === "production"? "production" : "developement";
export const api = mode === "production"? process.env.REACT_APP_PROD_URI : process.env.REACT_APP_DEV_URI;
export const client = mode === "production"? process.env.REACT_APP_GOOGLE_CLIENT_PROD : process.env.REACT_APP_GOOGLE_CLIENT_DEV;

