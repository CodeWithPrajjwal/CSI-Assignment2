import TodoApp from './components/Todo-App/TodoApp';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <p style={{'textAlign':'center'}}>CLick on '+' icon to add notes. <span style={{"fontStyle":"italic", fontWeight:"bold"}}>App Uses Local Storage</span></p>
      <TodoApp/>
    </div>
  );
}

export default App;
