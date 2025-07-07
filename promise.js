function f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let V = true;
            if (V) {
                resolve("success");
            } else {
                reject("failure");
            }
        }, 1000);
    });
}

function asynFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("asynFunc1 completed");
        }, 6000);
    });
}

f()
    .then((data) => {
        console.log("promise resolved with data:", data);
        return asynFunc1();
    })
    .then((data) => {
        console.log("asynFunc1 is also successful:", data);
    })
    .catch((error) => {
        console.error("promise rejected with error:", error);
    });