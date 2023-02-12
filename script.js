//1st task

/* a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
 a String representing the studio, and a String representing the rating as its arguments, 
 and sets the respective class properties to these values.
*/

class Movie1{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var cinema1 =new Movie1("Toy Story","pixar","PG-13");
console.log(cinema1);


//  b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie2{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
} 
}
var cinema2 =new Movie2("Toy Story","pixar");
console.log(cinema2);

//  c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
//   You may assume the input array is full of Movie instances. The returned array need not be full.


class Movie{ 
constructor(movies,ratings){
    this.movies=movies;
    this.ratings=ratings;   
}

getPg(cinema){
     cinema=cinema.filter((ele)=>ele.ratings=="PG");
   cinema=cinema.map((ele)=>ele.movies)
   return cinema;
}
}
var m1 = new Movie("toyStory","PG");
var m2 = new Movie("dictator","A");
var m3 = new Movie("coco","PG");
var m4= new Movie("cars","PG");
var m5=new Movie("deadPool","R"); 
var film = new Movie();
var cinema = [m1,m2,m3,m4,m5];

console.log(film.getPg(cinema));



//  d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”,
// and the rating “PG-13”;


class Movie4{
    constructor(title,studio,rating){  
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var cinema4 =new Movie4("Casino Royal","Eon Productions","PG-13");
console.log(cinema4);


//  2nd task

class Circle{

constructor(radius,color){
  this.radius=radius;
  this.color=color;
  
}

getRadius(){
return `Radius of the Circle= ${this.radius};`;
}

getColor(){
return `Color of the Circle= ${this.color};`;
}


to_string(){

return `Circle[radius=${this.radius},color=${this.color}];`;
}

getArea(){

return (Math.PI*Math.pow(this.radius,2)).toFixed(2);
}

getCircum(){

return (2*Math.PI*this.radius).toFixed(2);
}
}



var result = new Circle("1.0","red");

console.log(result.getRadius(),result.getColor(),result.to_string(),result.getArea(),result.getCircum());






//3rd task

//Write a “person” class to hold all the details.

class David{
constructor(firstName,lastName,age,gender,mobileNumber,degree,profession,maritalStatus){ 
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
  this.gender=gender;
  this.mobileNumber=mobileNumber;
  this.degree=degree;
  this.profession=profession;
  this.maritalStatus=maritalStatus;
}
}
var detail=new David("David","Billa","30","Male","9852616618","B.TECH","Gangster","Single");
console.log(detail);


//4th task 
//write a class to calculate the uber price.


class Uberfee{ 
constructor(customerName,pickupPoint,dropPoint,kilometers,price){  
  this.customerName=customerName;
  this.pickupPoint=pickupPoint;
  this.dropPoint=dropPoint;
  this.kilometers=kilometers;
  this.price=kilometers*10;
}
}
var detail=new Uberfee("john","ECR","Tambaram","30");
console.log(detail);