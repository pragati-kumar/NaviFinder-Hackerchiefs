import {APP_ENV} from "react-native-dotenv";

const API_URL = APP_ENV == "development" ? "http://192.168.140.136:4000" : "";

export {API_URL};