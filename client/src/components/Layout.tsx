import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import * as productService from '@/services/product.service';

function Layout() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await productService.getProducts();
      setProducts(response.data);
    } catch (err) {
      setError('Error fetching products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (productData) => {
    try {
      if (editingProduct && editingProduct._id) {
        await productService.updateProduct(editingProduct._id, productData);
        setEditingProduct(null);
      } else {
        await productService.createProduct(productData);
      }
      fetchProducts();
    } catch (err) {
      setError('Error saving product');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await productService.deleteProduct(id);
      fetchProducts();
    } catch (err) {
      setError('Error deleting product');
      console.error(err);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          📦 Product Management
        </h1>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center mb-6">
            <p className="text-lg text-gray-700">Loading...</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {editingProduct ? 'Edit Product' : 'Add Product'}
              </h2>
              <ProductForm
                onSubmit={handleSubmit}
                initialProduct={editingProduct}
              />
              {editingProduct && (
                <button
                  onClick={() => setEditingProduct(null)}
                  className="w-full mt-4 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
            <ProductList
              products={products}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
