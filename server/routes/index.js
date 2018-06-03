//const userRoutes = require('./UserRoutes');
import userRoutes from "./UserRoutes";

function initRoutes(app) {
  app.use('/user', userRoutes);
  // app.use('/post', postRoutes);
}

export default initRoutes;

//module.exports = initRoutes;
