import Person from "./person.mjs";

class student extends Person{
    constructor(firstname,lastname,gender,studentid){
        super(firstname,lastname,gender)
        this.studentid = studentid
    }
    studentid = "";

}
const toy = new student("toy","boy","female","10")
console.log(toy.studentid);



