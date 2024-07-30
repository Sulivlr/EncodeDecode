const express = require('express');


const app = express();
const port = 8000;

app.get('/:echo', (req, res) => {
    const echo = req.params.echo
    res.send(echo);
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
})



