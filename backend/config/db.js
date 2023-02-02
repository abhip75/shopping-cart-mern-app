const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://user123:user123@cluster0.yjpzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async() => {
	//console.log('->', process.env.MONGO_URI);
	try {
		const conn = await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log(`Mongo DB is connected!!! ${conn.connection.host} `);
	} catch(error) {
		console.error('Mongo DB connection Failed', error);
		process.exit(1);
	}
}

module.exports = connectDB;