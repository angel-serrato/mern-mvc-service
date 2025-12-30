import { useState, useEffect } from 'react';

function ProductForm({ onSubmit, initialProduct }) {
  const [formData, setFormData] = useState(
    initialProduct || { name: '', price: 0 }
  );

  useEffect(() => {
    if (initialProduct) {
      setFormData(initialProduct);
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.price > 0) {
      onSubmit(formData);
      setFormData({ name: '', price: 0 });
    } else {
      alert('Please fill in all fields with valid data');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Product Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="price"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          step="0.01"
          min="0"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
      >
        {initialProduct && initialProduct._id
          ? 'Update Product'
          : 'Create Product'}
      </button>
    </form>
  );
}

export default ProductForm;
