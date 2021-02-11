/* 
    Read and Write File Utility
*/

// import file service
const fs = require('fs')
const path = require('path')

const getFileContents = (filePath) => {
    let pathToFile = path.join(__dirname, filePath)
    let fileContents = fs.readFileSync(filePath)
    fileContents = JSON.parse(fileContents)
    console.log(fileContents);
    return fileContents
}

const writeFileContents = (filePath, data) => {
    // pass data from signup form using a post endpoint
    const dummyData = {username:"test", email:"test@test.com", password:"test"}
    let fileContents = fs.readFileSync(filePath)
    fileContents = JSON.parse(fileContents)
    fileContents.push(dummyData)
    console.log(fileContents);
    fileContents = JSON.stringify(fileContents)
    fs.writeFileSync(path.join(__dirname, filePath), fileContents)
}

getFileContents("../data/users.json")
writeFileContents("../data/users.json")