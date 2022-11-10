class Person{
    constructor(firstname,lastname,gender){


        this.firstname= firstname;
    this.lastname= lastname;
this.gender = gender;
    }


    firstname="";
    lastname="";
    gender="";

walk(){}
jump(){
    
    console.log("i am jumping");
}
}
const toy = new Person("joe","doll","female");
// console.log(toy.firstname)

export default Person
