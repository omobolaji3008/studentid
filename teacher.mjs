import Person from "./person.mjs";


class Teacher extends Person{
    constructor(firstname,lastname,gender,degree){
        super( firstname,lastname,gender)
        this.degree = degree;
    }
    degree="";
    tech(){

    }
}
// const toy = new Teacher("toy","boy","female","phd")
// console.log(toy.degree);
// console.log(toy.firstname);
export default Teacher 