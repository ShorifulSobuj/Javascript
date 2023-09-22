// 8. Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.

function calculateGrade(math, english, physics) {
  // Calculate the total marks
  const totalMarks = math + english + physics;

  // Calculate the average percentage
  const percentage = (totalMarks / 300) * 100;

  // Determine the grade based on the percentage
  let grade;
  if (percentage >= 90) {
    grade = "Grade A";
  } else if (percentage >= 80) {
    grade = "Grade B";
  } else if (percentage >= 70) {
    grade = "Grade C";
  } else if (percentage >= 60) {
    grade = "Grade D";
  } else if (percentage >= 40) {
    grade = "Grade E";
  } else {
    grade = "Grade F";
  }

  return {
    totalMarks: totalMarks,
    percentage: percentage,
    grade: grade
  };
}

// Example usage:
const result = calculateGrade(90, 85, 78);
console.log("Total Marks:", result.totalMarks);
console.log("Percentage:", result.percentage.toFixed(2) + "%");
console.log("Grade:", result.grade);
