import express from 'express'
import router from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

const port = 4444

app.listen(process.env.PORT || port, () => {
  console.log(`Server started in port ${port}`)
})
