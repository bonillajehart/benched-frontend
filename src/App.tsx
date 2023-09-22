import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
} from '@material-tailwind/react';

import {
  ChartPieIcon,
  UserIcon,
  BeakerIcon,
  PresentationChartBarIcon,
  BookOpenIcon,
} from '@heroicons/react/20/solid';
import classNames from 'classnames';

import Dashboard from './pages/Dashboard';
import BenchMembers from './pages/BenchMembers';
import SynergyProjects from './pages/SynergyProjects';
import SharingOfExpertise from './pages/SharingOfExpertise';
import OnlineLearning from './pages/OnlineLearning';
import NotFound from './pages/NotFound';

const defaultNavStyles = {
  'hover:bg-codevRed': true,
  'focus:bg-codevRed': true,
  'active:bg-codevred': true,
  'hover:text-white': true,
  'focus:text-white': true,
  'active:text-white': true,
};

export const App = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <>
      {/* Side navigation */}
      <Drawer
        open
        overlay={false}
        transition={{ duration: 0 }}
        className="border-r-2"
      >
        <div className="mt-4 p-5">
          <div className="mb-6">
            <img src="images/codev-logo.svg" alt="" className="mb-2" />
            <img src="images/benched-logo.svg" alt="" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
                size="md"
              />
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  John Doe
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70"
                >
                  Admin
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <List className="p-5">
          <Link to="/">
            <ListItem
              className={classNames({
                ...defaultNavStyles,
                'text-white': ['/', '/dashboard'].includes(currentRoute),
                'bg-codevRed': ['/', '/dashboard'].includes(currentRoute),
              })}
            >
              <ListItemPrefix className="mr-[12px]">
                <ChartPieIcon className="w-6 h-6" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <Link to="/bench-members">
            <ListItem
              className={classNames({
                ...defaultNavStyles,
                'text-white': currentRoute === '/bench-members',
                'bg-codevRed': currentRoute === '/bench-members',
              })}
            >
              <ListItemPrefix className="mr-[12px]">
                <UserIcon className="w-6 h-6" />
              </ListItemPrefix>
              Bench Members
            </ListItem>
          </Link>
          <Link to="/synergy-projects">
            <ListItem
              className={classNames({
                ...defaultNavStyles,
                'text-white': currentRoute === '/synergy-projects',
                'bg-codevRed': currentRoute === '/synergy-projects',
              })}
            >
              <ListItemPrefix className="mr-[12px]">
                <BeakerIcon className="w-6 h-6" />
              </ListItemPrefix>
              Synergy Projects
            </ListItem>
          </Link>
          <Link to="/sharing-of-expertise">
            <ListItem
              className={classNames({
                ...defaultNavStyles,
                'text-white': currentRoute === '/sharing-of-expertise',
                'bg-codevRed': currentRoute === '/sharing-of-expertise',
              })}
            >
              <ListItemPrefix className="mr-[12px]">
                <PresentationChartBarIcon className="w-6 h-6" />
              </ListItemPrefix>
              Sharing of Expertise
            </ListItem>
          </Link>
          <Link to="/online-learnings">
            <ListItem
              className={classNames({
                ...defaultNavStyles,
                'text-white': currentRoute === '/online-learnings',
                'bg-codevRed': currentRoute === '/online-learnings',
              })}
            >
              <ListItemPrefix className="mr-[12px]">
                <BookOpenIcon className="w-6 h-6" />
              </ListItemPrefix>
              Online Learning
            </ListItem>
          </Link>
        </List>
      </Drawer>

      {/* Main Content */}
      <div className="ml-[330px] mr-10 mt-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bench-members" element={<BenchMembers />} />
          <Route path="/synergy-projects" element={<SynergyProjects />} />
          <Route
            path="/sharing-of-expertise"
            element={<SharingOfExpertise />}
          />
          <Route path="/online-learnings" element={<OnlineLearning />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export const WrappedApp = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default WrappedApp;
