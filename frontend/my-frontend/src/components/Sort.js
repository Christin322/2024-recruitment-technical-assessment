import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Sort = () => {
  return (
    <div className="outline h-10 flex flex justify-between w-52 shadow-md content-center p-2 outline-[#7c7c7c] outline-1 rounded">
      <p className="text-base ml-2 text-[#7c7c7c]">Sort by</p>
      <ChevronDownIcon className="text-[#252525]" />
    </div>
  );
};

export default Sort;
