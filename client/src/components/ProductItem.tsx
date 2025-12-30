function ProductItem({ product, onDelete, onEdit }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-lg font-semibold mb-4">
        Price: ${product.price.toFixed(2)}
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(product)}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product._id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
