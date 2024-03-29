const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const ErrorHandler = require("./middlewares/ErrorHandler")
const userRouter = require("./routes/userRoute")
const authRouter = require("./routes/authRoute")
const offreRouter = require("./routes/offreRoute")
const categorieRoute = require("./routes/categorieRoute")
const candidatureRoute = require("./routes/candidatureRoute")
const entrepriseRoute = require("./routes/entrepriseRoute")
const articleRoute = require("./routes/articleRoute")
const newsletterRoute = require("./routes/newsletterRoute")
const contactRoute = require("./routes/contactRoute")
const faqRoute = require("./routes/faqRoute")

require("dotenv").config()
mongoose.set('strictQuery', false);

const index = express()
index.use(cors({
    origin: 'http://localhost:5173'
  }))
index.use(express.json())
index.use(express.urlencoded({ extended: true }))
index.use("/images",express.static('images'))
index.use("/fichiercv",express.static('fichiercv'))


index.use("/users", userRouter)
index.use("/auth", authRouter)
index.use("/offres", offreRouter)
index.use("/categories", categorieRoute)
index.use("/candidatures", candidatureRoute)
index.use("/entreprises", entrepriseRoute)
index.use("/articles", articleRoute)
index.use("/newsletter", newsletterRoute)
index.use("/contact", contactRoute)
index.use("/faq", faqRoute)
index.use("/*", (req, res) => {
  res.status(404).json("Not found!")
})
index.use(ErrorHandler)

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    index.listen(process.env.PORT, () => {
      console.log("the server is working")
    })
  })
  .catch((err) => console.log(err))