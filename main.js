// Author: [Diane INGABIRE] 
// this is for fetchng id with the user by that specic id 
async function fetchData(userId){
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user/ ${userId}`);
 try{
    
  if(!response.ok){

  throw  Error(response.status);
    
  }
  let Data= await response.json()
  console.log(Data)
  return Data
 }
 catch{
  Error.name
 }
}
fetchData();

async function displayInfo(userId){
    let person = await fetchData(userId);
  if(person){
   console.log(person.name) 
  }
   
}
displayInfo(1)


// for each author 

async function fetchData(){
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user`);
 try{
    
  if(!response.ok){

  throw  Error(response.status);
    
  }
  let Data= await response.json();

  if (Data){
     for (element in Data){
   auth
 }
  }
 

  console.log(Data)
 }
 catch{
  Error.name
 }
}
fetchData();

async function displayInfo(userId){
    let person = await fetchData(userId);
    let comments = person
    
    console.log(person)
}
displayInfo(1)