import { useState } from 'react';
import { Header, Nav } from './App.styled';
import Login from './components/Login/Login';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import FaqPage from './pages/FaqPage/FaqPage';
import { GlobalStyle } from './GlobalStyle.styled';

const App = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('adminUser');
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setUser(null);
  };

  return (
    <>
      <GlobalStyle />

      {!user 
        ? <Login onLogin={setUser} /> 
        : <div>
            <Header className='container'>
              <h1>FoodTime Admin Panel</h1>
              <div>
                <span style={{ marginRight: '15px' }}>{user.name}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </Header>

            <Nav className='container'>
              <button
                className={activeTab === 'products' ? 'active' : ''}
                onClick={() => setActiveTab('products')}
              >
                Products
              </button>
              <button
                className={activeTab === 'faq' ? 'active' : ''}
                onClick={() => setActiveTab('faq')}
              >
                FAQ
              </button>
            </Nav>

            {activeTab === 'products' && <ProductsPage />}
            {activeTab === 'faq' && <FaqPage />}
          </div>
      }      
    </>
  );
};

export default App;
