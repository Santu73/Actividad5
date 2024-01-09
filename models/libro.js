
const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/biblioteca');
}

const libroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, {collection: 'Libros'});

const libro = mongoose.model('libro', libroSchema);

module.exports = libro;