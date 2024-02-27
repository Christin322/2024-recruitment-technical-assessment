import logo from './unilectives.svg';
import {
  BookOpenIcon,
  ShieldCheckIcon,
  BarsArrowDownIcon,
  UserCircleIcon,
  MoonIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline';
const NavBar = () => {
  return (
    <div className="bg-neutral-100 min-h-screen flex flex flex-col justify-between w-20 content-center flex-wrap p-8">
      <div className="w-6 flex flex-col gap-8">
        <img src={logo} alt="Logo" className="object-contain" />
        <hr className="bg-neutral-400"></hr>
        <BookOpenIcon className="text-black" />
        <ShieldCheckIcon className="text-black" />
      </div>
      <div className="w-6 flex flex-col gap-8">
        <BarsArrowDownIcon className="text-black" />
        <UserCircleIcon className="text-black" />
        <MoonIcon className="text-black" />
        <ArrowRightEndOnRectangleIcon className="text-black" />
      </div>
    </div>
  );
};

export default NavBar;
