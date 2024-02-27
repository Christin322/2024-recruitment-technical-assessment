import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className="outline h-10 flex flex justify-start w-full content-center p-2 outline-[#9cade9] outline-2 rounded mb-4">
      <MagnifyingGlassIcon className="text-[#9cade]" />
      <p className="text-base ml-6 text-[#9cade9]">
        Search for a course e.g. COMP1511
      </p>
    </div>
  );
};

export default SearchBar;
