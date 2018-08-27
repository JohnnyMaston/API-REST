var UsersCtrl = require('../controllers/controllers');
function routes(router) {

// API routes for acces REST protocols
router.route('/Users')
  .get(UsersCtrl.findAllUsers)
  .post(UsersCtrl.addUsers);

router.route ('/Users/:id')
  .get(UsersCtrl.findById)
  .put(UsersCtrl.updateUsers)
  .delete(UsersCtrl.deleteUsers);

  //other route 
  /*
router .route ('/Admin')
  .get(UsersCtrl.findAllUsers)
*/
}

exports.routes = routes;
