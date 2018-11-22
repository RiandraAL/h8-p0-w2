
// SOAL NO.1 //
function shoutOut () {
    var shoutOut = 'Halo Function!';
return shoutOut;
}
    console.log(shoutOut());
console.log('\n', '\n');



// SOAL NO.2//
function calculateMultiply (num1, num2){
return num1 * num2;

}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);
console.log ('\n', '\n');



//SOAL NO.3 //
function processSentence() {

return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '! ';
}

var name = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogjakarta';
var hobby = 'gaming';

var fullSentence = processSentence();
console.log(fullSentence);
