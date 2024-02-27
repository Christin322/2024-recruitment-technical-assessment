import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Sort from './components/Sort';
import CourseCard from './components/CourseCard';
import data from './courses.json';
import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function App() {
  const [colour, setColour] = useState('#1479f2');
  const [open, setOpen] = useState(false);
  return (
    <div className="App flex">
      <NavBar />
      <div className="w-screen px-28 pt-8">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-left ">DevSoc presents</p>
          <h1
            className={`text-left text-8xl font-bold text-[${colour}]`}
            onClick={() => {
              if (colour === '#1479f2') {
                setColour('#a28bcc');
              } else {
                setColour('#1479f2');
              }
            }}
          >
            unilectives
          </h1>
          <h2 className="text-left font-extrabold text-lg">
            Your one-stop shop for UNSW course and elective reviews.
          </h2>
        </div>
        <div
          className="outline h-10 flex flex justify-start w-full content-center p-2 outline-[#9cade9] outline-2 rounded mb-4"
          onClick={() => setOpen(true)}
        >
          <MagnifyingGlassIcon className="text-[#9cade]" />
          <p className="text-base ml-6 text-[#9cade9]">
            Search for a course e.g. COMP1511
          </p>
        </div>
        <Sort />
        <div className="mt-10 flex justify-between gap-y-12 flex-wrap">
          {/* <CourseCard /> */}
          {data.map((course) => {
            return (
              <CourseCard
                prefix={course.course_prefix}
                code={course.course_code}
                title={course.course_title}
                stars={course.average_stars}
                reviews={course.total_reviews}
                terms={course.offered_terms}
              />
            );
          })}
        </div>
      </div>
      {open && (
        <div className="outline w-[30%] h-[30%]  bg-white absolute m-auto left-0 right-0 top-0 bottom-0">
          <div className="outline w-fit" onClick={() => setOpen(false)}>
            Close
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
