import { Provider, useDispatch } from 'react-redux';

import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import {store} from './store';
import { markAllAsFinished } from './features/todoSlice';

function App() {


  const finishedAll = ()=>{
    //dispatch(markAllAsFinished());
  }

  return (
    <>
    <Provider store = {store}>
      <div className="flex justify-center items-center bg-yellow-300 h-screen">
        <div className='outline outline-white outline-offset-8 bg-white p-10'>
            <span className="text-5xl font-bold mt-5">TODO</span>
            <div className="text-5xl font-bold text-yellow-500 mb-5">LIST</div>
            <AddTodo/>
        </div>
      </div>
    </Provider>
    </>
  );
}

export default App;
