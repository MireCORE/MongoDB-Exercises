// ==========================================
// Exercise 2
// ==========================================

// 1. Find students older than 22

db.students.find({
  age: { $gt: 22 },
});

// 2. Find students enrolled in React

db.students.find({
  courses: "React",
});

// 3. Find students whose name starts with 'S'

db.students.find({
  name: { $regex: /^S/i },
});

// 4. Find students whose age is either 18 or 21

db.students.find({
  age: { $in: [18, 21] },
});

// 5. Find students who are NOT using Gmail

db.students.find({
  email: { $not: /@gmail\.com$/i },
});

// 6. Find students enrolled in React AND older than 20

db.students.find({
  courses: "React",
  age: { $gt: 20 },
});

// 7. Find students enrolled in React OR Node.js

db.students.find({
  $or: [{ courses: "React" }, { courses: "Node.js" }],
});

// 8. BONUS: Names containing "x" OR emails ending in ".edu"

db.students.find({
  $or: [{ name: { $regex: /x/i } }, { email: { $regex: /\.edu$/i } }],
});
