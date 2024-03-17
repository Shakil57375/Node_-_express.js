// express.js use javascript iiff function for module system.
// ! This is a javascript iiff function:
/* 
(function () {
     code goes here
})();
 */
/* (function (exports, require, module, __filename, __dirname) {
    const myArray = [3, 4, 5];
    const a = 4;
    const myFunc = () => {
        console.log("hello");
    };
    we can export a file in node.js like this
    module.exports = myArray
    if you want to export multiple file you can export them as objects
    module.exports = {
        myArray,
        a,
        myFunc,
    };
})(); */
const myArray = [3, 4, 5];
const a = 4;
const myFunc = () => {
    console.log("hello");
};
// we can export a file in node.js like this
// module.exports = myArray
// if you want to export multiple file you can export them as objects
module.exports = {
    myArray,
    a,
    myFunc,
};
