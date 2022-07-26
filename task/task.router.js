const router = require('express').Router()
const httpTask = require("./taks.http")

router.route('/tasks')
    .get(httpTask.getAll)
    .post(httpTask.postById)

router.route('/tasks/:id')
    .get(httpTask.getById)
    .put(httpTask.putById)
    .delete(httpTask.deleteById)


module.exports = {
    router
}
