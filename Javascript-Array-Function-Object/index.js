//SOAL N0 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

for(var angka = 1; angka < 2; angka++) {
  console.log(daftarHewan[4])
  console.log(daftarHewan[0])
  console.log(daftarHewan[2])
  console.log(daftarHewan[3])
  console.log(daftarHewan[1])
}//...Jawaban soal no 1


//SOAL NO 2
function introduce(data){
    return "Nama saya " + data.name + ", umur saya " + data.age + " tahun"+ ", alamat saya di " + data.address + ", dan saya punya hobi yaitu " + data.hobby
  }
  
var data = {name : "Sayyid Ahsan" , age : 19 , address : "Batununggal Cibadak Sukabumi" , hobby : "kerja rodi!" }
var perkenalan = introduce(data)
console.log(perkenalan)//...Jawaban soal no 2


//SOAL NO 3
function hitung_huruf_vokal(kata){
    var total = 0;
    var vocal = ['a', 'i', 'u', 'e', 'o'];
    var word = kata.toLowerCase();
      for (w=0; w<word.length; w++){
        for (i=0; i<vocal.length; i++){
          if (word[w] == vocal[i]){
            total++;
          }
        }
      }
    return total;
  }
  
var hitung_1 = hitung_huruf_vokal("Muhammad")
var hitung_2 = hitung_huruf_vokal("Iqbal")
console.log(hitung_1 , hitung_2)//...Jawaban soal no 3


//SOAL NO 4
function hitung(angka){
  return angka*2-2;
}

console.log( hitung(0) )
console.log( hitung(1) )
console.log( hitung(2) )
console.log( hitung(3) )
console.log( hitung(5) )//...Jawaban soal no 4