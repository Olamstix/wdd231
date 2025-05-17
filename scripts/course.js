const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, type: "WDD", completed: true },
    { code: "WDD 231", name: "Front-end Web Dev I", credits: 3, type: "WDD", completed: false },
    { code: "CSE 121b", name: "JavaScript Language", credits: 3, type: "CSE", completed: true },
    { code: "CSE 111", name: "Python Programming", credits: 3, type: "CSE", completed: true },
    { code: "CSE 210", name: "Programming w/ Classes", credits: 3, type: "CSE", completed: false },
  ];
  
  const courseCards = document.getElementById("course-cards");
  const creditTotal = document.getElementById("credit-total");
  
  function displayCourses(filtered) {
    courseCards.innerHTML = "";
    let total = 0;
    filtered.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.style.border = course.completed ? "2px solid green" : "1px solid gray";
      card.style.padding = "1rem";
      card.style.backgroundColor = course.completed ? "#e7ffe7" : "#f9f9f9";
  
      card.innerHTML = `
        <h3>${course.code}</h3>
        <p>${course.name}</p>
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
  