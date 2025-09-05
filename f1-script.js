// Simple script untuk interaksi
document.addEventListener('DOMContentLoaded', function() {
  // Menambahkan efek hover pada card
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const title = this.querySelector('.title').textContent;
      alert(`Opening: ${title}`);
    });
  });

  // Update waktu secara real-time
  function updateTimestamps() {
    const timestamps = document.querySelectorAll('.timestamp');
    timestamps.forEach(timestamp => {
      if (timestamp.textContent.includes('hours ago')) {
        // Biarkan seperti aslinya untuk demo
      }
    });
  }

  updateTimestamps();
  
  // Animasi untuk navbar link
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });
});
