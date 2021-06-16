import db from '../config/database.js';

const create = async (req, res) => {

    const { product_name, quantity, price } = req.body;
    const { rows } = await db.query("INSERT INTO products(product_name, quantity, price) VALUES ($1,$2,$3)", [product_name, quantity, price]);
    res.status(201).send({
        message: "Product added successfully",
        body: {
            product: { product_name, quantity, price }
        },
    });
};

const listAll = async (req, res) => {
    const response = await db.query('select * from products order by products_name asc');
    res.status(200).send(response.rows);
};

const findById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM products WHERE productid = $1', [productId]);
    res.status(200).send(response.rows);
}

const update = async (req, res) => {
    const productId = parseInt(req.params.id);
    const { product_name, quantity, price } = req.body;

    const response = await db.query(
        "UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productId = $4",
        [product_name, quantity, price, productId]
    );

    res.status(200).send({ message: "Product Updated Successfully!" });
}


const deleteById = async (req, res) => {
    const productId = parseInt(req.params.id);
    await db.query('DELETE FROM products WHERE productId = $1', [
        productId
    ]);

    res.status(200).send({ message: 'Product deleted successfully!', productId });
}

export default {
    create,
    listAll,
    findById,
    update,
    deleteById
};