class Support{
    name;
    salary;
    address = 'bd';
    designation = 'web devloper';
    constructor(memberName,memberSalary){
        this.name = memberName;
        this.salary = memberSalary;
    }
     supportSession(){
         console.log(this.name,' start a support session');
     }
}

const giusUddin = new Support('Gius uddin',15000);

const mejbaul = new Support('Mezbaul Persian',20000);
console.log(mejbaul);
