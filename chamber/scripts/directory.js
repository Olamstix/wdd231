const directory = document.getElementById('member-directory');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');

async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

function displayMembers(members) {
  directory.innerHTML = ''; // Clear existing content

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.url}" target="_blank">Visit Website</a>
    `;

    directory.appendChild(card);
  });
}

// Toggle views
gridBtn.addEventListener('click', () => {
  directory.classList.add('grid-view');
  directory.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  directory.classList.add('list-view');
  directory.classList.remove('grid-view');
});

// Load members on page load
getMembers();


// Mobile nav toggle
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
