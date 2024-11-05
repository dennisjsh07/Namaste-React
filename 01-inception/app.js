/**
 * <div id='parent'>
 *     <div id='child'>
 *          <h1>hi im a h1 tag</h1>
 *          <h2>hi im a h2 tag</h2>
 *     </div>
 *     <div id='child2'>
 *          <h1>hi im a h1 tag</h1>
 *          <h2>hi im a h2 tag</h2>
 *     </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi im an h1 tag"),
    React.createElement("h2", {}, "hi im an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi im an h1 tag"),
    React.createElement("h2", {}, "hi im an h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world form react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
