import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/Routes/Router';

function App() {
  return (
    <div className='bg-gray-100'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
