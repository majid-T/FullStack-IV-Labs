const arrayOfNames = ['jaxx','tiny','clay'];
const mixedArray = ['anarchy',99,true];

const makeUpperCase = (inArray)=>{
    let result = [];
    return new Promise((resolve,reject)=>{
        for(item of inArray){
            if(typeof(item)==='string'){
                result.push(item.toUpperCase());
            }else{
                reject('ERROR: Not all objects are string in the array');
            }
        }
        resolve(result);
    });
}

const sortWords = (inArray)=>{
    return new Promise((resolve,reject)=>{
        inArray.sort();
        resolve(inArray);
    });
}


makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then((result)=>{console.log(result)})
    .catch((err)=>{console.log(err)});
