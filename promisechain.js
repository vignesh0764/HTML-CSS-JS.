function getdata(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data for id:", dataId);
            if (dataId <= 104)
                resolve("success");
            else {
                reject("unsuccessful");
            }
        }, 2000);
    });
}

getdata(101)
    .then((res) => {
        return getdata(102);
    })
    .then((res) => {
        return getdata(103);
    })
    .then((res) => {
        return getdata(104);
    })
    .then((res) => {
        console.log("All data fetched successfully");
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });