const express = require('express')

const router = express.Router();

const data = [];
let username="";

router.get('/',(req,res,next)=>{

     res.send(
        '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" method="POST"><input id="username" type="text" name="title"><button type="submit">add</button></form>')
})


router.post('/',(req,res,next)=>{
     console.log(req.body)
       username=req.body.title
     res.redirect('/chat')
})


router.get("/chat", (req, res) => {
     console.log(username + " is good y")
     // Check if a user is logged in
     
         res.write(`<h1>Welcome, ${username}!</h1>`);
 
         // Display chat messages
         res.write('<div>');
         data.forEach(message => {
             res.write(`<p>${message.username}: ${message.text}</p>`);
         });
         res.write('</div>');
 
         // Chat input form
         res.write(`<form action="/chat" method="POST">
         <input type="text" name="message" placeholder="Type your message"></input>
         <button type="submit">Send</button>
     </form>`
);
 
 
 res.end();
 }  );

 // Handle chat form submissions
router.post('/chat', (req, res) => {
     const message = req.body.message;
     
     // Add the chat message to the array
     data.push({ username, text: message });
     
     // Redirect back to the chat page
     res.redirect('/chat');
     });

module.exports = router;
 


