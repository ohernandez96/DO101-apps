var express = require('express');
app = express();

app.get('/', function (req, res) {
  var choice, course, coursesEnrolled;
  coursesEnrolled = set();

  while (true) {
    console.log("Press 1 to Add course\n2 to Drop Course\n3 To show list of registered Courses\n4 to Exit. ");
    choice = input("\nEnter your number: ");

    if (choice === "1") {
      course = input("Enter the name of the course: ");
      coursesEnrolled.add(course);
  }

    if (choice === "2") {
      course = input("Enter the course you wish to drop: ");
      coursesEnrolled.remove(course);
    }

    if (choice === "3") {
      console.log("Registered courses: ", coursesEnrolled);
  }

    if (choice === "4") {
      break;
  }
}
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

