import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

// const Total = ({ course }) => {
//   const sum =
//     course.parts[0].exercises +
//     course.parts[1].exercises +
//     course.parts[2].exercises;
//   return <p>Number of exercises {sum}</p>;
// };
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

// const Content = ({ course }) => {
//   return (
//     <div>
//       <Part part={course.parts[0]} />
//       <Part part={course.parts[1]} />
//       <Part part={course.parts[2]} />
//     </div>
//   );
// };

// const Content = ({ course }) => {
//   const content = course.parts.map((part) => (
//     <p key={part.id}>
//       {part.name} {part.exercises}
//     </p>
//   ));
//   console.log(content);
//   return <div>{content}</div>;
// };

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
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const courseDisplay = courses.map((course) => {
    return <Course course={course} key={course.id} />;
  });
  console.log(courseDisplay);
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courseDisplay}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
