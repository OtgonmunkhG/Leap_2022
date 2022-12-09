/**
 * ангид хэдэн эрэгтэй эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
 * сурагчдын насны дунджийг олох функц бичих
 * сурагчдад овог нэмж өгөх
 * ижилхэн настай сурагчдыг олж шинэ array дотор хийх
 * 
 */
function howAreTheirAge (array){
    for(let i = 0; i < array.length; i++){
     
            console.log(array[i].gender);
        
    
    }
}
function findStudentsAgeAverage(array){
    for(let i = 0; i < array.length; i++){
        // let average  = array[i].age / array.length;
        // console.log(average);
            let ageSum = array[i].age + array[i].age + array[i].age + array[i].age + array[i].age + array[i].age;
            // console.log(ageSum);
           
            let average = ageSum / array.length;
            console.log(average);
        
    }
   
   
  
}



let students = [ {
    name: 'Сод-Эрдэнэ' ,
    age : 19 , 
    gender : 'male'
},
{
    name: 'Индра' ,
    age : 19 , 
    gender : 'Female'
},
{
    name : 'Хатнаа',
    age : 21, 
    gender : "male"
},
{
    name : 'Тэмүүлэн', 
    age : 23,
    gender : "male"
},
{
    name : 'Намуун',
    age : 23, 
    gender : "female"
}

]


howAreTheirAge(students);
findStudentsAgeAverage(students);