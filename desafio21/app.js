import { format, green, bgWhite, serve, Application, denon } from "./deps.js";

const app = new Application();
app.use((ctx) => {
ctx.response.body = "Hola Mundo!";
});
console.log("Servidor Oak escuchando en el puerto 8080");
await app.listen({ port: 8080 });


serve(() => new Response("Hello World\n"));
console.log("http://localhost:8000/");
const currentTime = new Date()
console.log("currentTime", currentTime)
console.log(bgWhite(green(format(currentTime, "yyyy"))))