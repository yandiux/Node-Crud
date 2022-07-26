const { getAllTask, createTask, getTaskById, deleteTask, putTask } = require("./task.controller")

const getAll =  (req, res) => {
    const data = getAllTask()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    const dat = req.body

    if(id){
        const data = getTaskById(id)
        if(data.id){
            res.status(200).json(data)
        }else {
            res.status(400).json({message: 'Invalid Task'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const postById = (req, res) => {
    const pos = createTask(req.body)
    res.status(201).json()
    }

    const deleteById = (req, res) => {
        
        const id = Number(req.params.id)
        deleteTask(id)
        res.status(204).json({message: "Deleted successfully!!!"})}


    const putById = (req, res) => {
        const id = Number(req.params.id)
        const data = req.body
        if(id){
            const dataI = putTask(id, data)
            if(dataI){
                res.status(200).json(dataI)
            }else{
                res.status(406).json({message: "invalid ID"})
            }
        }else{
            res.status(400).json({message: "invalid Task"})
        }
        
    }

    
module.exports = {
    getAll,
    getById,
    postById,
    deleteById,
    putById
}
