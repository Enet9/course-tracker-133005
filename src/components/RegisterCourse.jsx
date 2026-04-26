import { useState, useRef, useCallback } from "react";

export default function RegisterCourse({ onRegister }) {
    const [name, setName] = useState("");
    const [credits, setCredits] = useState("");
    const [grade, setGrade] = useState("");
    const [attending, setAttending] = useState(false);
    const [difficulty, setDifficulty] = useState("Easy");
    const [errors, setErrors] = useState({});

    const nameRef = useRef(null);

    const handleRegister = useCallback(() => {
        const newErrors = {};

        if (name.trim() === "") {
            newErrors.name = "Course name cannot be empty.";
        }

        const gradeNum = Number(grade);
        if (grade === "" || isNaN(gradeNum) || gradeNum < 5 || gradeNum > 10) {
            newErrors.grade = "Grade must be a number between 5 and 10.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onRegister({
            id: Date.now(),
            name: name.trim(),
            credits: Number(credits),
            grade: gradeNum,
            attending,
            difficulty,
        });

        setName("");
        setCredits("");
        setGrade("");
        setAttending(false);
        setDifficulty("Easy");
        setErrors({});

        nameRef.current?.focus();
    }, [name, credits, grade, attending, difficulty, onRegister]);

    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Register a New Course</h2>

            <div>
                <label>Course Name: </label>
                <input
                    ref={nameRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
            </div>

            <div>
                <label>Credit Hours: </label>
                <input
                    type="number"
                    value={credits}
                    onChange={(e) => setCredits(e.target.value)}
                />
            </div>

            <div>
                <label>Current Grade: </label>
                <input
                    type="number"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                {errors.grade && <span style={{ color: "red" }}> {errors.grade}</span>}
            </div>

            <div>
                <label>Attending Regularly: </label>
                <input
                    type="checkbox"
                    checked={attending}
                    onChange={(e) => setAttending(e.target.checked)}
                />
            </div>

            <div>
                <label>Difficulty: </label>
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option>Easy</option>
                    <option>Moderate</option>
                    <option>Hard</option>
                </select>
            </div>

            <button onClick={handleRegister}>Register</button>
        </div>
    );
}
