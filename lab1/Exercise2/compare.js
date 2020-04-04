

const compareNumToTen = (inNum)=>{
    return new Promise((resolve,reject)=>{
        if (inNum < 10){
            reject(`${inNum} is less than 10..`);
        }

        resolve(`${inNum} is greater than 10`);
    });
};


//Fail case
compareNumToTen(2)
    .then((data)=>{
        console.log(`SUCCESS: ${data}`);
    })
    .catch((data)=>{
        console.log(`ERROR: ${data}`);
    });

//Success case
compareNumToTen(15)
    .then((data)=>{
        console.log(`SUCCESS: ${data}`);
    })
    .catch((data)=>{
        console.log(`ERROR: ${data}`);
    });
