console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const plus = (number) =>{

    return function (plusNumber){
        return plusNumber + number;
    };
}

plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section 
console.log("EXERCISE 2:\n==========\n");

//`forEach` method to print the _names_ of each user within the list.

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];


   const userName = [];   // same as just using map 
   users.forEach(function(user){
     return userName.push(user.name);
    
   });
   console.log(userName);
  
   
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let namesScores = users.map(function(user){
    return user.name + ": " + user.score; 
    
});

console.log(namesScores);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const status = users.filter(function(user){
    return user.isActive == true});

console.log(status);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");


users.sort((a,b) =>{
    return b.score - a.score;
})
console.log(users);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

const sum = users.reduce((a,user) =>{
    return a + user.score; 
},0)
console.log(sum);