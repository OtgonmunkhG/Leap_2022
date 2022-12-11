function findAllPrice(array, dataTotalPrice){

    for(let i = 0; i < array.length; i++){
       let sum = 0;
       sum = sum + array[i].totalPrice + array[i].totalPrice + array[i].totalPrice + array[i].totalPrice + array[i].totalPrice+ array[i].totalPrice + array[i].totalPrice + array[i].totalPrice + array[i].totalPrice + array[i].totalPrice;
       console.log(sum);
    }
    
}



const data = [
    {   
        productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 300 , casherId:1, date: '2022-11-01'
    },
    {
        productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54.000, casherId:1, date: '2022-11-01'
    },
    {   
        productName:"Shoes", unitPrice:5000, amount: 200, totalPrice: 500000 , casherId:1, date: '2022-11-01'
    },
    {
        productName:"jeans", unitPrice:3000, amount: 18, totalPrice: 54.000, casherId:1, date: '2022-11-01'
    },
    {   
        productName:"Sport ball", unitPrice:5000, amount: 200, totalPrice: 500000 , casherId:1, date: '2022-11-01'
    },
    {
        productName:"sofa", unitPrice:3000, amount: 18, totalPrice: 54.000, casherId:1, date: '2022-11-01'
    },
    {   
        productName:"camb", unitPrice:5000, amount: 200, totalPrice: 500000 , casherId:1, date: '2022-11-01'
    },
    {
        productName:"cake", unitPrice:3000, amount: 18, totalPrice: 54.000, casherId:1, date: '2022-11-01'
    },
    {   
        productName:"chups", unitPrice:5000, amount: 200, totalPrice: 500000 , casherId:1, date: '2022-11-01'
    },
    {
        productName:"t-short", unitPrice:3000, amount: 18, totalPrice: 54.000, casherId:1, date: '2022-11-01'
    }


]
findAllPrice(data);