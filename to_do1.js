const todoBtn = document.querySelector("#todoBtn");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
let data = []
todoBtn.addEventListener("click" , function(){
    // console.log("click the button");
    let value = todoInput.value 
    todoInput.value = '' ; //inputun icindeki default "value" silirik
    data.push(value)  //inputa daxil edeceyimiz valuelar push edilir bosh bir arrayin icine 
    console.log(data);


   //?___________________________

const newListContent = data.reverse() //axrinci yazdigimiz ilk yere dushsun deye 
    .map(function(item,index,list){
    return  `<li class="list-group-item">${item}</li>`
})
    .join(""); 
    console.log(newListContent );
    todoList.innerHTML = newListContent ;
})
