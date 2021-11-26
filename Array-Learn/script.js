// Mengakses Nilai Dalam Array
var text = "hello world";
function reverseString(arr){
    var reverse = arr.split("");
    var temp = [];
    for(var i = reverse.length -1; i >=0; i--){
        temp.push(reverse[i]);
    }
    return temp.join("");
}
console.log(reverseString(text))


// Melakukan Looping Data Arayy
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(arr){
    var temp = ""
    for (var i = 0; i < arr.length; i++){
        temp += "Nomor ID: " + arr[i][0] + "\n"
        temp += "Nama Lengkap: " + arr[i][1] + "\n"
        temp += "TTL: " + arr[i].slice(2,4).join(" ") + "\n"
        temp += "Hobi: " + arr[i][4] + "\n" + "\n"
    }
    return temp
}
console.log(dataHandling(input))


//Menggunakan Built-in Function pada Array
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
const dataHandling2 = (arr)=>{
    arr.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    arr.splice(4,1,"Pria", "SMA Internasional Metro")
    console.log(arr)
    var cut = arr[3].split("/")
    var month = cut[1]
    switch(month) {
        case "01":   { month = 'Janurary'; break; }
        case "02":   { month = 'February'; break; }
        case "03":   { month = 'Maret'; break; }
        case "04":   { month = 'April'; break; }
        case "05":   { month = 'Mei'; break; }    
        case "06":   { month = 'Juni'; break; }    
        case "07":   { month = 'Juli'; break; }    
        case "08":   { month = 'Agustus'; break; }    
        case "09":   { month = 'September'; break; }    
        case "10":   { month = 'October'; break; }    
        case "11":   { month = 'November'; break; }    
        case "12":   { month = 'December'; break; }     
      }
    console.log(month)
    var sortingArr = cut.sort((a,b)=> b - a)
    console.log(sortingArr)
    var merge = cut.join("-")
    console.log(merge)
    var charsLimit = arr[1].slice(0, 15)
    return charsLimit
}
console.log(dataHandling2(input));