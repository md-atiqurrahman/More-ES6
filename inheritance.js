class TeamMember{
    name;
    salary;
    address = 'bd';
    designation = 'web devloper';
    constructor(memberName,memberSalary){
        this.name = memberName;
        this.salary = memberSalary;
    }
}
class Support extends TeamMember{
    groupSupport;
    constructor(memberName,memberSalary, time){
        super(memberName,memberSalary);
        this.groupSupport = time;
    }
     supportSession(){
         console.log(this.name,' start a support session');
     }
};
class StudentCare extends TeamMember{
    buildAroutine(student){
        console.log(this.name,' tells you to follow this routine',student);
    }
};
class NeptuneDev extends TeamMember{
   appReleaseDate;
   constructor(memberName,memberSalary,Date){
       super(memberName,memberSalary);
       this.appReleaseDate = Date;
    }
    releaseApp(version){
        console.log(this.name,'release this app',version);
    }
};
const giusUddin = new Support('Gius uddin',15000,11);
const mejbaul = new Support('Mezbaul Persian',20000);
const alia = new StudentCare('Alia Bhatt',25000);
// alia.buildAroutine('Atiqur Rahman');
const ash = new NeptuneDev('Ash',30000,'February 28');
ash.releaseApp('4.6.1');

