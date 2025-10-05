const employees = [
    {
        "id" : 1,
        "firstName" : "Shivam",
        "email" : "e@e.com",
        "password" : "123",
        "taskCounts" : {
            "active" : 2,
            "newTask" : 1,
            "completed" : 1,
            "failed" : 0
        },
        "tasks" : [
            {
                "active" : true,
                "newTask" : false,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design",
                "taskDescription" : "Lorem ipsum dolor sit amet consectetur adipisicing elit."  
            },
            {
                "active" : false,
                "newTask" : false,
                "completed" : true,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design",
                "taskDescription" : "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
            },
            {
                "active" : false,
                "newTask" : true,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design",
                "taskDescription" : "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
            },
            {
                "active" : true,
                "newTask" : false,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design",
                "taskDescription" : "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
            }
        ]
    },
    {
        "id" : 1,
        "firstName" : "exp2",
        "email" : "emp2@example.com",
        "password" : "123",
        "taskCounts" : {
            "active" : 2,
            "newTask" : 1,
            "completed" : 1,
            "failed" : 0
        },
        "tasks" : [
            {
                "active" : true,
                "newTask" : true,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            },
            {
                "active" : false,
                "newTask" : false,
                "completed" : true,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            },
            {
                "active" : true,
                "newTask" : false,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            }
        ]
    },
    {
        "id" : 1,
        "firstName" : "exp3",
        "email" : "emp3@example.com",
        "password" : "123",
        "taskCounts" : {
            "active" : 2,
            "newTask" : 1,
            "completed" : 1,
            "failed" : 0
        },
        "tasks" : [
            {
                "active" : true,
                "newTask" : true,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            },
            {
                "active" : false,
                "newTask" : false,
                "completed" : true,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            },
            {
                "active" : true,
                "newTask" : false,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            }
        ]
    },
    {
        "id" : 1,
        "firstName" : "exp4",
        "email" : "emp4@example.com",
        "password" : "123",
        "taskCounts" : {
            "active" : 2,
            "newTask" : 1,
            "completed" : 1,
            "failed" : 0
        },
        "tasks" : [
            {
                "active" : true,
                "newTask" : true,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            },
            {
                "active" : false,
                "newTask" : false,
                "completed" : true,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            },
            {
                "active" : true,
                "newTask" : false,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            }
        ]
    },
    {
        "id" : 1,
        "firstName" : "exp5",
        "email" : "emp5@example.com",
        "password" : "123",
        "taskCounts" : {
            "active" : 2,
            "newTask" : 1,
            "completed" : 1,
            "failed" : 0
        },
        "tasks" : [
            {
                "active" : true,
                "newTask" : true,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            },
            {
                "active" : false,
                "newTask" : false,
                "completed" : true,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            },
            {
                "active" : true,
                "newTask" : false,
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Revamp the home design",
                "taskDate" : "2025-10-15",
                "category": "Design"
            }
        ]
    }
];


const admin = [
    {
        "id" : 1,
        "firstName" : "Admin",
        "email" : "admin@example.com",
        "password" : "123"
    }
];


export const SetLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const GetLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
    //console.log(JSON.parse(employees))
}