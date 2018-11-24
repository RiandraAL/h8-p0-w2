
/*
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function angkan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
*/

function xo(str) {
  // you can only write your code here!
  var tX=0;
  var tO=0;
  for (var x = 0; x <str.length; x++){
    if(str[x] === 'x'){
      tX ++;
    } else if (str[x] === 'o'){
      tO ++;
    }
  }
  if (tX === tO){
    return true;
    } else {
      return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
