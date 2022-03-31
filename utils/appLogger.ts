const log = (...o) => {
    if(__DEV__) {
        console.log("-------------------------");
        console.log("🐛", ...o);
        console.log("-------------------------");
    }
}

export {log}