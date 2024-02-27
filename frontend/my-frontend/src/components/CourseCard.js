const CourseCard = (props) => {
  const { prefix, code, title, stars, reviews, terms } = props;
  return (
    <div className="shadow-xl h-48 bg-[#fafafa] flex flex-col w-[30%] min-w-fit p-6 rounded-lg justify-between">
      <div>
        <div className="flex justify-between">
          <p className="font-extrabold text-2xl">
            {prefix}
            {code}
          </p>
          <div className="pb-2">
            {[...Array(parseInt(stars))].map((star) => {
              return <span className="text-2xl text-[#b789e5]">★</span>;
            })}
            {[...Array(5 - parseInt(stars))].map((star) => {
              return <span className="text-2xl text-[#dddddd]">★</span>;
            })}
            <p className="text-[#9b9b9b] text-xs text-start">
              {reviews} reviews
            </p>
          </div>
        </div>
        <p className="text-start text-sm">{title}</p>
      </div>
      <div className="flex gap-x-1">
        {terms.map((term) => {
          return (
            <div className="bg-[#ccebf6] p-1 w-12 rounded-full">
              <p className="text-xs">{term}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCard;
