module.exports = function(plop) {

    plop.setGenerator("mvc", {
        description: "creates scaffolding for related model, view, and controller.",
        prompts: [
            { type: "input", name: "name", message: "MVC name please" }
        ],
        actions: [
            {
                type: "add",
                path: "Controllers/{{name}}Controller.cs",
                templateFile: "templates/controllers/controller.txt"
            },
            {
                type: "add",
                path: "Models/{{name}}Model.cs",
                templateFile: "templates/models/model.txt"
            },
            {
                type: "add",
                path: "Views/{{name}}.cs",
                templateFile: "templates/views/view.txt"
            }
        ]
    });

    plop.setGenerator("controller", {
        description: "creates scaffolding for an MVC controller",
        prompts: [
            { type: "input", name: "name", message: "controller name please" }
        ],
        actions: [
            {
                type: "add",
                path: "Controllers/{{name}}Controller.cs",
                templateFile: "templates/controllers/controller.txt"
            },
        ]
    });

    plop.setGenerator("model", {
        description: "creates scaffolding for an MVC model",
        prompts: [
            { type: "input", name: "name", message: "model name please" }
        ],
        actions: [
            {
                type: "add",
                path: "Models/{{name}}Model.cs",
                templateFile: "templates/models/model.txt"
            },
        ]
    });

    plop.setGenerator("view", {
        description: "creates scaffolding for an MVC view",
        prompts: [
            { type: "input", name: "name", message: "view name please" }
        ],
        actions: [
            {
                type: "add",
                path: "Views/{{name}}.cshtml",
                templateFile: "templates/views/view.txt"
            },
        ]
    });

};