// console.log("Hello world");

function Yes(){
    const data=[
        {
            id: "1",
            title: "first",
            description:"this is first",
            price:"$5.00",
        },
        {
            id: "2",
            title: "second",
            description:"this is second",
            price:"$10.00",
        },
        {
            id: "3",
            title: "third",
            description:"this is third",
            price:"$15.00",
        },
    ];
const topDesserts=data.map(dessert=>{
   return dessert;
})
}

export default function Yes(){
    console.log(topDesserts);
    return
}