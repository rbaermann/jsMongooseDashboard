const controller = require("./controller");

module.exports = (app) => {
    app.get("/", controller.Index);
    app.get("/sardine/new", controller.Create);
    app.post("/sardine", controller.New);
    app.get("/sardine/destroy/:id", controller.Delete);
    app.get("/sardine/edit/:id", controller.Edit);
    app.get("/sardine/:id", controller.View);
    app.post("/sardine/:id", controller.Updating);
}