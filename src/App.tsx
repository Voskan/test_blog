import Footer from './components/Footer';
import Header from './components/Header';
import { Home, Contact, Article, Articles, About } from './pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
