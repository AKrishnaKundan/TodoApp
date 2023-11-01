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
      <div className="flex justify-center items-center bg-yellow-300 min-h-screen overflow-scroll">
        <div className='outline outline-white outline-offset-8 bg-white sm:p-10 p-5'>
            <span className="sm:text-5xl  text-3xl font-bold sm:mt-5  mt-3">TODO</span>
            <div className="sm:text-5xl text-3xl font-bold text-yellow-500 sm:mb-5 mb-3">LIST</div>
            <AddTodo/>
        </div>
      </div>
    </Provider>
    </>
  );
}

export default App;
