import app from "./app";

const port = 3000;
app.listen(app.get('port'));
console.log("Server listening in port 3000");