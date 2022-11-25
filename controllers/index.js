
const User = require('../model/user');

module.exports.giveResponse = (req, res) => {
    return res.render('index', {
        "name": "Coding nInjas",
    })
}

module.exports.sayHello = (req, res) => {
    return res.send("Hello!");
}

module.exports.userInfo = (req, res) => {
    console.log("req.body", req.body);
    const { name, email } = req.body;
    return res.render('user', {
        title: "User", 
        name: name,
        email: email,
    })

}

module.exports.createUser = async (req, res) => {
    const {name, email, phoneNo, age, gender, address} = req.body;
    const newUser = await User.create({
        name: name,
        email: email,
        phoneNo: phoneNo,
        age: age,
        address: address,
        gender: gender,
    });
    console.log("newUser", newUser);
    return;
}

const contactList = [
    {
        name: "Sandeep",
        phoneNo: 12345678990,
    },
    {
        name: "abcd",
        phoneNo: 12345678990,
    },
    {
        name: "qwer",
        phoneNo: 12345678990,
    },
    {
        name: "poiu",
        phoneNo: 12345678990,
    }
]

module.exports.getList = (req, res) =>{
    return res.render('userList', {
        title:'User List',
        contactList: contactList,
    })
}

module.exports.addUser = (req, res) => {
    console.log('req.body', req.body);
    contactList.push({
        name: req.body.name,
        phoneNo: req.body.phoneNo
    });
    // return res.render('userlist', {
    //     title: "User list",
    //     contactList: contactList,
    // })

    return res.redirect('/user-list');
    

}

