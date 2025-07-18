import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Rama" age={20} bio="Aspiring software engineer and creative mind." />
      <Footer />
    </div>
  );
}

export default App;
