const repeatString = function(hey, times) {
    if (times<0) return `ERROR`
    let string=``;
    for(let i=0; i<times; i++) {
        string+=`hey`
    }
    return repeatString(`hey`, 5)
};

// Do not edit below this line
module.exports = repeatString;
