let MyArray = [
    {
        CatName: "Study & Academics", id: 10, Active: true, MyTask: [{
            IsChecked: false,
            id: Math.random(),
            MyTasksValue: 'Today I Go Academy',
        },
        ]
    },
    {
        CatName: "Health & Fitness", id: 20, Active: false, MyTask: [{
            isCompleted: true,
            id: Math.random(),
            MyTasksValue: 'Today I Take Madison',
        }]
    },
    {
        CatName: "Personal Growth", id: 30, Active: false, MyTask: [{
            isCompleted: true,
            id: Math.random(),
            MyTasksValue: 'Today I Go For Walk',
        }]
    },
    {
        CatName: "Social & Family Time", id: 40, Active: false, MyTask: [{
            isCompleted: true,
            id: Math.random(),
            MyTasksValue: 'Today I Go In My Family',
        }]
    },
    {
        CatName: "Relaxation & Hobbies", id: 50, Active: false, MyTask: [{
            isCompleted: true,
            id: Math.random(),
            MyTasksValue: 'Today I Play Game',
        }]
    },
    {
        CatName: "Responsibilities", id: 60, Active: false, MyTask: [{
            isCompleted: true,
            id: Math.random(),
            MyTasksValue: 'Today I Complete My Work',
        }]
    },
]
// ...........................left Side Function ....................................
EachTaskInCat()
function EachTaskInCat() {
    DeleteAllOldValue()
    for (let index = 0; index < MyArray.length; index++) {
        let EachMyArray = MyArray[index]
        if (EachMyArray.Active == true) {
            document.getElementById("PrintCategoriesPlace").innerHTML += ` <div class="AddNewInputActive" onclick="clickedTasks(${EachMyArray.id})"><p class="p">${EachMyArray.CatName}</p></div>`
        } else {
            document.getElementById("PrintCategoriesPlace").innerHTML += ` <div class="AddNewInput" onclick="clickedTasks(${EachMyArray.id})"><p class="p">${EachMyArray.CatName}</p></div>`
        }

    }
}
function AddNewTask() {

    document.getElementById("AddInputPlace").innerHTML = `<input type="text" placeholder="+ Inter New" class="AddInputPlaceSize" id="AddInputPlaceGet">`
    document.getElementById("AddInputPlace").innerHTML += `<button type="text" class="AddInputPlaceSave" onclick="SaveCatInDivFun()">Save</button>`
}
function DeleteAllOldValue() {
    document.getElementById("PrintCategoriesPlace").innerHTML = ""
}
function SaveCatInDivFun() {
    console.log
    let InputValue = document.getElementById("AddInputPlaceGet").value
    if (InputValue == "") {
        alert("Please inter Any thing")
    } else {

        let SaveInCategory = MyArray.find((item) => item.CatName == InputValue)
        if (InputValue == SaveInCategory?.CatName) {
            alert("Please Write Another Value Because This Value Already Given")
            return
        }
        MyArray.push({ CatName: InputValue, id: Math.random() })
        console.log(MyArray);

        document.getElementById("AddInputPlace").innerHTML = ""
        EachTaskInCat()
    }

}

// ...................Center Function ...............................//

printTasks()
function printTasks() {
    for (let index = 0; index < MyArray.length; index++) {
        let tasksValue = MyArray[index]
        tasksValue.MyTask.forEach((item) => {
            if (tasksValue.Active == true) {
                console.log(item.MyTasksValue);
                document.getElementById("tasksSection").innerHTML += `<div class="eachTask"> <input type="checkbox"><label for="vehicle1" class="CheckValue">${item.MyTasksValue}</label></div>`
            }
        })
    }
}
function clickedTasks(id) {
    for (let index = 0; index < MyArray.length; index++) {
        let allTasksName = MyArray[index].MyTask[0].id
        MyArray.forEach((item) => {
            if (item.id == id) {
                console.log(item)
                item.Active == true
            } else {
                item.Active = false
            }
        })
        console.log(MyArray)
        if (MyArray[index].id == id) {
            for (let index = 0; index < MyArray.length; index++) {
                let tasksValue = MyArray[index]
                tasksValue.MyTask.forEach((item) => {
                    if (tasksValue.id == id) {
                        console.log(item.MyTasksValue);
                        document.getElementById("tasksSection").innerHTML = `<div class="eachTask"> <input type="checkbox"><label for="vehicle1" class="CheckValue">${item.MyTasksValue}</label></div>`

                    }
                })
            }
        }
    }
    EachTaskInCat()
}
function SaveInputFun() {

    let InputValueFromDivInput = document.getElementById("inputValue").value
    let ActiveDivTasks = MyArray.find((item) => item.Active == true)?.MyTask
    document.getElementById("tasksSection").innerHTML = ""
    if (InputValueFromDivInput == "") {
        alert("Please Add Some text");
    } else {
        let printTaskss = document.getElementById("tasksSection").innerHTML
        ActiveDivTasks.push({ MyTasksValue: InputValueFromDivInput, id: Math.random(), isCompleted: false })
        document.getElementById("inputValue").value = ""
        for (let index = 0; index < MyArray.length; index++) {
            let SameTasks = MyArray[index].MyTask
            if (InputValueFromDivInput == SameTasks.MyTasksValue) {
                alert("This Tasks Already Given")
                return
            }
        }
        printTasks()
    }
}

function ClearAllTasksFun() {
    let activeCategory = MyArray.find((item) => item.Active)
    MyArray.forEach((item) => {
        if (item.id == activeCategory.id) {
            item.tasks = ""
        }
    })
    printTasks()
}
