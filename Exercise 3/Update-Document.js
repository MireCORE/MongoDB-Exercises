// ==========================================
// Exercise 3
// ==========================================

// 1. INSERT MANY - Add students

db.students.insertMany([
  {
    name: "mire",
    email: "mire@gmail.com",
    points: 30,
    courses: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "kalid",
    email: "kalid@gmail.com",
    points: 20,
    courses: ["Tailwind", "Next.js", "Database"],
  },
  {
    name: "mohamed",
    email: "mohamed@gmail.com",
    points: 25,
    courses: ["Python", "Django", "PostgreSQL"],
  },
]);

// 2. UPDATE ONE - Change Mire's email

db.students.updateOne(
  { name: "mire" },
  { $set: { email: "mire@university.edu" } },
);

// 3. UPDATE ONE - Increase Kalid's points by 30

db.students.updateOne({ name: "kalid" }, { $inc: { points: 30 } });

// 4. UPDATE ONE - Add Express.js to Mohamed's courses

db.students.updateOne(
  { name: "mohamed" },
  { $push: { courses: "Express.js" } },
);

// 5. UPDATE ONE - Remove Node.js from Mire's courses

db.students.updateOne({ name: "mire" }, { $pull: { courses: "Node.js" } });

// 6. UPDATE ONE - Update Kalid's information

db.students.updateOne(
  { name: "kalid" },
  {
    $set: { email: "kalid@university.edu" },
    $push: { courses: "MongoDB" },
    $pull: { courses: "Database" },
  },
);

// 7. FIND - Display all students

db.students.find();
