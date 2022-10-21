const { Router } = require('express')
const { events, tasks } = require('../controllers')
const router = Router()

//event routes
router.get('/events', events.getAllEvents)
router.get('/events/:id', events.getOneEvent)
router.post('/events', events.createEvent)
router.put('/events/:id', events.updateEvent)
router.delete('/events:id', events.deleteEvent)

//task routes
router.get('/tasks', tasks.getAllTasks)
router.get('/tasks/:id', tasks.getOneTask)

module.exports = router
