
import './App.css';
import Header from './components/Header';
import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },]
    }
  }

  componentDidMount() {
    // json placeholder service
 /*   fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          todos: json
        })

      })*/
  }

  addTask = (value) => {
    let todo = {
      id: 1,
      title: value,
      done: false
    }
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({
      todos: todos
    })
  }

  onDeleteTask = (id) => {
    let todos = this.state.todos;
    let index = todos.findIndex(todo => todo.id == id)
    //splice -> an der Stelle Index bitte ein Element löschen
    todos.splice(index, 1);

    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <TodoAdder onTaskAdded={this.addTask} />
        <TodoList todos={this.state.todos} onDelete={this.onDeleteTask} />
      </div>
    );
  }
}

export default App;


