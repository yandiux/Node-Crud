const tasks = 
[
    {
        id: 1,
        title: "limpieza cocina",
        description: "limpiar a fondo horno, nevera y ollas",
        deadlineday: "29 de julio", 
        tools: "esponja, cepillo, jabon",
        finish: false

    },
    {
        id: 2,
        title: "hacer la compra",
        description: "ir al supermercado a comprar comida para la semana",
        deadlineday: "2 de agosto", 
        tools: "bolsa ecologica",
        finish: false
    },
    {
        id: 3,
        title: "cambio aceite",
        description: "llevar al mecanico a cambiar el aceite y filtro del auto ",
        deadlineday: "25 de julio", 
        tools: "",
        finish: false
    },
    {   
        id: 4,
        title: "proyecto academlo",
        description: "realizar el primer proyecto del modulo de Node sobre un To Do",
        deadlineday: "25 de julio", 
        tools: "visual studio code",
        finish: false
    },{
        id: 5,
        title: "",
        description: "",
        deadlineday: "", 
        tools: "", 
         finish: false
    },
]

const getAllTask = () => {
    return tasks
}

const getTaskById = (id) => {
    const filteredTaks = tasks.filter((task) => task.id === id);
    return filteredTaks[0];
  };

  const createTask = (userObj) => {
    if (tasks.length === 0) {
      const newTask = {
        id: 1,
        title: userObj.title,
        description: userObj.description,
        deadlineday: userObj.deadlineday,
        tools: userObj.tools
      
      };
      tasks.push(newTask);
      return newTask;
    }
    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: userObj.title,
      description: userObj.description,
      deadlineday: userObj.deadlineday,
      tools: userObj.tools,
    };
    tasks.push(newTask);
      return newTask;
  };

  const deleteTask = (id) => {
    const index = tasks.findIndex((item) => item.id === id);
    tasks.splice(index, 1)
    return
  }
  
  const putTask = (id, data) => {
  const index = tasks.findIndex((item) => item.id === id);

  if (data.finish !== undefined) {
    tasks[index] = {
      id,
      title: tasks[index].title,
      description: tasks[index].description,
      deadlineday: tasks[index].deadlineday,
      tools: tasks[index].tools,
      finish: data.finish
    };
    return tasks[index]
  } 
 
}
// const updateTodoItem = (id, data) => {
//   const index = todoDB.findIndex((item) => item.id === id);
//   if (data.completed !== undefined) {
//     todoDB[index] = {
//       id,
//       title: todoDB[index].title,
//       description: todoDB[index].description,
//       completed: data.completed
//     };
//     return todoDB[index]
//   }
// }
  module.exports = {
    getAllTask,
    getTaskById,
    createTask,
    deleteTask,
    putTask
  }