import express from "express";
const app = express();
const PORT = 3000;
// Configura o EJS como motor de views
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views"); 

//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))


app.get("/", (req, res) => {

  res.render("index");
});

app.get("/camisa", (req, res) => {

  res.render("camisa");
});

app.get("/bermuda", (req, res) => {

  res.render("bermuda");
});

app.get("/fale", (req, res) => {

  res.render("fale");
});

app.post("/fale", (req, res) => {
  //pego o que veio do form
  console.log(req)
  const nome = req.body.txtNome;
  const assunto = req.body.txtAssunto;
  const msg = req.body.txtMsg

  res.render("faleok", {nome, assunto, msg})
});

app.get("/bermuda/:prod", (req, res) => {
  let nome,preco,tamanhos;
  const prod = req.params.prod;
  if (prod==="pokemon") {
    nome = "Pokemon"
    preco = "R$ 60,00"
    tamanhos = "P M G"
  } else if(prod==="barbie"){
    nome = "Barbie"
    preco = "R$ 70,00"
    tamanhos = "P M G"
  }
  res.render("bermudadetalhe", {nome,preco,tamanhos});
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
