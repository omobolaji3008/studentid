import academic from "./academic.mjs";

class studentreg extends academic{
    constructor(semester,year,studentID,faculty,department){
        super(semester,year,studentID)

        this.semester = semester;
        this.year = year;
        this.studentID = studentID;
        this.faculty = faculty;
        this.department = department;
    }
    semester = "";
    year ="";
    studentID = "";
    faculty = "";
    department = "";
}
export default studentreg