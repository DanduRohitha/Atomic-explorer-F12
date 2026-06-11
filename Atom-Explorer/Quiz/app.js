// Question Banks for easy, moderate, and hard levels
const questions = {
  easy: [
    {
      id: 1,
      question: "What are the three primary subatomic particles that make up an atom?",
      options: ["Protons, neutrons, and electrons", "Molecules, cells, and atoms", "Quarks, leptons, and bosons", "Positrons, neutrinos, and gravitons"],
      correctIndex: 0
    },
    {
      id: 2,
      question: "Which subatomic particle carries a positive electric charge?",
      options: ["Electron", "Neutron", "Proton", "Neutrino"],
      correctIndex: 2
    },
    {
      id: 3,
      question: "Where is the vast majority of an atom's mass located?",
      options: ["In the electron cloud", "In the nucleus", "Evenly distributed throughout", "In the valence shell"],
      correctIndex: 1
    },
    {
      id: 4,
      question: "What is the electrical charge of an electron?",
      options: ["Neutral (no charge)", "Positive (+1)", "Negative (-1)", "Double positive (+2)"],
      correctIndex: 2
    },
    {
      id: 5,
      question: "Which element has the simplest atom, containing only one proton and one electron?",
      options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
      correctIndex: 1
    },
    {
      id: 6,
      question: "What particle in an atom has no electrical charge (is neutral)?",
      options: ["Proton", "Positron", "Electron", "Neutron"],
      correctIndex: 3
    },
    {
      id: 7,
      question: "What is the atomic number of an element equal to?",
      options: ["The number of neutrons", "The number of protons", "The number of protons plus neutrons", "The number of electrons plus neutrons"],
      correctIndex: 1
    },
    {
      id: 8,
      question: "In the periodic table, columns are generally referred to as:",
      options: ["Periods", "Blocks", "Groups", "Series"],
      correctIndex: 2
    },
    {
      id: 9,
      question: "What is the region around the nucleus where electrons are most likely to be found?",
      options: ["Electron cloud / orbitals", "Nucleolus", "Empty space", "Inner shell"],
      correctIndex: 0
    },
    {
      id: 10,
      question: "The sum of protons and neutrons in an atom is known as its:",
      options: ["Atomic number", "Valence number", "Charge number", "Mass number"],
      correctIndex: 3
    }
  ],
  moderate: [
    {
      id: 1,
      question: "Who proposed the \"plum pudding\" model of the atom, which was later disproved by Rutherford?",
      options: ["Niels Bohr", "John Dalton", "J.J. Thomson", "Erwin Schrödinger"],
      correctIndex: 2
    },
    {
      id: 2,
      question: "Which experiment led to the discovery of the atomic nucleus?",
      options: ["Double Slit Experiment", "Gold Foil Experiment", "Oil Drop Experiment", "Cathode Ray Tube Experiment"],
      correctIndex: 1
    },
    {
      id: 3,
      question: "What is the maximum number of electrons that can occupy the first (innermost) energy shell?",
      options: ["2", "8", "18", "32"],
      correctIndex: 0
    },
    {
      id: 4,
      question: "Atoms of the same element that have the same number of protons but different numbers of neutrons are called:",
      options: ["Isomers", "Isotopes", "Allotropes", "Ions"],
      correctIndex: 1
    },
    {
      id: 5,
      question: "What is the valence shell of an atom?",
      options: ["The innermost electron shell", "The nucleus boundary", "The outermost electron shell", "The core shell containing neutrons"],
      correctIndex: 2
    },
    {
      id: 6,
      question: "Which quantum number determines the primary energy level of an electron?",
      options: ["Principal quantum number (n)", "Angular momentum quantum number (l)", "Magnetic quantum number (ml)", "Spin quantum number (ms)"],
      correctIndex: 0
    },
    {
      id: 7,
      question: "What principle states that it is impossible to simultaneously know both the position and momentum of a particle with absolute precision?",
      options: ["Pauli Exclusion Principle", "Heisenberg Uncertainty Principle", "Aufbau Principle", "Hund's Rule"],
      correctIndex: 1
    },
    {
      id: 8,
      question: "What is the electron configuration of a neutral Carbon atom (atomic number 6)?",
      options: ["1s² 2s⁴", "1s² 2s² 2p²", "1s² 2s² 2p⁴", "1s² 2p⁴"],
      correctIndex: 1
    },
    {
      id: 9,
      question: "Which rule states that electrons will occupy degenerate orbitals singly before pairing up?",
      options: ["Hund's Rule", "Pauli Exclusion Principle", "Aufbau Principle", "Octet Rule"],
      correctIndex: 0
    },
    {
      id: 10,
      question: "What force holds the protons and neutrons together in the nucleus of an atom?",
      options: ["Electromagnetic force", "Gravitational force", "Weak nuclear force", "Strong nuclear force"],
      correctIndex: 3
    }
  ],
  hard: [
    {
      id: 1,
      question: "Which equation describes how the quantum state of a physical system changes over time?",
      options: ["Einstein Field Equations", "Maxwell's Equations", "Schrödinger Equation", "Planck's Law"],
      correctIndex: 2
    },
    {
      id: 2,
      question: "The Pauli Exclusion Principle states that:",
      options: [
        "Electrons fill the lowest energy level first", 
        "No two electrons in an atom can have the same set of four quantum numbers", 
        "Electrons act as both waves and particles", 
        "Energy is emitted in discrete packets called quanta"
      ],
      correctIndex: 1
    },
    {
      id: 3,
      question: "What are the names of the four orbital types corresponding to angular momentum quantum numbers l = 0, 1, 2, and 3?",
      options: ["s, p, d, f", "x, y, z, w", "alpha, beta, gamma, delta", "K, L, M, N"],
      correctIndex: 0
    },
    {
      id: 4,
      question: "What is the term for the energy required to remove an electron from a gaseous atom or ion?",
      options: ["Electron affinity", "Electronegativity", "Lattice energy", "Ionization energy"],
      correctIndex: 3
    },
    {
      id: 5,
      question: "What phenomenon occurs when light shines on a metal surface and causes electrons to be emitted?",
      options: ["Photoelectric Effect", "Compton Scattering", "Zeeman Effect", "Cherenkov Radiation"],
      correctIndex: 0
    },
    {
      id: 6,
      question: "In quantum mechanics, what does the square of the wave function (|ψ|²) represent?",
      options: ["The exact energy of the electron", "The probability density of finding the particle", "The velocity of the electron", "The momentum of the particle"],
      correctIndex: 1
    },
    {
      id: 7,
      question: "What is the spin quantum number (ms) of an electron?",
      options: ["0 or 1", "+1/2 or -1/2", "+1 or -1", "Any integer from -l to +l"],
      correctIndex: 1
    },
    {
      id: 8,
      question: "Which element is the first transition metal in the 3d block of the periodic table?",
      options: ["Titanium (Ti)", "Zinc (Zn)", "Scandium (Sc)", "Chromium (Cr)"],
      correctIndex: 2
    },
    {
      id: 9,
      question: "What type of nuclear decay emits a particle consisting of two protons and two neutrons?",
      options: ["Beta-minus decay", "Alpha decay", "Gamma emission", "Positron emission"],
      correctIndex: 1
    },
    {
      id: 10,
      question: "The concept that matter exhibits both wave-like and particle-like properties is known as:",
      options: ["Photoelectric dualism", "Heisenberg principle", "Wave-particle duality", "Superposition principle"],
      correctIndex: 2
    }
  ]
};

// Application State Variables
let selectedLevel = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = []; // Stores user selections

// DOM Elements
const welcomeState = document.getElementById("welcome-state");
const quizState = document.getElementById("quiz-state");
const resultsState = document.getElementById("results-state");
const difficultyIndicator = document.getElementById("difficulty-indicator");
const questionCounter = document.getElementById("question-counter");
const progressBarFill = document.getElementById("progress-bar-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

// Results Elements
const resultScore = document.getElementById("result-score");
const resultPercentage = document.getElementById("result-percentage");
const scoreCircleProgress = document.getElementById("score-circle-progress");
const performanceTitle = document.getElementById("performance-title");
const performanceMessage = document.getElementById("performance-message");
const certificateClaimBox = document.getElementById("certificate-claim-box");
const studentNameInput = document.getElementById("student-name-input");

// Certificate Modal Elements
const certificateModal = document.getElementById("certificate-modal");
const certStudentName = document.getElementById("cert-student-name");
const certSelectedLevel = document.getElementById("cert-selected-level");
const certAchievedScore = document.getElementById("cert-achieved-score");
const certCompletionDate = document.getElementById("cert-completion-date");

/**
 * Initializes the quiz for the chosen level and transitions state
 * @param {string} level - 'easy', 'moderate', or 'hard'
 */
function startQuiz() {

  selectedLevel =
  localStorage.getItem(
    "quizDifficulty"
  ) || "easy";

  currentQuestions =
  questions[selectedLevel];

  currentQuestionIndex = 0;

  userAnswers =
  new Array(
    currentQuestions.length
  ).fill(null);

  welcomeState.classList.remove("active");
  resultsState.classList.remove("active");
  quizState.classList.add("active");

  difficultyIndicator.textContent =
    selectedLevel.toUpperCase();
}

function startQuiz() {

  selectedLevel =
    localStorage.getItem("quizDifficulty")
    || "easy";

  currentQuestions =
    questions[selectedLevel];

  currentQuestionIndex = 0;

  userAnswers =
    new Array(currentQuestions.length)
    .fill(null);

  welcomeState.classList.remove("active");
  resultsState.classList.remove("active");
  quizState.classList.add("active");

  const formattedLevel =
    selectedLevel.charAt(0).toUpperCase() +
    selectedLevel.slice(1);

  difficultyIndicator.textContent =
    `${formattedLevel} Level`;

  renderQuestion();
}


/**
 * Renders the active question and updates pagination buttons
 */
function renderQuestion() {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  
  // Update Question Counter text and Progress Bar fill width
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
  const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  progressBarFill.style.width = `${progressPercent}%`;
  
  // Update Question HTML
  questionText.textContent = currentQuestion.question;
  
  // Clear and Populate Options Grid
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((optionText, index) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option-button";
    
    // Check if user previously selected this option
    if (userAnswers[currentQuestionIndex] === index) {
      optionButton.classList.add("selected");
    }
    
    // Set click handler
    optionButton.onclick = () => selectOption(index);
    
    // Create option structure with prefix letter A, B, C, D
    const optionLetter = String.fromCharCode(65 + index); // 65 = 'A'
    optionButton.innerHTML = `<span class="option-letter">${optionLetter}</span><span class="option-text">${optionText}</span>`;
    
    optionsContainer.appendChild(optionButton);
  });
  
  // Handle controls enablement
  btnPrev.disabled = currentQuestionIndex === 0;
  
  // Change next button text on final question
  if (currentQuestionIndex === currentQuestions.length - 1) {
    btnNext.innerHTML = `Submit Quiz <span class="btn-icon">&check;</span>`;
  } else {
    btnNext.innerHTML = `Next <span class="btn-icon">&rarr;</span>`;
  }
}

/**
 * Handles the selection of an option for the current question
 * @param {number} optionIndex - Index of the selected option
 */
function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  // Refresh selection visual state locally without resetting whole element structure
  const optionButtons = optionsContainer.querySelectorAll(".option-button");
  optionButtons.forEach((btn, idx) => {
    if (idx === optionIndex) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

/**
 * Handles navigation to the previous question
 */
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

/**
 * Handles navigation to the next question or triggers submission
 */
function nextQuestion() {
  // Enforce selecting an option before moving forward
  if (userAnswers[currentQuestionIndex] === null) {
    alert("Please select an option before moving to the next question.");
    return;
  }
  
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

/**
 * Computes the score and percentage, transitions screen to results, and checks for certificate qualification
 */
function showResults() {
  let score = 0;
  currentQuestions.forEach((q, index) => {
    if (userAnswers[index] === q.correctIndex) {
      score++;
    }
  });
  
  const percentage = Math.round((score / currentQuestions.length) * 100);
  
  // Set Score numbers
  resultScore.textContent = `${score} / ${currentQuestions.length}`;
  resultPercentage.textContent = `${percentage}%`;
  
  // Animate the score circle indicator (circumference is 2 * PI * r = 2 * 3.14159 * 52 = ~327)
  const circumference = 327;
  const strokeOffset = circumference - (percentage / 100) * circumference;
  scoreCircleProgress.style.strokeDashoffset = strokeOffset;
  
  // Performance message and color assignments based on grades
  let perfTitle = "";
  let perfMsg = "";
  
  if (percentage >= 90) {
    perfTitle = "Outstanding Achievement!";
    perfMsg = "You have demonstrated excellent mastery over atomic structures and quantum principles!";
  } else if (percentage >= 70) {
    perfTitle = "Well Done!";
    perfMsg = "You passed the quiz! You have a solid grasp of atomic concepts.";
  } else if (percentage >= 50) {
    perfTitle = "Keep Practicing!";
    perfMsg = "You are on the right track, but review atomic details to improve your knowledge.";
  } else {
    perfTitle = "Atomic Novice";
    perfMsg = "Read up on the Bohr model, quantum levels, and subatomic configurations, and try again!";
  }
  
  performanceTitle.textContent = perfTitle;
  performanceMessage.textContent = perfMsg;
  
  // Show certificate form only if student scored 70% or above
  if (percentage >= 70) {
    certificateClaimBox.classList.remove("hidden");
    studentNameInput.value = ""; // Reset name field
  } else {
    certificateClaimBox.classList.add("hidden");
  }
  
  // Transition UI
  quizState.classList.remove("active");
  resultsState.classList.add("active");
}

/**
 * Generates and opens the Certificate Modal with filled information
 */
function generateAndShowCertificate() {
  const name = studentNameInput.value.trim();
  
  if (!name) {
    alert("Please enter your name to claim your certificate.");
    studentNameInput.focus();
    return;
  }
  
  // Set details inside the certificate preview card
  certStudentName.textContent = name;
  
  const formattedLevel = selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1);
  certSelectedLevel.textContent = `${formattedLevel} Level`;
  
  let score = 0;
  currentQuestions.forEach((q, index) => {
    if (userAnswers[index] === q.correctIndex) {
      score++;
    }
  });
  const percentage = Math.round((score / currentQuestions.length) * 100);
  certAchievedScore.textContent = `${percentage}% (${score}/${currentQuestions.length})`;
  
  // Format current date beautifully
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();
  certCompletionDate.textContent = today.toLocaleDateString('en-US', options);
  
  // Show Modal Overlay
  certificateModal.classList.add("active");
}

/**
 * Closes the Certificate Modal
 */
function closeCertificateModal() {
  certificateModal.classList.remove("active");
}

/**
 * Launches the browser print manager targeting specifically the certificate wrapper element
 */
function printCertificate() {
  window.print();
}

/**
 * Resets the application state to return to welcome screen
 */
function restartQuiz() {
  location.reload();
  selectedLevel = null;
  currentQuestions = [];
  currentQuestionIndex = 0;
  userAnswers = [];
  
  // Transition back to welcome screen
  resultsState.classList.remove("active");
  quizState.classList.remove("active");
  welcomeState.classList.add("active");
}
function openEasyQuiz(){

 localStorage.setItem(
 "quizDifficulty",
 "easy"
 );

 window.location.href =
 "quiz/index.html";
}

function openModerateQuiz(){

 localStorage.setItem(
 "quizDifficulty",
 "moderate"
 );

 window.location.href =
 "quiz/index.html";
}
function openHardQuiz(){

 localStorage.setItem(
 "quizDifficulty",
 "hard"
 );

 window.location.href =
 "quiz/index.html";
}