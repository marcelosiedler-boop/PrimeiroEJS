import express from "express";
const app = express();
const PORT = 3000;
// Configura o EJS como motor de views
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views"); 

app.get("/", (req, res) => {

  res.render("index", {"turma":"5info", "ranking":2});
});

app.get("/outro/:texto", (req, res) => {
  const texto = req.params.texto
  res.render("outro", {"texto":texto});
  
  //quando é variáveil pode passar sem a chave
  //res.render("outro", {texto});
});

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
