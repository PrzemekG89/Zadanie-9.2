//function

var womenNames = ['Jola', 'Ola', 'Ela', 'Ala'];
var manNames = ['Adam', 'Roman', 'Jan', 'Karol'];
var allNames = womenNames.concat(manNames);
console.log(allNames);
var myName = 'Przemek';
if (allNames.indexOf(myName) === -1) {
    var addNames = allNames.push(myName);
}
console.log(allNames);