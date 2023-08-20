// PATHS IMPORT
import AppS from './Pages/Public/App.js'

// IMPORTS FOR WEBSITE DESIGN
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import App from './Pages/Public/App.js';




function Router() {



return (
    <>
        <BrowserRouter basename='/'>
            {/* REACT ROUTER ROUTES */}
            <Routes>
                {/* PUBLIC PAGES */}
                    <Route path='/' element={<App />}/>
            </Routes>
        </BrowserRouter>
    </>
)};

export default Router;
