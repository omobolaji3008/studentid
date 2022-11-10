import course from "./course.mjs";
import courserg from "./courserg.mjs";
import studentreg from "./studentreg.mjs";

const course1 = new course(1076,geg5678,"biology",3,"mr omotayo",0)
const course2 = new course(1076,geg567,"biology",3,"mr omotayo",0)
const course3 = new course(1076,geg7897,"biology",3,"mr omotayo",0)
const course4 = new course(1076,geg4568,"biology",3,"mr omotayo",0)
const course5 = new course(1076,geg1789,"biology",3,"mr omotayo",0)
const course6 = new course(1076,geg1345,"biology",3,"mr omotayo",0)
    

const total = new studentreg (
firstSemester,2009,1,engineering,civil,[course1,course2,course3,course4,course5,course6])
reg.totalcourse()
reg.totalcompulsory()
reg.totalelective()

console.log(total);