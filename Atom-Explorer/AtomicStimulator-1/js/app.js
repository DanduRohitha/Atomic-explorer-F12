document.addEventListener('DOMContentLoaded', ()=>{
 
  const slides = document.querySelectorAll('.slide');
  const slideTrack = document.querySelector('.slide-track');
  const prevSlide = document.getElementById('prevSlide');
  const nextSlide = document.getElementById('nextSlide');
  const infoPanel = document.getElementById('info-panel');
  const infoContent = document.getElementById('info-content');
  const closeInfo = document.getElementById('close-info');
  const levelOrder = ['easy', 'medium', 'hard'];

  const content = {
    easy: {
      electron: {title:'Electron', html:`<p><b>Charge:</b> Negative (-)</p><p>Found around the nucleus. Very small particle. Helps in chemical bonding.</p><p>Extra: Electrons determine chemical behavior and participate in bond formation.</p>`},
      proton: {title:'Proton', html:`<p><b>Charge:</b> Positive (+)</p><p>Found inside the nucleus. Determines the atomic number of an element.</p><p>Extra: Protons contribute to element identity.</p>`},
      neutron: {title:'Neutron', html:`<p><b>Charge:</b> Neutral (0)</p><p>Found inside the nucleus. Helps stabilize the nucleus.</p><p>Extra: Neutrons affect isotopes and stability.</p>`}
    },
    medium: {
      electron: {title:'Electron', html:`<p><b>Charge:</b> -1</p><p>Occupies energy levels or shells. Responsible for electricity and chemical reactions.</p><p>Extra: Electrons fill shells and determine bonding.</p>`},
      proton: {title:'Proton', html:`<p><b>Charge:</b> +1</p><p>Located in the nucleus. Determines the identity of an element.</p><p>Extra: Proton count = atomic number.</p>`},
      neutron: {title:'Neutron', html:`<p><b>Charge:</b> 0</p><p>Adds mass to the atom. Different numbers create isotopes.</p><p>Extra: Isotopes affect stability and radioactivity.</p>`}
    },
    hard: {
      electron: {title:'Electron', html:`<p>Fundamental subatomic particle.<br><b>Charge:</b> -1.602 × 10⁻¹⁹ C.</p><p>Exists in probability clouds and participates in bonding and electricity.</p><p>Extra: Described by quantum mechanics.</p>`},
      proton: {title:'Proton', html:`<p><b>Charge:</b> +1.602 × 10⁻¹⁹ C.</p><p>Determines atomic number. Made of quarks bound by strong force.</p><p>Extra: Studied in particle physics.</p>`},
      neutron: {title:'Neutron', html:`<p>Neutral charge. Slightly heavier than a proton.</p><p>Important for nuclear stability and radioactive processes.</p><p>Extra: Key in nuclear reactions and isotopes.</p>`}
    }
  };

  let currentLevel = 'easy';
  let currentSlideIndex = 0;

  function showInfo(level, type){
    const data = content[level] && content[level][type];
    if(!data) return;
    infoContent.innerHTML = `<h3>${data.title}</h3>${data.html}`;
    infoPanel.classList.add('visible');
    infoPanel.setAttribute('aria-hidden','false');
  }

  closeInfo.addEventListener('click', ()=>{
    infoPanel.classList.remove('visible');
    infoPanel.setAttribute('aria-hidden','true');
  });

  // clicking outside panel closes it
  document.addEventListener('click', (e)=>{
    if(!infoPanel.contains(e.target) && !e.target.matches('.particle') && !e.target.matches('.electron-orbit')){
      infoPanel.classList.remove('visible');
      infoPanel.setAttribute('aria-hidden','true');
    }
  });

  function setLevel(level){
    currentLevel = level;
    currentSlideIndex = levelOrder.indexOf(level);
    // buttons

   // slides: show only the matching slide (user requested)
    slides.forEach(s=>{
      if(s.id === level) s.classList.add('active'); else s.classList.remove('active');
    });
    if(slideTrack){
      slideTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
    // apply orbit rotation classes per level
    applyOrbitAnimations(level);
  }

  function applyOrbitAnimations(level){
    // clear any rotate classes
    document.querySelectorAll('.orbit').forEach(o=>{ o.classList.remove('rotate-slow','rotate-medium','rotate-fast'); });
    if(level === 'easy'){
      document.querySelectorAll('#easy .orbit-1').forEach(o=>o.classList.add('rotate-medium'));
    } else if(level === 'medium'){
      document.querySelectorAll('#medium .orbit-1').forEach(o=>o.classList.add('rotate-medium'));
      document.querySelectorAll('#medium .orbit-2').forEach(o=>o.classList.add('rotate-slow'));
    } else if(level === 'hard'){
      document.querySelectorAll('#hard .orbit-1').forEach(o=>o.classList.add('rotate-fast'));
      document.querySelectorAll('#hard .orbit-2').forEach(o=>o.classList.add('rotate-medium'));
      document.querySelectorAll('#hard .orbit-3').forEach(o=>o.classList.add('rotate-slow'));
    }
  }

  // attach clicks to particles (delegation)
  document.body.addEventListener('click', (e)=>{
    const target = e.target;
    if(target.classList.contains('particle')){
      const type = target.dataset.particle || target.dataset.type || (target.classList.contains('proton')? 'proton': target.classList.contains('neutron')? 'neutron':'electron');
      showInfo(currentLevel, type);
      e.stopPropagation();
    }
    if(target.classList.contains('electron') || target.classList.contains('electron-orbit')){
      showInfo(currentLevel, 'electron');
      e.stopPropagation();
    }
  });

  // level button handlers
 

  prevSlide && prevSlide.addEventListener('click', ()=>{
    const nextIndex = (currentSlideIndex - 1 + levelOrder.length) % levelOrder.length;
    setLevel(levelOrder[nextIndex]);
  });

  nextSlide && nextSlide.addEventListener('click', ()=>{
    const nextIndex = (currentSlideIndex + 1) % levelOrder.length;
    setLevel(levelOrder[nextIndex]);
  });

  // initialize
const dashboardLevel =
(localStorage.getItem("difficulty") || "easy")
.toLowerCase();

if(dashboardLevel === "easy"){

   setLevel("easy");

   document.getElementById(
   "currentDifficulty"
   ).innerHTML =
   "🌱 Easy Mode";

}
else if(dashboardLevel === "medium"){

   setLevel("medium");

   document.getElementById(
   "currentDifficulty"
   ).innerHTML =
   "🚀 Medium Mode";

}
else{

   setLevel("hard");

   document.getElementById(
   "currentDifficulty"
   ).innerHTML =
   "🔥 Difficult Mode";

}

  // small keyboard shortcuts
  document.addEventListener('keydown', (e)=>{
    if(e.key === '1') setLevel('easy');
    if(e.key === '2') setLevel('medium');
    if(e.key === '3') setLevel('hard');
  });
});
