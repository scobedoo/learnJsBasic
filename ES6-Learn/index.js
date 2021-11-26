//SOAL NO 1
const rumus = (p, l)=>{

    console.log(`rumus luas = ${p*l}`)
  
    console.log(`rumus keliling = ${(p+l)*2}`)
  }
  rumus(5, 10)



//SOAL NO 2
const newFunction = (firstName, lastName) => {
    return {firstName, lastName, fullName:()=>{
      console.log(`${firstName} ${lastName}`)
      }
    }
  }
  
newFunction("William", "Imoh").fullName()



//SOAL NO 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  }
  
  const {firstName, lastName, address, hobby} = newObject;
  
  console.log(firstName, lastName, address, hobby);



//SOAL NO 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined = [...west, ...east];

console.log(combined)


//SOAL NO 5
const planet = "earth" 
const view = "glass" 
var before = (`Lorem ${view} dolor sit amet, consectur adipising elit, ${planet}`);

console.log(before)