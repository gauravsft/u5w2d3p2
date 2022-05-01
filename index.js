
// 1. object.create() methad
const fourWheelerAutomobiles1={
    speed:"100",
    name:"Maruti",
    price:"0.5M",
    popular:true,
    model:"12s",
    companyName:"TATA",
}

var mahindra=Object.create(fourWheelerAutomobiles1);
mahindra.name="Thar";
delete fourWheelerAutomobiles1.name;
console.log(mahindra);


// second way

//constructor function
function fourWheelerAutomobiles2(speed,name,price,popular,model,companyName){
    this.speed=speed;
    this.name=name
    this.price=price 
    this.popular=popular
    this.model=model
    this.companyName=companyName;
}

var maruti=new fourWheelerAutomobiles2("120","maruti","1200000","yes","12s","TATA");
console.log(maruti)

function sportscar(speed,name,price,popular,model,companyName, milage ,color,engine){
    fourWheelerAutomobiles2.call(this,speed,name,price,popular,model,companyName);
    this.milage=milage;
    this.color=color;
    this.engine=engine;
}
var jaguar=new sportscar(220,"jaguar","1cr","yes","F-type","es",15,"black","2000cc");
console.log(jaguar);


