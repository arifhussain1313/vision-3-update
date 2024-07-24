// Add animation to team members on scroll
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach((member) => {
  member.addEventListener('scroll', () => {
    member.classList.add('animate');
  });
});