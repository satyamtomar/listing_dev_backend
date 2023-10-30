const express = require("express");
const router = express.Router();
const listController = require("../controllers/List.Controller");
    
//   router.route('/getUsers').post(checkAuth,appCreation.getAllUsers);

//   router.route('/getPortfolioData').post(appCreation.getAllPortfolio);
//   router.route('/addNewPortfolioData').post(checkAuth,appCreation.addNewPortfolio);
//   router.route('/getServices').get(appCreation.getAllServices);
  router.route('/addNewList').post(listController.addNewList);
//   router.route('/deletePortfolioData/:id').delete(checkAuth,appCreation.deletePortfolioData);
  router.route('/deleteList/:id').delete(listController.deleteList);
//   router.route('/updateService/:id').put(checkAuth,appCreation.updateService);
//   router.route('/getServiceDetails/:id').get(checkAuth,appCreation.getServiceDetails);
  
//   router.route('/updatePortfolio/:id').put(checkAuth,appCreation.updatePortfolio);
  router.route('/fetchLists').get(listController.getLists);
  


module.exports = router;