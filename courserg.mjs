import studentreg from "./studentreg.mjs";

class courserg extends studentreg{
    constructor(semester,year,studentID,faculty,department, courseArray){
        super(semester,year,studentID,faculty,department)
        this.courseArray = courseArray
    }

    totalcourse(){console.log(this.courseArray.length)}
    totalcompulsory(){console.log(this.courseArray.filter(course => course.type === 1))}
    totalelective(){console.log(this.courseArray.filter(course => course.type === 0))}
}



export default courserg