import { format, green, bgWhite, Application } from "./deps.js";
import { router } from "./src/routes/user.routes.js";

const app = new Application();
/*const app = new Application();
app.use(router.routes())*/
console.log("Servidor Oak escuchando en el puerto 8080");
app.use(router.routes());
await app.listen({ port: 8080 });

//app.listen({ port: 8000 });
console.log(`Server on http://localhost:8000/`);


/*serve(() => new Response("Hello World\n"));
console.log("http://localhost:8000/");*/
const currentTime = new Date()
console.log("currentTime", currentTime)
console.log(bgWhite(green(format(currentTime, "yyyy"))))