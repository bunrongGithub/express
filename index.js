const express = require('express');

const app = express();
function middleware(req,res,next){
    const id = parseInt(req.params.id, 10); // Convert the id to a number

    if (id !== 1) {
        res.send("Can't open!");
    } else {
        next()
    }
}
app.get("/:id",middleware, (req, res) => {
   res.send("hello")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;