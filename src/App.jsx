import { useState } from "react";
import StudentCard from "./components/StudentCard";
import RegisterCourse from "./components/RegisterCourse";

const courses = [
    {
        id: 1,
        name: "Data Structures & Algorithms",
        credits: 4,
        grade: 91,
        attending: true,
        difficulty: "Hard",
    },
    {
        id: 2,
        name: "Web Development",
        credits: 3,
        grade: 47,
        attending: false,
        difficulty: "Moderate",
    },
    {
        id: 3,
        name: "Linear Algebra",
        credits: 3,
        grade: 86,
        attending: true,
        difficulty: "Hard",
    },
];

export default function App() {
    const [courseList, setCourseList] = useState(courses);

    return (
        <div>
            <h1>Enet</h1>
            <p>Student ID: 133005</p>
            <p>These are your enrolled courses for this semester:</p>

            {courseList.map((course) => (
                <StudentCard key={course.id} course={course} />
            ))}

            <RegisterCourse
                onRegister={(newCourse) =>
                    setCourseList((prev) => [...prev, newCourse])
                }
            />
        </div>
    );
}