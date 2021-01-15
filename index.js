
//Methods
let objectArrow= {
    price: 10,
    printPrice: ()=> console.log(this.price, this)
}

let objectNormal = {
    price: 10,
    printPrice: function(){ console.log(this.price, this)}
}

// objectArrow.printPrice()
// objectNormal.printPrice()


//Construcors
function oldFunc(){
    console.log("hello old")
}

let newFunc =()=>{
    console.log("hello new")
}

// let fooOld = new oldFunc();
// let fooNew = new newFunc();

// Higher order functions

const exampleArray = [1,2,3,4,5]

const traditionalWay = exampleArray.map(function(arr){
    return arr*2
})

const arrowWay = exampleArray.map(arr=>arr*2)

console.log(traditionalWay, arrowWay)