const App = () => {
  return React.createElement(
    "div",
    {},
    [React.createElement("h1", {}, "Hello"),
      React.createElement("h2", null , "world"),
    ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));