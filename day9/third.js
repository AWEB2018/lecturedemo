function Employee(){

    this.name = "CDAC";
    this.id = 1;
    this.sal = undefined;


    this.getName = function(){
        return this.name;
    }
    
}

let emp1 = new Employee()
let name = emp1.getName();
console.log(name);

