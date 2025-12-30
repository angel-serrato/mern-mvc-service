import ProductItem from './ProductItem';

function ProductList({ products, onDelete, onEdit }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">No products found</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Products List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id}>
            <ProductItem
              product={product}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
