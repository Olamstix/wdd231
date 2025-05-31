async function loadSpotlights() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Failed to load members data");
  
      const data = await response.json();
  
      // Handle both possible formats of the JSON
      const members = Array.isArray(data) ? data : data.members;
  
      if (!members || !Array.isArray(members)) {
        throw new Error("Invalid member data format");
      }
  
      // Filter gold (3) or silver (2) members
      const goldSilverMembers = members.filter(m => m.membership === 2 || m.membership === 3);
  
      // Randomly pick 2 or 3 unique members
      const spotlightCount = Math.min(2, goldSilverMembers.length);
      const selected = [];
  
      while (selected.length < spotlightCount) {
        const randomIndex = Math.floor(Math.random() * goldSilverMembers.length);
        const candidate = goldSilverMembers[randomIndex];
  
        if (!selected.includes(candidate)) {
          selected.push(candidate);
        }
      }
  
      displaySpotlights(selected);
    } catch (error) {
      console.error(error);
      const container = document.getElementById("spotlight-cards");
      if (container) {
        container.textContent = "Unable to load spotlight members.";
      }
    }
  }
  
  function displaySpotlights(members) {
    const container = document.getElementById("spotlight-cards");
    if (!container) return;
  
    container.innerHTML = "";
  
    members.forEach(member => {
      const card = document.createElement("div");
      card.className = "spotlight-card";
  
      const membershipText = member.membership === 3 ? "Gold Member" : "Silver Member";
  
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo" class="spotlight-logo" />
        <h4>${member.name}</h4>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
        <span class="membership-badge ${member.membership === 3 ? "gold" : "silver"}">${membershipText}</span>
      `;
  
      container.appendChild(card);
    });
  }
  
  loadSpotlights();
  
//   // Mobile nav toggle
// const toggleBtn = document.getElementById('menu-toggle');
// const navLinks = document.getElementById('nav-links');

// toggleBtn.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
// });
