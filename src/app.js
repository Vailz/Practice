const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

require("./db/conn")
const Register = require("./models/registers")

const port = process.env.PORT || 3000

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/index", (req, res) => {
    res.render("index")
})

app.get("/settings", (req, res) => {
    res.render("settings")
})

// Registration and Login
app.post("/settings", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        const emailReg = req.body.Email;
const useremail2 = await Register.findOne({email:emailReg})

if(await Register.findOne({email:emailReg}))
{
    res.send("Такой пользователь уже зарегистрирован")
}
else {
    const registerUser = new Register({
        email: req.body.Email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    })
    
    const registered = await registerUser.save();
    res.status(201).render("settings");
}

    } 
    catch (error) {
        const emailLogin = req.body.emailLogin
        const passwordLogin = req.body.passwordLogin
        
        const useremail = await Register.findOne({email:emailLogin})
        
        try {
            if (useremail.password === passwordLogin) {
            res.status(201).render("settings")
        } else {
            res.send("Пароль неверный")
        }}
        catch (error2){
            res.status(400).send("Такой пользователь не зарегистрирован")
        }
}
})

            // if(password === cpassword) {
            //     const registerUser = new Register({
            //         email: req.body.Email,
            //         password: req.body.password,
            //         confirmpassword: req.body.confirmpassword
            //     })
                
            //     const registered = await registerUser.save();
            //     res.status(201).render("settings");
            // } 
            // else {
            //     res.send("Пароли не совпадают")
            // }

// Login
// app.post("/settings", async (req, res) => {
//     try {
//         const emailLogin = req.body.emailLogin
//         const passwordLogin = req.body.passwordLogin
        
//         const useremail = await Register.findOne({email:emailLogin})
        
//         if (useremail.password === passwordLogin) {
//             res.status(201).render("settings")
//         } else {
//             res.send("Пароль неверный")
//         }
//     } catch (error) {
//         res.status(400).send("Пользователь не зарегистрирован")
//     }
// })

app.listen(port, () => {
    console.log(`server is running on port number ${port}`)
})