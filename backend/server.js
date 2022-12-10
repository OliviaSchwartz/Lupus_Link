const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const SymptomTrackerRouter = require('./routes/SymptomTrackerRouter')
const TopicBoardRouter = require('./routes/TopicBoardRouter')
const CommentRouter = require('./routes/CommentRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/tracker', SymptomTrackerRouter)
app.use('/topics', TopicBoardRouter)
app.use('/comments', CommentRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
