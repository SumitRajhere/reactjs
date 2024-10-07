const header = React.createElement(
  "h1",
  { id: "heading", xyz: "abe" },
  "hello wecome to react APP"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(header);

const parent = React.createElement(
  "div",
  { id: "parent" },
[  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "Gson" },
        "i am header "
    ),React.createElement("h2", { id: "Gson1" },
        "i am header 2"
    )]
  ),
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "Gson" },
        "i am header "
    ),React.createElement("h2", { id: "Gson1" },
        "i am header 2"
    )]
  )]
);
console.log(parent)
root.render(parent);