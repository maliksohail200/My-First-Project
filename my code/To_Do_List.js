let  Category  =  [
    {value : "Suba" , id : 101, active : true , tasks:[{
        taskValue:'Suba School Jana Hay',
        id: Math.random(),
        isCompleted: false,
    },{
        taskValue:'Suba phirkam',
        id: 103,
        isCompleted: true,
    }]},
    {value : "Dopaher" , id : 102, active : false , tasks:[{
        taskValue:'Dopahir Ko Quran Prna Hay',
        id :  Math.random(),
        isCompleted : true,
    }]},
    {value : "Asar" , id : 103, active : false , tasks:[{
        taskValue:'Asar Ko Cricket Khalni Hay',
        id:  Math.random(),
        isCompleted: true,
    }]},
    {value : "Sham" , id : 104, active : false , tasks:[{
        taskValue:'Sham Ko Khana Khana Hay',
        id:  Math.random(),
        isCompleted: true,
    }]},
    {value : "Rat" , id : 105, active : false , tasks:[{
        taskValue:'Rat Ko Study Krni Hay',
        id:  Math.random(),
        isCompleted: true,
    }]},
]
function forEachFun() {
    DeleteOldValues()
    for (let index = 0; index < Category.length; index++) {
       let AllCategories = Category[index]
       if (Category[index].active == true) {
       document.getElementById("allCategories").innerHTML += `<div id='${AllCategories.id}' class="AllCategoriies"><h4 class="EachCategory">${AllCategories.value}</h4><button class="EditButton" onclick="EditCatFunc(${AllCategories.id})">Edit</button><button class="EditButton" onclick="DeleteCatFromFun(${AllCategories.id})">Delete</button></div>`
       PrintTask(AllCategories.tasks)
    }else{
       document.getElementById("allCategories").innerHTML += `<div id='${AllCategories.id}' class="AllCategories" onclick="activeCatFun(${AllCategories.id})"><h4 class="EachCategory">${AllCategories.value}</h4><button class="EditButton" onclick="EditCatFunc(${AllCategories.id})">Edit</button><button class="EditButton" onclick="DeleteCatFromFun(${AllCategories.id})">Delete</button></div>`
    }
}
}
forEachFun()
function activeCatFun(id) {
    Category.forEach((item)=>{
        if (item.id == id) {
            item.active = true
        }else{
            item.active = false
        }
    })
    forEachFun()
 
}
forEachFun()
// ............................................Right Side Functions....................................................//
function AddCatFun() {
  document.getElementById("inputDiv").innerHTML = `<input type="text" id="InputValue" placeholder="Inter New Category"><button id="SaveInputButton" onclick="SaveCatFun()">Save</button>`
}
function SaveCatFun() {
    let SaveInputValue = document.getElementById("InputValue").value
   if (SaveInputValue == "") {
       alert("Please Enter Category")
}
else{
    let InputValueFromDivInput = document.getElementById("InputValue").value
  let Checked =  Category.find((item)=>
        item.value == InputValueFromDivInput
    )
    if (InputValueFromDivInput == Checked?.value) {
        alert("This Value Is Already Given So Please Give Another Category")
        return
    }
    
    Category.push({value : InputValueFromDivInput , id : Math.random()} )
    document.getElementById("inputDiv").innerHTML = ""
    forEachFun()
}
}
function DeleteOldValues() {
    document.getElementById("allCategories").innerHTML = ""
}
function EditCatFunc(id) {
    let ClickedValue = Category.find((item)=>item.id == id).value
    document.getElementById(id).innerHTML = `<input type="text" id="${id}-input" class="    " value="${ClickedValue}"><button class="SaveCatFromInput" onclick="EditValueSaveInCat(${id})">Save</button><button class="SaveCatFromInput">Cancel</button>`
}
function EditValueSaveInCat(id) {
    // let ClickedValueSave = Category.find((item)=>item.id == id).value
    let Ival = document.getElementById(`${id}-input`).value
    Category.forEach((item)=>{
        if(item.id == id){
            item.value = Ival
        }
        
    })
    forEachFun()
}
function DeleteCatFromFun(id) {
     let remove =  Category.filter((index)=>index.id != id)
     Category = remove
     forEachFun()
}
function ActiveCateFun(active) {
    
}

// ..........................Right Side Functions..........................//

function PrintTask(ActiveCat){
    
    document.getElementById("CheckBoxes").innerHTML = ""
    for (let index = 0; index < ActiveCat.length; index++) {
        let GetTasks = ActiveCat[index]
        document.getElementById("CheckBoxes").innerHTML += ` <input type="checkbox" ${GetTasks.isCompleted ? "checked" : ""}  onchange="OnChangeCheckbox(${GetTasks.id})" id="vehicle3"><label for="vehicle3" id="vehicle3">${GetTasks.taskValue}</label><input type="button" value="Delete" class="DeleteAllButton" onclick="DeleteTasksFun(${GetTasks.id})"><br>`
        
    }
}
function OnChangeCheckbox(id){
    let ActiveDivTasks = Category.find((item)=>item.active == true)?.tasks

    ActiveDivTasks.forEach((item)=>{
        if(item.id == id){
            item.isCompleted = !item.isCompleted
        }
    })
}
function SaveTaskInDiv() {
       let SaveTaskInList = document.getElementById("mainInputRs").value
       let ActiveDivTasks = Category.find((item)=>item.active == true)?.tasks
       
       if (SaveTaskInList == "") {
        alert("Please Add Some text");
       }else{
        
       ActiveDivTasks.push( { taskValue : SaveTaskInList , id: Math.random(),isCompleted: false})
       document.getElementById("mainInputRs").value = ""
       for (let index = 0; index < Category.length; index++) {
       let SameTasks = Category[index].tasks
       if (SaveTaskInList == SameTasks.taskValue) {
        alert("This Tasks Already Given")
        return
       }
    
        
       }
       PrintTask(ActiveDivTasks)
       }
}
function ClearAllCatFun() {
    let activeCategory = Category.find((item)=>item.active)
    Category.forEach((item)=>{
        if (item.id == activeCategory.id) {
            item.tasks = ""
        }   
     })
    forEachFun()
}
function DeleteTasksFun(id) {
   let activeCat = Category.find((item)=>item.active == true)
   Category.forEach((item)=>{
        if (item.id == activeCat.id) {
            item.tasks = activeCat.tasks.filter((item)=>item.id !== id)
        }
   })
   forEachFun()
}
function OnKeyPressTaskInput(e){
    if(e.key == 'Enter'){
        SaveTaskInDiv()
    }

}
function ShowAllTasksFun() {
     document.getElementById("secondButton").innerHTML = `<input type="button" value="All uncompleted Tasks" class="AllUnCompleteButton" onclick="AllUncompletedFun()">`
     let all = []
     for (let index = 0; index < Category.length; index++) {
        let allTasksFromCat = Category[index]?.tasks?.filter((item)=>item.isCompleted == true)
         all = [...all ,...allTasksFromCat ]
     }
     console.log(all)
     document.getElementById("CheckBoxes").innerHTML = ""
     for (let index = 0; index < all.length; index++) {
         let GetTasks = all[index]
         document.getElementById("CheckBoxes").innerHTML += ` <input type="checkbox" ${GetTasks.isCompleted ? "checked" : ""}  onchange="OnChangeCheckbox(${GetTasks.id})" id="vehicle3"><label for="vehicle3" id="vehicle3">${GetTasks.taskValue}</label><input type="button" value="Delete" class="DeleteAllButton" onclick="DeleteTasksFun(${GetTasks.id})"><br>`
     }
     
    }
function AllUncompletedFun() {
    document.getElementById("secondButton").innerHTML = `<input type="button" value="Normal View" class="AllTasksButton" onclick="ShowAlllTasksFun()">`
    let all = []
    for (let index = 0; index < Category.length; index++) {
       let allTasksFromCat = Category[index]?.tasks?.filter((item)=>item.isCompleted == false)
        all = [...all ,...allTasksFromCat ]
    }
    console.log(all)
    document.getElementById("CheckBoxes").innerHTML = ""
    for (let index = 0; index < all.length; index++) {
        let GetTasks = all[index]
        document.getElementById("CheckBoxes").innerHTML += ` <input type="checkbox" ${GetTasks.isCompleted ? "checked" : ""}  onchange="OnChangeCheckbox(${GetTasks.id})" id="vehicle3"><label for="vehicle3" id="vehicle3">${GetTasks.taskValue}</label><input type="button" value="Delete" class="DeleteAllButton" onclick="DeleteTasksFun(${GetTasks.id})"><br>`
    }
}
function ShowAlllTasksFun(ActiveCat) {
    document.getElementById("secondButton").innerHTML = `<input type="button" value="Show All Complete Tasks" class="AllTasksButton" onclick="ShowAllTasksFun()">`
    document.getElementById("CheckBoxes").innerHTML = ""
    forEachFun()
}