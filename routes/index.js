var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

//Credits page.
router.get('/credits', (req, res, next) => {
  res.render('credits');
});

// quizzes page.
router.get('/quizzes', function(req, res, next) {
    sequelize.models.quiz.findAll().
    then( quizzes => {
        res.render('quizzes', {quizzes});
    })
        .catch(Sequelize.ValidationError, error => {

        })
        .catch(error => {
        });
});


module.exports = router;
