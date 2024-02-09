import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import FunPage from './pages/FunPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import GridLayoutPage from './pages/GridLayoutPage';
import {
  ABOUT_ME_PAGE,
  CONTACT_PAGE,
  FUN_PAGE,
  LANDING_PAGE,
  PROJECTS_PAGE,
  RESUME_PAGE,
} from './globals/constants.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<GridLayoutPage />}>
      <Route path={LANDING_PAGE} element={<LandingPage />} />
      <Route path={ABOUT_ME_PAGE} element={<AboutMePage />} />
      <Route path={CONTACT_PAGE} element={<ContactPage />} />
      <Route path={FUN_PAGE} element={<FunPage />} />
      <Route path={PROJECTS_PAGE} element={<ProjectsPage />} />
      <Route path={RESUME_PAGE} element={<ResumePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
