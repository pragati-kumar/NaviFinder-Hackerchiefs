import {APP_ENV} from "react-native-dotenv"; 

const log = (o) => {
    if(APP_ENV == "development") {
        console.log("-------------------------");
        console.log("🐛", ...o);
        console.log("-------------------------");
    }
}

export {log}