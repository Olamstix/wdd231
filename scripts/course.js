const courses = [
    { code: "CSE 110", name: "Introduction to Programming", credits: 3, type: "CSE", completed: true, description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],  },
    { code: "WDD 130", name: "Front-end Web Dev I", credits: 2, type: "WDD", completed: false, description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ], },
    { code: "CSE 121b", name: "JavaScript Language", credits: 3, type: "CSE", completed: true, description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ], },
    { code: "CSE 210", name: "Programming with Classes", credits: 3, type: "CSE", completed: true, description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ], },
    { code: "WDD 131", name: "Web and Computer Programming", credits: 2, type: "WDD", completed: false, description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ], },
    { code: "WDD 231", name: "Web and Computer Programming", credits: 2, type: "WDD", completed: false, description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
        ], },
  ];
  
  const courseCards = document.getElementById("course-cards");
  const creditTotal = document.getElementById("credit-total");
  
  function displayCourses(filtered) {
    courseCards.innerHTML = "";
    let total = 0;
    filtered.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.style.border = course.completed ? "2px solid gray" : "1px solid gray";
      card.style.padding = "1rem";
      card.style.backgroundColor = course.completed ? "#007acc" : "#000";
      card.style.borderRadius = "10px";
      card.style.color = "#fff"
      card.style.marginBottom = "20px"
      card.innerHTML = `
        <h3>${course.code}</h3>
        <p>${course.name}</p>
        <p>${course.technology}</p>
        <p>${course.description}</p>
        <p>Credits: ${course.credits}</p>
      `;
      courseCards.appendChild(card);
      total += course.credits;
    });
    creditTotal.textContent = total;
  }
  
  document.getElementById("all-btn").addEventListener("click", () => displayCourses(courses));
  document.getElementById("wdd-btn").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "WDD")));
  document.getElementById("cse-btn").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "CSE")));
  
  window.addEventListener("DOMContentLoaded", () => displayCourses(courses));
  