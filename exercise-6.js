// SOAL NO.1 //
{console.log('LOOPING PERTAMA');}
var looping = 2;
while (looping <= 20) {console.log(looping + ' - ' + 'I Love Coding'); looping++; looping++;}
{console.log ('LOOPING KEDUA');}
var ulang = 20;
while (ulang >= 2) {console.log(ulang + ' - ' + 'I will become fullstack developer'); ulang--; ulang--;}
{console.log ('\n\n\n');}

//SOAL NO.2 //
{console.log('LOOPING PERTAMA');}
for(var looping = 1 ; looping <=20 ; looping++) {console.log(looping + ' - ' + 'I Love Coding');}
{console.log('LOOPING KEDUA');}
for(var looping = 20 ; looping >= 1 ; looping--){console.log(looping + ' - ' + 'I will become fullstack developer');}
{console.log ('\n\n\n');}

//SOAL NO.3 // 
{console.log('Pertambahan counter 1');}
for (var looping = 1 ; looping <= 100 ; looping++){
  if (looping%2==0 ){console.log(looping + ' = ' + 'GENAP');} 
  else {console.log(looping + ' = ' + 'GANJIL');}
}
{console.log('\n');}
{console.log('Pertambahan counter 2');}
for (var looping = 1 ; looping <= 100 ; looping++ + looping++) {
  if (looping%3==0){console.log(looping + ' = ' + 'KELIPATAN 3');}
  else {console.log('');}
}
{console.log('\n');}
{console.log('Pertambahan counter 5');}
for (var looping = 1 ; looping <= 100 ; looping++ + looping++ + looping++ + looping++ + looping++) {
  if (looping%6==0) {console.log(looping + ' = ' + 'KELIPATAN 6');}
  else { console.log ('');}
}
{console.log('\n');}
{console.log('Pertambahan counter 9');}
for (var looping = 1 ; looping <= 100 ; looping++ + looping++ + looping++ + looping++ + looping++ + looping++ + looping++ + looping++ + looping++) {
  if (looping%10==0) {console.log(looping + ' = ' + 'KELIPATAN 10');}
  else {console.log ('');}
}