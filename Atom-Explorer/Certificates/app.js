// State Management
let state = {
  userCerts: [],
  quizzesAttempted: 0,
  userName: "Student"
  
   
};


const userName =
    localStorage.getItem("username") || "Student";

document.getElementById("profileUserName").textContent = userName;
document.getElementById("certRecipientName").textContent = userName;

// Rank Constants & Boundaries
const RANK_THRESHOLDS = [
  { name: "Beginner", certsRequired: 0, icon: "⚛️" },
  { name: "Explorer", certsRequired: 1, icon: "🚀" },
  { name: "Scientist", certsRequired: 3, icon: "🧪" },
  { name: "Atomic Master", certsRequired: 5, icon: "🔋" },
  { name: "Quantum Legend", certsRequired: 10, icon: "👑" }
];

// Load state from localStorage on startup
function loadState() {
  const savedCerts = localStorage.getItem("au_vault_certs");
  const savedAttempts = localStorage.getItem("au_vault_attempts");
  const savedName = localStorage.getItem("username");
  
  if (savedCerts) {
    state.userCerts = JSON.parse(savedCerts);
  } else {
    state.userCerts = [];
  }
  
  if (savedAttempts) {
    state.quizzesAttempted = parseInt(savedAttempts, 10);
  } else {
    state.quizzesAttempted = state.userCerts.length; // fallback
  }

  if (savedName) {
    state.userName = savedName;
    document.getElementById("profileUserName").textContent =
    state.userName;

document.getElementById("certRecipientName").textContent =
    state.userName;
  }
}

// Save state to localStorage
function saveState() {
  localStorage.setItem("au_vault_certs", JSON.stringify(state.userCerts));
  localStorage.setItem("au_vault_attempts", state.quizzesAttempted.toString());
  localStorage.setItem("username", state.userName);
}

// Rank & Progression Calculator
function calculateRank(certsCount) {
  let currentRank = RANK_THRESHOLDS[0];
  let nextRank = RANK_THRESHOLDS[1];
  
  for (let i = 0; i < RANK_THRESHOLDS.length; i++) {
    if (certsCount >= RANK_THRESHOLDS[i].certsRequired) {
      currentRank = RANK_THRESHOLDS[i];
      nextRank = RANK_THRESHOLDS[i + 1] || null; // Null if max rank
    }
  }
  return { currentRank, nextRank };
}

function calculateProgressPercent(certsCount) {
  // Returns progress percentage (0 - 100) mapped horizontally across checkpoints
  if (certsCount === 0) return 0;
  
  // Beginner (0) -> Explorer (1)
  if (certsCount < 1) {
    return certsCount * 25;
  }
  // Explorer (1) -> Scientist (3)
  if (certsCount < 3) {
    // 25% base + up to 25% (total 50%). Range is 1 to 3 (2 units).
    return 25 + ((certsCount - 1) / 2) * 25;
  }
  // Scientist (3) -> Atomic Master (5)
  if (certsCount < 5) {
    // 50% base + up to 25% (total 75%). Range is 3 to 5 (2 units).
    return 50 + ((certsCount - 3) / 2) * 25;
  }
  // Atomic Master (5) -> Quantum Legend (10)
  if (certsCount < 10) {
    // 75% base + up to 25% (total 100%). Range is 5 to 10 (5 units).
    return 75 + ((certsCount - 5) / 5) * 25;
  }
  // Quantum Legend (10+)
  return 100;
}

// Badge Checkers
function checkBadges() {
  const certs = state.userCerts;
  const attempts = state.quizzesAttempted;
  
  return {
    firstQuiz: certs.length >= 1,
    quizExplorer: attempts >= 3,
    score90: certs.some(c => c.score >= 90),
    hardMaster: certs.some(c => c.difficulty.toLowerCase() === "hard" && c.score >= 70),
    perfectScore: certs.some(c => c.score === 100)
  };
}

// Format date helper
function getFormattedDate(d = new Date()) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleDateString('en-US', options);
}

// Generate unique certificate ID
function generateCertId(quizTitle) {
  const prefix = "AU-CERT-";
  const abbreviation = quizTitle
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 3);
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}${abbreviation}-${randomNum}`;
}

// Render UI Components
function renderUI() {
  const certsCount = state.userCerts.length;
  
  // 1. Update Profile & Global Ranks
  const { currentRank, nextRank } = calculateRank(certsCount);
  document.getElementById("profileUserRank").innerText = currentRank.name;
  document.getElementById("statCurrentRankName").innerText = currentRank.name;
  
  // 2. Statistics Panel
  document.getElementById("statCertsCount").innerText = certsCount;
  document.getElementById("statQuizzesCount").innerText = state.quizzesAttempted;
  
  const maxScore = certsCount > 0 ? Math.max(...state.userCerts.map(c => c.score)) : 0;
  document.getElementById("statHighestScore").innerText = maxScore + "%";
  
  // 3. Rank Progression Bar
  const progressPercent = calculateProgressPercent(certsCount);
  document.getElementById("rankProgressFill").style.width = `${progressPercent}%`;
  
  // Update milestones styling
  RANK_THRESHOLDS.forEach(rank => {
    const node = document.getElementById(`milestone-${rank.name.toLowerCase().replace(" ", "-")}`);
    if (node) {
      node.classList.remove("unlocked", "active");
      if (certsCount >= rank.certsRequired) {
        node.classList.add("unlocked");
      }
      if (currentRank.name === rank.name) {
        node.classList.add("active");
      }
    }
  });


   




  
  // Info Banner remaining text
  if (nextRank) {
    document.getElementById("nextRankText").innerText = nextRank.name;
    const remaining = nextRank.certsRequired - certsCount;
    document.getElementById("certsRemainingText").innerText = `${remaining} certificate${remaining > 1 ? 's' : ''} remaining`;
  } else {
    document.getElementById("nextRankText").innerText = "Maximum Level Reached!";
    document.getElementById("certsRemainingText").innerText = "You are a Quantum Legend!";
  }
  
  // 4. Toggle Dashboard View (Empty State vs Active Content)
  const emptySection = document.getElementById("emptyStateSection");
  const activeSection = document.getElementById("activeStateSection");
  
  if (certsCount === 0) {
    emptySection.style.display = "flex";
    activeSection.style.display = "none";
  } else {
    emptySection.style.display = "none";
    activeSection.style.display = "flex";
    
    // Renders Featured Certificate (highest score, followed by newest date)
    const sortedCerts = [...state.userCerts].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.date) - new Date(a.date);
    });
    
    const featured = sortedCerts[0];
    document.getElementById("featuredCertName").innerText = featured.title;
    document.getElementById("featuredCertScore").innerText = `${featured.score}%`;
    document.getElementById("featuredCertDate").innerText = featured.date;
    
    // Set Featured Button click listener to view certificate
    const featuredBtn = document.getElementById("featuredCertViewBtn");
    featuredBtn.onclick = () => openCertificateModal(featured);
    
    // Render Recent Certificates Grid
    const listGrid = document.getElementById("certsListGrid");
    listGrid.innerHTML = "";
    
    state.userCerts.forEach(cert => {
      const card = document.createElement("div");
      card.className = "cert-card";
      card.innerHTML = `
        <div>
          <div class="cert-card-header">
            <h4 class="cert-card-title">${cert.title}</h4>
            <span class="cert-difficulty ${cert.difficulty}">${cert.difficulty}</span>
          </div>
          <div class="cert-score-wrap">
            <span class="cert-score-num">${cert.score}%</span>
            <span class="cert-score-total">/100</span>
          </div>
        </div>
        <div class="cert-card-footer">
          <span class="cert-date">${cert.date}</span>
          <div class="cert-actions">
            <button class="cert-btn-icon view-btn" title="View Certificate" aria-label="View Certificate">👁️</button>
            <button class="cert-btn-icon print-btn" title="Print/Download Certificate" aria-label="Print Certificate">🖨️</button>
          </div>
        </div>
      `;
      
      // Hook up card buttons
      card.querySelector(".view-btn").onclick = () => openCertificateModal(cert);
      card.querySelector(".print-btn").onclick = () => {
        openCertificateModal(cert);
        setTimeout(() => window.print(), 300);
      };
      
      listGrid.appendChild(card);
    });
  }
  
  // 5. Render Badges
  const badges = checkBadges();
  updateBadgeState("badge-first-quiz", badges.firstQuiz);
  updateBadgeState("badge-quiz-explorer", badges.quizExplorer);
  updateBadgeState("badge-score-90", badges.score90);
  updateBadgeState("badge-hard-master", badges.hardMaster);
  updateBadgeState("badge-perfect-score", badges.perfectScore);
  
  // 6. Render Chronological Timeline
  renderTimeline(badges);
}

function updateBadgeState(badgeId, isUnlocked) {
  const el = document.getElementById(badgeId);
  if (el) {
    if (isUnlocked) {
      el.classList.remove("locked");
      el.classList.add("unlocked");
      el.setAttribute("title", `Unlocked! ${el.querySelector('.badge-tooltip-content').innerText}`);
    } else {
      el.classList.remove("unlocked");
      el.classList.add("locked");
      el.setAttribute("title", `Locked: ${el.getAttribute('title')}`);
    }
  }
}

function renderTimeline(badges) {
  const container = document.getElementById("timelineListContainer");
  container.innerHTML = "";
  
  const timelineEvents = [];
  
  // Add Certificate Events
  state.userCerts.forEach(cert => {
    timelineEvents.push({
      type: "cert-earned",
      title: `${cert.title} Certificate Earned`,
      meta: `Scored ${cert.score}% (${cert.difficulty.toUpperCase()})`,
      date: new Date(cert.date),
      dateStr: cert.date
    });
  });
  
  // Add Badge Unlocks
  if (badges.firstQuiz && state.userCerts.length > 0) {
    timelineEvents.push({
      type: "badge-unlocked",
      title: "Badge Unlocked: First Step",
      meta: "Completed first quiz successfully!",
      date: new Date(state.userCerts[0].date),
      dateStr: state.userCerts[0].date
    });
  }
  if (badges.quizExplorer && state.userCerts.length >= 3) {
    // Explorer unlocked at third certificate date
    const sortedByDate = [...state.userCerts].sort((a,b) => new Date(a.date) - new Date(b.date));
    const targetDate = sortedByDate[2] ? sortedByDate[2].date : getFormattedDate();
    timelineEvents.push({
      type: "badge-unlocked",
      title: "Badge Unlocked: Quiz Explorer",
      meta: "Completed 3 quizzes on the platform.",
      date: new Date(targetDate),
      dateStr: targetDate
    });
  }
  if (badges.score90) {
    const highCerts = [...state.userCerts].filter(c => c.score >= 90).sort((a,b) => new Date(a.date) - new Date(b.date));
    if (highCerts[0]) {
      timelineEvents.push({
        type: "badge-unlocked",
        title: "Badge Unlocked: High Flyer",
        meta: `Scored ${highCerts[0].score}% on ${highCerts[0].title}`,
        date: new Date(highCerts[0].date),
        dateStr: highCerts[0].date
      });
    }
  }
  if (badges.hardMaster) {
    const hardCerts = [...state.userCerts].filter(c => c.difficulty.toLowerCase() === "hard" && c.score >= 70).sort((a,b) => new Date(a.date) - new Date(b.date));
    if (hardCerts[0]) {
      timelineEvents.push({
        type: "badge-unlocked",
        title: "Badge Unlocked: Hard Master",
        meta: `Passed ${hardCerts[0].title} on Hard mode`,
        date: new Date(hardCerts[0].date),
        dateStr: hardCerts[0].date
      });
    }
  }
  if (badges.perfectScore) {
    const perfectCerts = [...state.userCerts].filter(c => c.score === 100).sort((a,b) => new Date(a.date) - new Date(b.date));
    if (perfectCerts[0]) {
      timelineEvents.push({
        type: "badge-unlocked",
        title: "Badge Unlocked: Absolute Gen",
        meta: `Achieved 100% on ${perfectCerts[0].title}`,
        date: new Date(perfectCerts[0].date),
        dateStr: perfectCerts[0].date
      });
    }
  }




  
  // Sort timeline events chronologically (Newest first)
  timelineEvents.sort((a, b) => b.date - a.date);
  
  if (timelineEvents.length === 0) {
    container.innerHTML = `<div style="font-size:0.85rem; color:var(--text-muted); text-align:center; padding:1rem 0;">No activities recorded yet.</div>`;
    return;
  }
  
  timelineEvents.forEach(evt => {
    const item = document.createElement("div");
    item.className = `timeline-item ${evt.type}`;
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-title">${evt.title}</span>
        <span class="timeline-time">${evt.meta} • ${evt.dateStr}</span>
      </div>
    `;
    container.appendChild(item);
  });
}

// Certificate Modal Operations
function openCertificateModal(cert) {
  document.getElementById("certRecipientName").innerText = state.userName;
  document.getElementById("certSubjectName").innerText = cert.title;
  document.getElementById("certDisplayScore").innerText = `${cert.score}%`;
  document.getElementById("certDisplayDate").innerText = cert.date;
  document.getElementById("certDisplayId").innerText = cert.id;
  
  document.getElementById("certModalOverlay").classList.add("active");
}

function closeCertificateModal() {
  document.getElementById("certModalOverlay").classList.remove("active");
}

// Load Mock Data
function loadMockData() {
  state.userCerts = [
    {
      id: "AU-CERT-BA-127954",
      title: "Basic Astronomy",
      difficulty: "easy",
      score: 80,
      date: "January 12, 2026"
    },
    {
      id: "AU-CERT-CB-639105",
      title: "Chemical Bonds",
      difficulty: "moderate",
      score: 72,
      date: "February 18, 2026"
    },
    {
      id: "AU-CERT-QM-847293",
      title: "Quantum Mechanics Theory",
      difficulty: "hard",
      score: 95,
      date: "May 25, 2026"
    }
  ];
  state.quizzesAttempted = 4;
  saveState();
  renderUI();
}

// Add Custom Simulated Certificate
function addCustomCertificate(title, difficulty, score) {
  const newCert = {
    id: generateCertId(title),
    title: title || "Introductory Quiz",
    difficulty: difficulty || "easy",
    score: parseInt(score, 10) || 70,
    date: getFormattedDate()
  };
  
  state.userCerts.push(newCert);
  state.quizzesAttempted += 1;
  saveState();
  renderUI();
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderUI();
  
  // Modal close buttons
  document.getElementById("closeCertModal").onclick = closeCertificateModal;
  document.getElementById("modalCloseBtn").onclick = closeCertificateModal;
  document.getElementById("certModalOverlay").onclick = (e) => {
    if (e.target === document.getElementById("certModalOverlay")) {
      closeCertificateModal();
    }
  };
  
  // Print button
  document.getElementById("printCertBtn").onclick = () => {
    window.print();
  };
  
  // Empty State Button (opens simulator)
  document.getElementById("emptyStateBtn").onclick = () => {
    document.getElementById("simPanel").classList.add("active");
  };
  
  // Simulator triggers
  const simTrigger = document.getElementById("simTrigger");
  const simPanel = document.getElementById("simPanel");
  const simClose = document.getElementById("simClose");
  
  simTrigger.onclick = () => {
    simPanel.classList.toggle("active");
  };
  
  simClose.onclick = () => {
    simPanel.classList.remove("active");
  };
  
  // Simulator Controls
  document.getElementById("simToggleEmpty").onclick = () => {
    state.userCerts = [];
    state.quizzesAttempted = 0;
    saveState();
    renderUI();
  };
  
  document.getElementById("simLoadMock").onclick = () => {
    loadMockData();
  };
  
  document.getElementById("simClearData").onclick = () => {
    if(confirm("Are you sure you want to clear all certificate data and progress?")) {
      localStorage.clear();
      state.userCerts = [];
      state.quizzesAttempted = 0;
      saveState();
      renderUI();
    }
  };
  
  // Quiz score range value preview
  const scoreSlider = document.getElementById("simQuizScore");
  const scoreLabel = document.getElementById("simScoreLabel");
  
  scoreSlider.oninput = (e) => {
    scoreLabel.innerText = `${e.target.value}%`;
  };
  
  // Add cert submission
  document.getElementById("simAddCertBtn").onclick = () => {
    const title = document.getElementById("simQuizTitle").value.trim();
    const difficulty = document.getElementById("simQuizDifficulty").value;
    const score = parseInt(scoreSlider.value, 10);
    
    if (!title) {
      alert("Please enter a quiz name.");
      return;
    }
    
    // In Atom Universe, a quiz is unlocked if the score is 70% or higher
    if (score < 70) {
      state.quizzesAttempted += 1;
      saveState();
      renderUI();
      alert(`Quiz "${title}" completed with ${score}%. A score of 70% or higher is required to unlock a certificate! (Total attempts incremented).`);
    } else {
      addCustomCertificate(title, difficulty, score);
      // Briefly flash the new certificate in view
      const statsCerts = document.getElementById("statCardCerts");
      statsCerts.style.borderColor = "var(--accent)";
      statsCerts.style.boxShadow = "var(--shadow-accent-neon)";
      setTimeout(() => {
        statsCerts.style.borderColor = "";
        statsCerts.style.boxShadow = "";
      }, 1500);
    }
  };
});
