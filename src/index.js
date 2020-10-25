module.exports = function reverse (n) {
    if(n < 0){
         n = n * (-1)
      }
    const number = String(n);
     return number.split("").reverse().join('');
     }