//SOAL NO.1 //
{console.log('rows1 = 5');}
var bintang1 = '';
for (var rows1 = 0; rows1 < 5 ; rows1++)
{
  bintang1 += '*';
  bintang1 += '\n';
}
console.log (bintang1);
console.log ('\n\n')

// SOAL NO.2 // 
{console.log ('rows2 = 5');}
var bintang5 = '';
for (var rows2 = 0; rows2 < 5; rows2++) {
  for (var baris = 0; baris < 5; baris++){
  bintang5 += '*';
}
  bintang5 += '\n';
}
console.log (bintang5);
console.log ('\n\n');

// SOAL NO.3 //
{console.log ('rows3 = 5');}
var bintangoke = '';
for (var rows3 = 0; rows3 < 5; rows3++) {
  for (var baris1 = 0; baris1 <= rows3; baris1++){
    bintangoke += '*';
  }
  bintangoke += '\n';
}
console.log (bintangoke);