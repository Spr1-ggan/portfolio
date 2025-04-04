
document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
  
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Please fill in all fields.');
        return;
      }
  
      if (!validateEmail(email.value)) {
        alert('Please enter a valid email.');
        return;
      }
  
      alert('Message sent successfully!');
      form.reset();
    });
  
    function validateEmail(email) {
      const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return re.test(email);
    }
  
    
    const toggleButton = document.createElement('button');
    toggleButton.innerText = '🌓 Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px';
    toggleButton.style.background = '#333';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';
  
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });
  