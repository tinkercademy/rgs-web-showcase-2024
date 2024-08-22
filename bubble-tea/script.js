function createFirework() {
  const container = document.getElementById('firework-container');

  // Generate random colors
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  // Create firework element
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.style.backgroundColor = color;

  // Set random position
  const xPos = Math.random() * window.innerWidth;
  const yPos = Math.random() * window.innerHeight;
  firework.style.left = xPos + 'px';
  firework.style.top = yPos + 'px';

  // Append firework to container
  container.appendChild(firework);

  // Remove firework after animation ends
  setTimeout(() => {
    container.removeChild(firework);
  }, 1000);
}
