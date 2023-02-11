/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
 arr.map((item)=>{
    if(item.marks>50){
      console.log(item);
    }
 })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
    if(item.marks>50){
      console.log(item);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newStud={id:4,name:"susan",age:"20",marks:45};
  arr.push(newStud);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
    arr.forEach((item)=>{
    if(item.marks>50){
      console.log(item);
    }
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 1, name: "Amar", age: "28", marks: 40 },
    { id: 2, name: "Akbar", age: "30", marks: 45 },
    { id: 3, name: "Anthony", age: "29", marks: 55 },
  ]; 

  let childArr=arr.concat(newArr);
  console.log(childArr);
}
