let express = require('express');
let db = require('../utils/db')
let router = express.Router();

// Rota principal usando a view index.ejs
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Procópio na Rede' });
});


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

// router.get('/autores/listar', function(req, res){
//   let cmd = 'SELECT tbautor.IdAutor, tbautor.NoAutor, tbnacionalidade.NoNacionalidade';
//       cmd += ' FROM tbautor INNER JOIN tbnacionalidade ';
//       cmd += '  ON tbautor.IdNacionalidade = tbnacionalidade.IdNacionalidade';
//       cmd += ' ORDER BY NoAutor';
//   db.query(cmd, [], function(erro, listagem){
//     if (erro){
//       res.send(erro);
//     }
//     res.render('autores-lista', {resultado: listagem});
//   });
// });

// router.get('/autores/add', function(req, res){
 
//     res.render('autores-add');
//   });



module.exports = router;
