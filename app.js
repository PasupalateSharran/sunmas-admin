const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const helmet = require('helmet');
const flash = require('express-flash');
const session = require('express-session');

// Include Routes here 
const aboutusRoutes = require('./routes/aboutus.js');
const contactRoutes = require('./routes/contact.js');
const generalindustriesRoutes = require('./routes/generalindustries.js');
const indexRoutes = require('./routes/index.js');
const oilandgasRoutes = require('./routes/oilandgas.js');
const ourbusinessRoutes = require('./routes/ourbusiness.js');
const projectRoutes = require('./routes/project.js');
const wastewatertreatmentRoutes = require('./routes/wastewatertreatment.js');
const adminRoutes = require('./routes/admin.js');
const authRoutes = require('./routes/auth.js');

// Initialisation
dotenv.config(); 
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the directory for views
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded 
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         imgSrc: ["'self'", "http://localhost:3000"],
//         // Add other directives as needed
//       },
//     },
//   })
// );
app.use(session({
  secret: 'your_secret_key',  // Replace with your secret key
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: null // Session cookie will expire when the browser is closed
  }
}));
app.use(flash());// Initialize express-flash after session middleware
app.use(express.static(path.join(__dirname, 'public')));// Serve static files from the 'public' directory

// Routing Starts Here
app.use('/', indexRoutes);
app.use('/aboutus', aboutusRoutes);
app.use('/contact', contactRoutes);
app.use('/genralindustries', generalindustriesRoutes);
app.use('/index', indexRoutes);
app.use('/oilandgas', oilandgasRoutes);
app.use('/ourbusiness', ourbusinessRoutes);
app.use('/project', projectRoutes);
app.use('/wastewatertreatment', wastewatertreatmentRoutes);
app.use('/admin', adminRoutes);
app.use('/login', authRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
