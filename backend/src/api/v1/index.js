const { Router } = require('express');
const { projectName } = require('../../constants/project');

const router = Router();

const recipes = [
  {
    name: 'Taco',
  },
  {
    name: 'Pastasalat',
  },
  {
    name: 'Falafel m/ ris',
  },
];

router.get('/', (req, res) => {
  res.json({
    message: `Welcome to ${projectName} API! 🥗`,
  });
});

router.get('/recipes', (req, res) => {
  res.json({
    recipes,
  });
});

module.exports = router;
