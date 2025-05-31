// Function to get query string params and display the submitted data
function displaySubmittedData() {
    const params = new URLSearchParams(window.location.search);
  
    // Required form fields to display
    const fields = [
      { key: 'firstname', label: 'First Name' },
      { key: 'lastname', label: 'Last Name' },
      { key: 'email', label: 'Email Address' },
      { key: 'mobile', label: 'Mobile Phone' },
      { key: 'business', label: 'Business/Organization Name' },
      { key: 'timestamp', label: 'Submitted On' }
    ];
  
    const container = document.getElementById('submitted-info');
  
    fields.forEach(({ key, label }) => {
      const value = params.get(key) || 'Not provided';
  
      // Format timestamp nicely if key is 'timestamp'
      const displayValue = key === 'timestamp' && value !== 'Not provided' 
        ? new Date(value).toLocaleString() 
        : value;
  
      const dt = document.createElement('dt');
      dt.textContent = label;
  
      const dd = document.createElement('dd');
      dd.textContent = displayValue;
  
      container.appendChild(dt);
      container.appendChild(dd);
    });
  }
  
  document.addEventListener('DOMContentLoaded', displaySubmittedData);
  