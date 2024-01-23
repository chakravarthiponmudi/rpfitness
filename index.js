//import app
const app = require('./app')
const PORT = process.env.PORT || 5001

/* import the routes */
const register = require('./routes/login')

register(app)
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
