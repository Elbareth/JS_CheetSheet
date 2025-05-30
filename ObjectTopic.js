//object literal
let book = {
	"title": "JS book",
  "":"something empty",
  author:{
  	firstname: "ABC",
    "surname": "XYZ"
  }
};
for(let [key, value] of Object.entries(book))
{
	console.log(key + " = " + value);
}
//keyword new
let obj = new Object();
let arr = new Array();
//Object.prototype; Array.prototype
//Object.create()
let obj1 = Object.create({x:5,y:10,z:15}); //obj1 inherit the argument prototype
let obj2 = Object.create(null); //in that case - this method inherit nothing! Even toString() method!
let obj3 = Object.create(Object.prototype); //just standard object like new Object();
let obj4 = new Object();
for(let i = 'a', k = 0; i < 'z'; i++, k++)
{
	console.log(i + " " + k);
  obj4[i] = k; //it's dynamically calculated
}
obj4.abc = 144; //it's static
for(let [key, value] of Object.entries(obj4))
{
	console.log(key +" = "+value);
}
var isSuccess = delete book.title; //we delete the attribute from the object
console.log(isSuccess); //the method delete retunrs true when we successfully
//delete the attribute
//the attribute never existed in the first place - no action occurred
//or when we wrongly use ths method
var isTitleInBook = "title" in book; //we check if attribute exists in obj
console.log("Is title in book = " + isTitleInBook);
//We check if the attribute exists within the object
console.log("Is author in book = "+book.hasOwnProperty("author")); 
//However it returns False when the property is only inherited
console.log("Inherited value = "+book.hasOwnProperty("toSting")); 
//It return True when the proprty exists and it is enumerable
console.log("Exist and is enumerable = "+book.propertyIsEnumerable("author"));
//show own proprties names (not inherited)
//It also not show non-enumerable properties and properties
//that were described by symbol
for(let key of Object.keys(book))
{
	console.log(key);
}
//show own proprties names (not inherited)
//It show enumerable properites and properties
//that were described by symbol
for(let name of Object.getOwnPropertyNames(book))
{
	console.log(name);
}
//It returns all symbols within the object
for(let symbol of Object.getOwnPropertySymbols(book))
{
	console.log(symbol);
}
//Return all properites possbile
for(let key of Reflect.ownKeys(book))
{
	console.log(key);
}
//*********COPING OBJECTS********************
let target = {x : 1};
let source = {y : 2, z : 3};
for(let key of Object.keys(source))
{
	target[key] = source[key];
}
for(let [key, value] of Object.entries(target))
{
	console.log(key + " = " + value);
}
Object.assign(target, source); //we copy entries from source to target
//We old values will bo overrided
for(let [key, value] of Object.entries(target))
{
	console.log(key + " = " + value);
}
//***************SERIALIZATION******************
let text = JSON.stringify(book);
console.log("serialized text = "+text);
let newObj = JSON.parse(text);
console.log("deserialized object");
for(let [key, value] of Object.entries(newObj))
{
	console.log(key + " = " + value);
}
//*************METHOD**************************
let point = {
	x : 1.1,
  y : 2.2,
  toString: function() {return "x = "+ this.x + " y = " + this.y;},
  toLocaleString: function() {return "x = "+ this.x.toLocaleString() + " y = " + this.y.toLocaleString();},
  valueOf: function() {return this.x + this.y;}, //calculate primitive value in some way ;p
  toJSON: function() {return `(${this.x}, ${this.y})`;},
  methodES6() {return "The new way of creating method"}
};
console.log(point.toString());
console.log(point.toLocaleString()); //toString with local configuration
console.log(point.valueOf()); //convert object into primitive value
console.log(JSON.stringify([point])); //we create JSON
let xxx = {x : 1, xx:2, xxx: 3};
let yyy = {y : 1, yy:2, yyy: 3};
let newXXXYYY = {x : 5, y :5, ...xxx, ...yyy}; //we copy the values from objects into one new object. We overwrite the old values
for(let [key, value] of Object.entries(newXXXYYY))
{
	console.log(key + " = " + value);
}
//************GETTER****SETTER*****************
let obj150 =
{
	someData: 150,
  get accessorSomeData() {return this.someData},
  set accessorSomeData(someData) {this.someData = someData}
}
