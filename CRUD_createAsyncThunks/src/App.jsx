import './App.css'
import  {useDispatch, useSelector } from "react-redux"
import { fetchTodos } from './redux/slice/todo';
function App() {

const dispatch = useDispatch();
const state = useSelector(state => state);

console.log("state",state);

if(state.todo.isLoading){
  return <h1>Loading ...</h1>
}


  return (
 <>
<button onClick={()=>dispatch(fetchTodos())}>Fetch data </button>
 {
  state.todo.data && state.todo.data.map(data=>(
    <li>{data.title}</li>
  ))
 }
 
 {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
 </>
  )
}

export default App
