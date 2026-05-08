import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <Outlet />
      </div>
    </>
  );
}
