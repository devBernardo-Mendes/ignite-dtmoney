import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import App from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return {
        id: 1,
        title: "transaction 1",
        amount: 400,
        type: "deposit",
        category: "food",
        create_at: new Date(),
      };
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
