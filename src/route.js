const Midterm = require('./controllers/Midterm function')
const UserController = require('./controllers/UserController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user', UserController.put)
    
    app.delete('/user', UserController.remove)
    
    app.get('/user', UserController.show)
    
    app.get('/users', UserController.index)

    app.post('/add1', Midterm.add1)

    app.post('/que1', Midterm.que1)

    app.post('/que2', Midterm.que2)
   

}