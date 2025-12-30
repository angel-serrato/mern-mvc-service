import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-white">MERN Product Store</h1>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
