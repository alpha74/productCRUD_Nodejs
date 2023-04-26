const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
	{
		productId : {
			type: Number,
			unique: true,
			required: [true, "Please enter productId"]
		},
		name: {
			type: String,
			required: [true, "Please enter product name"]
		},
		quantity: {
			type: Number,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		image: {
			type: String,
			required: false
		}
	},
	{
		timestamps: true
	}
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
