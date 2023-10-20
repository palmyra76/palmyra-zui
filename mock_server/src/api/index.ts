import express from 'express';

const router = express.Router();

router.get('/services', (req, res) => {
  res.redirect('menu.json')
});

router.get('/services/:serviceName', (req,res) =>{
  console.log(req.query);
  var action:any = req.query.action;
  if(action == 'getResponseSchema'){
    res.redirect('queryResponse.json');
  }else{
    res.sendStatus(404);
  }
})

export default router;