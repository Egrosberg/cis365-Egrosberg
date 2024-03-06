// convert comma-separated values into an array
let countries=csv.split(",");
console.log(countries);

// convert array into delimited string
let countriesString=countries.join();
console.log(countriesString);

// check if these are arrays

console.log(Array.isArray(countries));
console.log(Array.isArray(csv));

//  sort a simple array 
countries.sort();
console.log(countries);

// reverse the sort
countries.reverse();
console.log(countries);

// remove the first element
countries.shift();
console.log(countries)

// remove the last element
countries.pop();
console.log(countries);


// add new elements to the front of the array
countries.unshift("America", "China");
console.log(countries);

// search for element
console.log(countries.includes("Germany"));

// search for element index
console.log(countries.indexOf("Germany"));

// make a new array by extracting from another array
let countries2=countries.splice(0,6);
console.log(countries2);

console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"

// for (let i=0; i<cities.length; i++){
//    if(cities["continent"]=="NA"){
//       console.log(cities[city]);
//    }
// }

for (let city of cities){
   if(city.continent=="NA")
   {
      console.log(city);
   }
}

console.log('---------------------');


// use a loop to output gallery names whose country=="USA"
for (let name of galleries){
   if (name.location.country=="USA"){
      console.log(name);
   }

}
console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for(let name of colors){
   if (name.luminance<75){
      console.log(name);
   }
}

console.log('---------------------');

// use two nested loops - outer: loop thru colors


console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */





