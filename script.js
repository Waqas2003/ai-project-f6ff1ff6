// Add event listeners to features and cards
document.querySelectorAll('.feature, .card').forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.classList.add('hover');
  });

  element.addEventListener('mouseout', () => {
    element.classList.remove('hover');
  });
});

// Add animation to hero section
document.querySelector('.hero').addEventListener('mouseover', () => {
  document.querySelector('.hero').classList.add('animate');
});

document.querySelector('.hero').addEventListener('mouseout', () => {
  document.querySelector('.hero').classList.remove('animate');
});

This project uses Tailwind CSS for styling and includes a hero section, features section, cards section, and a footer. The hero section has a background image that changes on hover, and the features and cards have hover effects. The project is fully responsive and works directly in CodeSandbox.