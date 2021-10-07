import React from "react";
const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};
const Total = ({ course }) => {
  let sum = course.parts.reduce((s, p) => s + p.exercises, 0);

  return (
    <div>
      <b>total of {sum} exercises</b>
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  const content = course.parts.map((part) => {
    return <Part key={part.id} part={part} />;
  });

  return <div>{content}</div>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};
export default Course;
