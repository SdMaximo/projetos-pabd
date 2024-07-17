let express = require("express");
let db = require("../utils/db");
const { createLanguageService } = require("typescript");
let router = express.Router();

// Rota principal usando a view index.ejs
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Procópio na Rede' });
// });

// router.get('/sobre', function(req, res,) {
//   res.send('<h2>Sobre Rotas...</h2>');
// });

// router.get('/ola/:nome', function(req, res,) {
//   res.send("<h2>Olá, " + req.params.nome + "</h2>");
// });

// router.get('/imc', function(req, res,) {
//   let peso = req.query.peso;
//   let estatura = req.query.estatura;
// // Variável peso e estatura

//   let imc = peso / Math.pow(estatura, 2);
//   let msg = '<h3>Seu IMC é: ' + imc.toFixed(2) + '</h3>'
//   res.send(msg)
// });

// let autores = ['Adenilson', 'Máximo'];
// router.use(express.urlencoded({extended: true}));

// router.get ('/autores', function(req, res) {
//     res.json(autores)
// });

// router.get('/autores/consulta/:id', function(req, res){
//   let id = req.params.id;
//   res.json(autores[id])
// });

// router.post('/autores/inclui', function(req, res){
//   let nome = req.body.nome;
//   autores.push(nome);
//   res.json(autores);
// });

// router.put('/autores/altera/:id', function(req, res){
//   let id = req.params.id;
//   let nome = req.body.nome;

//   autores[id] = nome;
//   res.json(autores);
// });

// router.delete('/autores/exclui/:id', function(req, res){
//   let id = req.params.id;

//   autores.splice(id,1);
//   res.json(autores);
// });

router.get("/listar", function (req, res) {
  let cmd = "SELECT tbautor.IdAutor, tbautor.NoAutor, tbnacionalidade.NoNacionalidade";
  cmd += " FROM tbautor INNER JOIN tbnacionalidade ";
  cmd += "  ON tbautor.IdNacionalidade = tbnacionalidade.IdNacionalidade";
  cmd += " ORDER BY NoNacionalidade";
  db.query(cmd, [], function (erro, listagem) {
    if (erro) {
      res.send(erro);
    }
    res.render("autores-lista", { resultado: listagem });
  });
});

router.get("/add", function (req, res) {
  res.render("autores-add",{resultado: {}});
});

router.post("/add", function (req, res) {
  let nome = req.body.nome;
  let nacionalidade = req.body.nacionalidade;
  let cmd = "INSERT INTO tbautor(NoAutor, IdNacionalidade) VALUES (?,?);";
  db.query(cmd, [nome, nacionalidade], function (erro, listagem) {
    if (erro) {
      res.send(erro);
    }
    res.redirect("/autores/listar");
  });
});

router.get('/edit/:id', function (req, res) {
  let id = req.params.id;

  let cmd = "SELECT tbautor.IdAutor, tbautor.NoAutor, tbautor.IdNacionalidade FROM tbautor WHERE IdAutor = ?;";
  db.query(cmd, [id], function (erro, listagem) {
    if (erro) {
      res.send(erro);
    }
    res.render('autores-add', { resultado: listagem[0]});
  });
});


router.put('/edit/:id', function (req, res) {
  let id            = req.params.id;
  let nome          = req.body.nome;
  let nacionalidade = req.body.nacionalidade;
  let cmd = 'UPDATE tbautor SET NoAutor =?, IdNacionalidade = ?  WHERE IdAutor = ?;';
  db.query(cmd, [nome, nacionalidade, id], function (erro, listagem) {
    if (erro) {
      res.send(erro);
    }
    res.redirect(304, "/autores/listar");
  });
});


router.put('/delete/:id', function (req, res) {
  let cmd = 'DELETE FROM  tbautor WHERE IdAutor = ?;';
  db.query(cmd, [id], function (erro, listagem) {
    if (erro) {
      res.send(erro);
    }
    res.redirect(304, "/autores/listar");
  });
});


module.exports = router;
