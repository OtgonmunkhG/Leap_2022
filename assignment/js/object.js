

function  findHighScore (array, usersPoints){

  for(let i = 0; i < array.length ; i++){
   
    if(array[i].points >= 50){
      console.log(`${array[i].points} \n ${array[i].points} \n ${array[i].points}`);
    }
  
  }

}
function findSkills (array, usersSkills){
  for(let i = 0; i < array.length; i++){
    if(array[i].skills ===  'JavaScript', 'MongoDB', 'Express', 'React', 'Node'){
      console.log(`${array[i].skills}`);
    }
  }
}

function findOldYear (array, usersAge){
  for(let i = 0; i < array.length; i++){
    if(array[i].age >= 39){
      console.log(`${array[i].name} ${array[i].email} ${array[i].skills} ${array[i].age} ${array[i].isLoggedIn} ${array[i].points}`);
    }
  }
}

const users = [
{
    name:   'Alex', 
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 45,
    isLoggedIn: false,
    points: 30
  },
{
    name:   'Job',
    email: 'job@job.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
{
    name:   'Brook',
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 39,
    isLoggedIn: true,
    points: 50
  },
{
    name:   'Daniel',
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 25,
    isLoggedIn: false,
    points: 40
  },
{
    name:   'John',
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
{
    name:   'Thomas',
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 18,
    isLoggedIn: false,
    points: 40
  },
{
    name:    'Paul',
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 40, 
    introduction: function(){
        console.log(`Намайг ${this.name} гэдэг. Би  ${This.age}-тай.  Миний чадварууд ${this.skills}. Миний тухай бусад мэдээлэлүүд ${this.points} ${this.email} ${this.introduction} `);
  }
   

}

];
console.log(users[0]);
console.log( `${users[1].name} "Энэ хүн нь хамгийн их ур чадвартай хүн юм." ${users[1].skills}`);

findOldYear(users);
findSkills(users);

findHighScore(users);
