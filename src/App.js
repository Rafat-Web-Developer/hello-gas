import './App.css';
import Header from './components/Header/Header';
import QuestionAndAns from './components/QuestionAndAns/QuestionAndAns';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Shop></Shop>
      <QuestionAndAns></QuestionAndAns>
    </div>
  );
}

export default App;
