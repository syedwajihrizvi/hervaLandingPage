function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
/* ================= MOBILE NAV ================= */
function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

/* ================= HOW TOGGLE ================= */
const pills = document.querySelectorAll('.how-toggle .pill');
const stepGroups = document.querySelectorAll('.how-steps');

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    stepGroups.forEach(group => group.classList.remove('active'));

    pill.classList.add('active');
    document.getElementById(pill.dataset.target).classList.add('active');
  });
});
/* ================= FEATURE TOGGLE ================= */
const featurePills = document.querySelectorAll('.feature-toggle .pill');
const featureUser = document.getElementById('features-user');
const featureBusiness = document.getElementById('features-business');

featurePills.forEach(pill => {
  pill.addEventListener('click', () => {
    featurePills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    console.log(pill.dataset.target);
    if (pill.dataset.target === 'people') {
      featureUser.style.display = 'flex';
      featureBusiness.style.display = 'none';
    } else {
      featureUser.style.display = 'none';
      featureBusiness.style.display = 'flex';
    }
  });
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const ctas = document.querySelectorAll('.btn.primary.cta-btn');
ctas.forEach(cta => (
    cta.addEventListener('click', () => {
        document.getElementById('businessSignup').style.display = 'flex'
    })
))

const closeModalBtn = document.getElementById('closeModalBtn');
closeModalBtn.addEventListener('click', () => {
    document.getElementById('businessSignup').style.display = 'none'
})