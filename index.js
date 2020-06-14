let pets=[
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];


function getAge(){
		return pets.map((pet)=>{
		new Date().getFullYear() - pet.bornOn;
		return pet;})}



let petsWithAge = [];
for (let i = 0; i < pets.length; i++) {
  let pet = pets[i];
  pet.age = getAge(pet);

  petsWithAge = [...petsWithAge, ...pet];
}
console.log(petsWithAge);



let dogs = [];
function PetType(){
	pets.forEach(pet=>{
		if (pet.type === "dog") {   
			dogs = [...dogs, ...pet];
		  }


});
}
console.log(dogs);


let jasper;
function PetName(){
	pets.forEach(pet=>{
		if (pet.name === "Jasper") {   
			jasper = pet;
		  }


});
}
console.log(`Jasper is ${jasper.age} years old`);

