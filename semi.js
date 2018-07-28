/*var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "czerwony",
	passengers: 2,
	convertible: false,
	mileage: 1021
};

var cadi = {
	make: "Cadillac",
	model: "GM",
	year: 1955,
	color: "jasnobrązowy",
	passengers: 5,
	convertible: false,
	mileage: 12892,
};

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "szaroniebieski",
	passengers: 2,
	convertible: false,
	mileage: 88000,
};
var taxi = {
	make: "SieMoCorp",
	model: "Taxi",
	year: 1955,
	color: "żółty",
	passengers: 4,
	convertible: false,
	mileage: 281341
};*/

//obiektowe magnesiki ćwiczenie
 /*var dog = {
	 name: "Burek",
	 weight: 20.2,
	 age: 4,
	 breed: "mieszaniec",
	 activity: "przynoszenie piłki"
 };

 var bark;
 if(dog.weight>20){
	 bark= "HAU HAU";
 } else {
	 bark="hau hau";
 }
 var speak = dog.name + " szczeka " + bark + " kiedy ma ochotę na " + dog.activity;
 console.log(speak);
 console.log(fiat);
 */
 
 /*function prequal(car){
	 if(car.mileage>10000){
		 return false;
	 }else if (car.year>1960){
		 return false;
	 }
	 return true;
 }
 
 var worthALook=prequal(chevy);
 if(worthALook){
	 console.log("Powinienieś zainteresować się tym" + chevy.make + " " + chevy.model);
 } else {
	 console.log("Ten " + chevy.make + " " + chevy.model + " możesz sobie podarować");
 }*/
//to samo co powyżej, ale z wykorzystaniem pętli for  
/*var carArray=[fiat, chevy, cadi];
for(i=0; i<3; i++){
	var worthALook=prequal(carArray[i]);
 if(worthALook){
	 console.log("Powinienieś zainteresować się tym" + carArray[i].make + " " + carArray[i].model);
 } else {
	 console.log("Ten " + carArray[i].make + " " + carArray[i].model + " możesz sobie podarować");
 }
}*/
//zaostrz ołówek
/*function getSecret(file, secretPassword) {
file.opened = file.opened + 1;
if (secretPassword == file.password) {
return file.contents;
}
else {
return "Złe hasło!! Nie masz dostępu do sekretów.";
}
}
function setSecret(file, secretPassword, secret) {
if (secretPassword == file.password) {
file.opened = 0;
file.contents = secret;
}
}
var superSecretFile = {
level: "tajne",
opened: 0,
password: 2,
contents: "Następne spotkanie z dr. Zatanem odbędzie się w Katowicach."
};
var secret = getSecret(superSecretFile, 2);
console.log(secret);
setSecret(superSecretFile, 2, "Następne spotkanie z dr. Zatanem odbędzie się w Żywcu.");
secret = getSecret(superSecretFile, 2);
console.log(secret);*/


function makeCar() {
var makes = ["Chevy", "GM", "Fiat", "SieMoCorp", "Tucker"];
var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
var years = [1955, 1957, 1948, 1954, 1961];
var colors = ["czerwony", "niebieski", "jasnobrązowy", "żółty", "biały"];
var convertible = [true, false];
var rand1 = Math.floor(Math.random() * makes.length);
var rand2 = Math.floor(Math.random() * models.length);
var rand3 = Math.floor(Math.random() * years.length);
var rand4 = Math.floor(Math.random() * colors.length);
var rand5 = Math.floor(Math.random() * 5) + 1;
var rand6 = Math.floor(Math.random() * 2);
var car = {
make: makes[rand1],
model: models[rand2],
year: years[rand3],
color: colors[rand4],
passengers: rand5,
convertible: convertible[rand6],
mileage: 0
};
return car;
}
function displayCar(car) {
console.log("Twoim nowym samochodem jest " + car.make + " "  +
car.model + " z roku " + car.year + car.convertible);
}
var carToSell = makeCar();
displayCar(carToSell);
