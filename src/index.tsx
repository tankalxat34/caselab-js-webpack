import { createRoot } from "react-dom/client";
import { App } from "./App";

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}


const domNode = document.querySelector("#root");
if (domNode) {
    const root = createRoot(domNode)
    root.render(<App />)
} else {
    console.error("Root node is null")
}