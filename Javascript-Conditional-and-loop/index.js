//SOAL NO 1
var nilai = 75;
if (nilai >= 85){
  console.log("A")
} else if (nilai >= 75 && nilai < 85){
  console.log("B")
} else if (nilai >= 65 && nilai < 75){
  console.log("C")
} else if (nilai >= 55 && nilai < 65){
  console.log("D")
} else {
  console.log("E")
} //.... Jawaban soal no 1



//SOAL NO 2
var tanggal = 31;
var bulan = 8;
var tahun = 2002;

switch(bulan) {
  case 1:   { bulan = 'Janurary'; break; }
  case 2:   { bulan = 'February'; break; }
  case 3:   { bulan = 'Maret'; break; }
  case 4:   { bulan = 'April'; break; }
  case 5:   { bulan = 'Mei'; break; }    
  case 6:   { bulan = 'Juni'; break; }    
  case 7:   { bulan = 'Juli'; break; }    
  case 8:   { bulan = 'Agustus'; break; }    
  case 9:   { bulan = 'September'; break; }    
  case 10:   { bulan = 'October'; break; }    
  case 11:   { bulan = 'November'; break; }    
  case 12:   { bulan = 'December'; break; }     
}
console.log(tanggal+" " + bulan+" " + tahun+" ") //...Jawaban soal no 2


//SOAL NO 3
for (let triangle = "#"; triangle.length <=3; triangle += "#"){
  console.log(triangle);
}

for (let triangle = "#"; triangle.length <=7; triangle += "#"){
  console.log(triangle); //...Jawaban soal no 3
}



//SOAL N0 4
var m = 3
var text1 = 'I love programming'
var text2 = 'I love Javascript'
var text3 = 'I love VueJS' 
var line = '';

for (s = 1; s <= m; s++){
    if(s % 3 == 1){
        console.log(s + ' - ' + text1)
        line += '=';
    } else if(s % 3 == 2){
        console.log(s + ' - ' + text2)
        line += '=';
    } else if(s % 3 == 0){
        console.log(s + ' - ' + text3)
        line += '=';
        console.log(line)
    }
}//...Jawaban soal no 4