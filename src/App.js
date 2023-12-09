import './App.css';
import Input from './components/Input';
import List from './components/List';

function App() {
  return (
    <div id="App">
      <div id='container'>
        <h1 id='bigTitle'>Todo List</h1>
        <Input />
        <List />
      </div>
      <a href='https://github.com/AnhBigBrother/todo-list' target='_blank'>by Tien_Anh_Tran</a>
    </div>
  );
}

export default App;
