const fs = require('fs');
const path = require('path');
const imagesPath = '../assets/images'
function pathCreator(projectName){
  const photos = [];
  fs.readdirSync(path.join(imagesPath, projectName, 'ready'))
    .forEach((filename) => {
      let srcObj = {src: path.join(imagesPath,projectName, 'ready', filename)};
      photos.push(srcObj);
    })
  photos
    .map(filePath => {src: filePath})
  
  const fileName = `src_${projectName}.txt`;
    fs.writeFile(fileName, JSON.stringify(photos),(err) => {if(err) throw err})
  }


  pathCreator('personalWebsite')