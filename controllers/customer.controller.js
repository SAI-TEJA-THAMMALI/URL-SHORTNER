const Customer = require("../models/customer.model.js");
const {v4: uuidv4} = require("uuid")
const {setUser}=require('../service/auth')
async function handleCustomerSignUp(req, res) {
    const { name, email, password } = req.body;

    try {
        const existingUser = await Customer.findOne({ email });
        if (existingUser) {
            return res.status(401).render("login", { msg: "User already present" });
        }

        await Customer.create({ name, email, password });
        console.log("New User Created");

        return res.render("home");  // response ends here

    } catch (err) {
        console.log("Signup error:", err);
        return res.status(500).send("Internal Server Error");
    }
}

async function handleCustomerLogin(req, res) {
    const { email, password } = req.body;

    try {
        const existingUser = await Customer.findOne({ email });
        if (!existingUser) {
            console.log('User Not Present')
            return res.status(401).render("signup", { msg: "User not present" });
        }
        
        const token=setUser(existingUser);
        res.cookie('uid',token)

        if (password === existingUser.password) {
            return res.render("home");
        }

        return res.status(401).render("login", { msg: "Wrong Password" });

    } catch (err) {
        console.log("Login error:", err);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = { handleCustomerLogin, handleCustomerSignUp };
