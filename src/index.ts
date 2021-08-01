import app from "./app";

// Import the app from app.ts
app.listen(app.get('port'));
console.log("Server listening in port 3000");
