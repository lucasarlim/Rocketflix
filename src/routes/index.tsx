import {
  Route,
  BrowserRouter,
  Routes as RoutesContainer,
} from 'react-router-dom';
import Home from '../pages/Home';

export function Routes(){
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route element={<Home />} path="/" />
      </RoutesContainer>
    </BrowserRouter>
  )
}