import express from 'express';
import bodyParser from 'body-parser';
import { userRoute } from './api/routes/userRoute';
import { generateFakeUsers } from './api/fixtures/user';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI,
  { useMongoClient: true }
);

// BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Cross origins
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Routes
userRoute(app);

// allow access to public folder
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node & Express servers are running on port ${PORT} !`)
);

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT} !`);
    //generateFakeUsers();
});