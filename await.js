function getdata(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve("successfully fetched data");
        }, 2000);
    });
}

async function fetch() {
    console.log("fetching data 1");
    await getdata(1);
    console.log("fetching data 2");
    await getdata(2);
    console.log("fetching data 3");
    await getdata(3);
}

// Call the fetch function to execute it
fetch();