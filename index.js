let fullName='enirique';

function call(name){
    
    console.log(name);

}

call(fullName);




let children=['nyambura','kamau','kibet']
let vehicle={

type:'lorry',
color:'white',
model:'isuzu',
year:2025,
fuelType:'disel',
isAccident:false

}







//write a program that adds two numbers and returns the sum

let a=2;
let b=5;
let sum;

function add(x,y){
    sum=x+y;
    return sum;
}


sum=add(a,b);
console.log(sum);




console.log(vehicle.model)
console.log(children)



//write a program that returns weather a person is an adult or a child

let age=20;
let personStatus;
function CheckAge(age){

if(age>=18){
 personStatus='adult'

}
else if(age<18){

    personStatus='child'
}else{
    personStatus='error'
}


return personStatus
}


let results=CheckAge(1);
console.log(results);


let grade;
function CheckGrade(marks){
switch(marks){
case 90:
    grade='A';
    break;
case 10:
    grade='E';
    break;
default :
     grade='unknown marks';
     
break;

}


return grade;
}


console.log(CheckGrade(90));




function printChildrenNames(){

for(i=0;i<3;i++){

console.log(children[i])
}


}

printChildrenNames()


//write a program to print numbers from 1 to 1000

function printNumbers(){

for(i=1;i<=100;i++){

if(i%2===1){

    console.log(i)

}


}


}

//printNumbers()

//write a program to print odd numbers from 1 to 100




class Person {
                 
    
    constructor(name)  { this.name = name; } 
                                    
    greet() { console.log("Hello " + this.name); } 
            
            
}

class bank{
    
    constructor(bank){
      
      this.balance=0
      
    }



      deposit(params) {
         this.balance=0
       return this.balance=this.balance+ params
    }
  withdra(params){
    this.balance=0
         
      return this.balance=this.balance- params
  }

}




let atm =new bank();
let newbalance=atm.deposit(900)
console.log(newbalance);



const packages = [
  {
    "packageName": "Ksh 5 - 10 Mins",
    "price": 5,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 10,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 8 - 12 Mins",
    "price": 8,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 12,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 10 - 15 Mins",
    "price": 10,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 15,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 12 - 24 Mins",
    "price": 12,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 24,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 13 - 27 Mins",
    "price": 13,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 27,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 15 - 35 Mins",
    "price": 15,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 35,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 14 - 30 Mins",
    "price": 14,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 30,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 18 - 40 Mins",
    "price": 18,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 40,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 20 - 45 Mins",
    "price": 20,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 45,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 22 - 48 Mins",
    "price": 22,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 48,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 25 - 53 Mins",
    "price": 25,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 53,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 27 - 58 Mins",
    "price": 27,
    "packageCategory": "Hotspot",
    "validityType": "Minutes",
    "validityValue": 58,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 30 - 10 Hrs",
    "price": 30,
    "packageCategory": "Hotspot",
    "validityType": "Hours",
    "validityValue": 10,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 35 - 12 Hrs",
    "price": 35,
    "packageCategory": "Hotspot",
    "validityType": "Hours",
    "validityValue": 12,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 38 - 14 Hrs",
    "price": 38,
    "packageCategory": "Hotspot",
    "validityType": "Hours",
    "validityValue": 14,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 40 - 18 Hrs",
    "price": 40,
    "packageCategory": "Hotspot",
    "validityType": "Hours",
    "validityValue": 18,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 42 - 24 Hrs",
    "price": 42,
    "packageCategory": "Hotspot",
    "validityType": "Hours",
    "validityValue": 24,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 45 - 27 Hrs",
    "price": 45,
    "packageCategory": "Hotspot",
    "validityType": "Hours",
    "validityValue": 27,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 50 - 36 Hrs",
    "price": 50,
    "packageCategory": "Hotspot",
    "validityType": "Hours",
    "validityValue": 36,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 55 - 42 Hrs",
    "price": 55,
    "packageCategory": "Hotspot",
    "validityType": "Hours",
    "validityValue": 42,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 70 - 3 Days",
    "price": 70,
    "packageCategory": "Hotspot",
    "validityType": "Days",
    "validityValue": 3,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 105 - 4 Days",
    "price": 105,
    "packageCategory": "Hotspot",
    "validityType": "Days",
    "validityValue": 4,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 115 - 5 Days",
    "price": 115,
    "packageCategory": "Hotspot",
    "validityType": "Days",
    "validityValue": 5,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 250 - 7 Days",
    "price": 250,
    "packageCategory": "Hotspot",
    "validityType": "Days",
    "validityValue": 7,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 300 - 9 Days",
    "price": 300,
    "packageCategory": "Hotspot",
    "validityType": "Days",
    "validityValue": 9,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 400 - 21 Days",
    "price": 400,
    "packageCategory": "Hotspot",
    "validityType": "Days",
    "validityValue": 21,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  },
  {
    "packageName": "Ksh 700 - 1 Month",
    "price": 700,
    "packageCategory": "Hotspot",
    "validityType": "Months",
    "validityValue": 1,
    "bandwidthType": "Shared",
    "activeStatus": true,
    "speedDownload": 0,
    "speedUpload": 0,
    "enableBurst": true,
    "rateLimit": "",
    "burstLimit": "",
    "burstThreshold": "",
    "burstTime": "",
    "createdBy": "Admin"
  }
];

const url = "http://184.168.21.114/api/v1/system/packages";

async function uploadPackages() {
  for (const pkg of packages) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pkg) // send one object at a time
      });

      const result = await response.json();

      console.log("Uploaded:", pkg.packageName, result);
    } catch (error) {
      console.error("Failed:", pkg.packageName, error);
    }
  }
}

uploadPackages();