console.log("Object and methods");

let teacherDolgor = {
    firstName : 'Dolgor', 
    lastName : 'Dondog', 
    age : 35 , 
    exprerience : 10 , 
    children : [], 
    isMarried : true, 
    address : {
        district : 'BGD', 
        houseNumber : 016, 
        Khoroolol : "1-r", 
        Khoroo : "2-r", 
        doorNumber : "4"
    }, 
    GPA: 94.5, 
    introduction: function(){
        console.log(`MInii neriig ${this.lastName}-iin ${this.firstName}gedeg
        BI ${this.age} nastai. BI ${this.exprerience}-iin ajliintushilgatai. 
        BI ${this.address.district}-t amidardag`);
    }

}
teacherDolgor.introduction()

let teacherDolgorClone = teacherDolgor; 


teacherDolgorClone.introduction()
 teacherDolgorClone.firstName = "Dolgor Clone";
 console.log(teacherDolgor.firstName);
 console.log(teacherDolgorClone.firstName);

 let teacherDolgorRealClone = {...teacherDolgor};
 teacherDolgorRealClone.firstName = 'Dolgor Real Clone';
 console.log(teacherDolgorRealClone.firstName);
 console.log(teacherDolgor.firstName);

 console.log(Object.keys(teacherDolgor));
 console.log(Object.values(teacherDolgor));


 let newTeacher = Object.create ({
    firstName: "Firstname",
    lastName : 'lastName'
 })
 console.log(newTeacher);
 Object.assign({

 }, newTeacher)
 const target = { a: 1, b: 2}
 const source = { b: 4, c: 2}
 const returnedTarget = Object.assign(target);
 console.log(returnedTarget);