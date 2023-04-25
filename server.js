const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())


const Product = require('./models/productModel')



// Routes

// GET server status
app.get('/', (req, res) => {
  res.send('Hello');
});


// Get single product
app.get('/products/:id', async (req, res) => {
	try {
		const {id} = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product)
	} catch(error) {
		res.status(500).json({message: error.message})
	}
});


// Get all products
app.get('/products', async (req, res) => {
	try {
		const products = await Product.find({})
		res.status(200).json(products)
	} catch(error) {
		res.status(500).json({message: error.message})
	}
});


// Save new Product
app.post('/products', async (req, res) => {
	try {
		const product = await Product.create(req.body)
		
		res.status(200).json(product);
	} catch(error) {
		res.status(500).json({message: error.message})
	}
});


// Update product
app.put('/products/:id', async (req, res) => {
	try {
		const {id} = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body)
		
		// When product is not found
		if(!product)
			return res.status(404).json({message: `Cannot find product with ID: ${id}`})
		
		const updatedProduct = await Product.findById(id);  
		
		res.status(200).json(updatedProduct)
	} catch(error) {
		res.status(500).json({message: error.message})
	}
})


// Delete Product
app.delete('/products/:id', async(req, res) => {
	try {
		const {id} = req.params
		const product = await Product.findByIdAndDelete(id)
		
		// If product does not exist
		if(!product) 
			return res.status(404).json({message: `Cannot find product with ID: ${id}`})
		
		res.status(200).json(product) 
		
	} catch(error) {
		res.status(500).json({message: error.message})
	}
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

mongoose.connect("mongodb+srv://admin:Cluster0Password@cluster0.3acfsnv.mongodb.net/crud-api?retryWrites=true&w=majority")
.then(() => {
		console.log('Connected to MongoDB')
}).catch((error) => {
	console.log('Error: ', error)
});
