// ==========================================
// MongoDB Exercise 001: Students Task Sheet
// ==========================================

// 1. INSERT MANY - Add multiple students

db.students.insertMany([
  {
    name: "mire",
    age: 30,
    email: "mire@gmail.com",
    courses: ["React", "Java", "Node.js"],
  },
  {
    name: "mirecore",
    age: 29,
    email: "mirecore@gmail.com",
    courses: ["JavaScript", "PHP", "C++"],
  },
  {
    name: "ali",
    age: 23,
    email: "ali@gmail.com",
    courses: ["CSS", "Html", "Node.js"],
  },
]);

// 2. FIND - Display all students

db.students.find();

// 3. UPDATE ONE - Update student email

db.students.updateOne(
  { name: "mirecore" },
  {
    $set: {
      email: "mirecor@gmail.com",
    },
  },
);

// 4. DELETE ONE - Delete a student

db.students.deleteOne({
  name: "mire",
});

// 5. UPDATE ONE - Add student address

db.students.updateOne(
  { name: "mirecore" },
  {
    $set: {
      address: [
        "Country: Somalia",
        "City: Mogadishu",
        "District: Howlwadaag",
        "Village: Laba-dhagax",
      ],
    },
  },
);

// 6. FIND - Display updated students

db.students.find();
