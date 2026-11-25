const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const candidates = [
  path.join(__dirname, "dist", "mi-primera-app", "browser"),
  path.join(__dirname, "dist", "mi-primera-app")
];
const webRoot = candidates.find((folder) => fs.existsSync(path.join(folder, "index.html")));

if (!webRoot) {
  console.error("No se encontró el build. Ejecuta primero: npm run build");
  process.exit(1);
}

app.use(express.static(webRoot));
app.get("*", (_req, res) => {
  res.sendFile(path.join(webRoot, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Aplicación disponible en el puerto ${port}`);
});
