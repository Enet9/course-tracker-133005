export default function StudentCard({ course }) {
    const atRisk = course.grade < 50 && course.attending === false;
    const eligibleForDistinction = course.grade >= 85;

    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h2>{course.name}</h2>
            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
            <p>Attending: {course.attending ? "Yes" : "No"}</p>
            <p>Difficulty: {course.difficulty}</p>

            {atRisk && <p style={{ color: "red" }}>⚠ At Risk</p>}
            {eligibleForDistinction && (
                <p style={{ color: "green" }}>🎖 Eligible for Distinction</p>
            )}
        </div>
    );
}
