const questions = [
    { question: "Which type of atrioventricular block best describes this rhythm?", choices: ["First-degree", "Second-degree type I", "Second-degree type II", "Third-degree"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/SecondDegree.png" },
    { question: "Your patient is in cardiac arrest and has been intubated. To assess CPR quality, which should you do?", choices: ["Monitor the patient's PETCO2", "Obtain a 12-lead ECG", "Check the patient's pulse", "Obtain a chest x-ray"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which facility is the most appropriate EMS destination for a patient with sudden cardiac arrest who achieved return of spontaneous circulation in the field?", choices: ["Comprehensive stroke care unit", "Acute rehabilitation care unit", "Acute long-term care unit", "Coronary reperfusion-capable medical center"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which of the following signs is a likely indicator of cardiac arrest in an unresponsive patient?", choices: ["Slow, weak pulse rate", "Cyanosis", "Agonal gasps", "Irregular, weak pulse rate"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which type of atrioventricular block best describes this rhythm?", choices: ["Third-degree atrioventricular block", "Second-degree atrioventricular block type I", "First-degree atrioventricular block", "Second-degree atrioventricular block type II"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/SecondDegree2.png" }, 
    { question: "To property ventilate a patient with a perfusing rhythm, how often do you squeeze the bag?", choices: ["Once every 3 to 4 seconds", "Once every 5 to 6 seconds", "Once every 10 seconds", "Once every 12 seconds"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "In addition to clinical assessment, which is the most reliable method to confirm and monitor correct placement of an endotracheal tube?", choices: ["Arterial blood gases", "Chest radiography", "Continuous waveform capnography", "Hemoglobin levels"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You are caring for a patient with a suspected stroke whose symptoms started 2 hours ago. The CT scan was normal, with no signs of hemorrhage. The patient does not have any contraindications to fibrinolytic therapy. Which treatment approach is best for this patient?", choices: ["Hold fibrinolytic therapy for 24 hours", "Give fibrinolytic therapy as soon as possible and consider endovascular therapy", "Order an echocardiogram before fibrinolytic administration", "Wait for the results of the MRI"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Which best describes this rhythm?", choices: ["First-degree atrioventricular block", "Second-degree atrioventricular block type I", "Second-degree atrioventricular block type II", "Third-degree atrioventricular block"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/ThirdDegree.png" },
    { question: "What is the recommended range from which a temperature should be selected and maintained constantly to achieve targeted temperature management after cardiac arrest?", choices: ["26°C to 28°C", "29°C to 31°C", "32°C to 36°C", "35°C to 37°C"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is the recommended first intravenous dose of amiodarone for a patient with refractory ventricular fibrillation?", choices: ["100 mg", "150 mg", "250 mg", "300 mg"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is the primary purpose of a medical emergency team or rapid response team?", choices: ["Improving care for patients admitted to critical care units", "Improving patient outcomes by identifying and treating early clinical deterioration", "Providing diagnostic consultation to emergency department patients", "Providing online consultation to EMS personnel in the field"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Which is the recommended next step after a defibrillation attempt?", choices: ["Check the ECG for evidence of a rhythm", "Open the patient's airway", "Determine if a carotid pulse is present", "Resume CPR, starting with chest compressions"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "EMS providers are treating a patient with suspected stroke.According to the Adult Suspected Stroke Algorithm, which critical action performed by the EMS team will expedite this patient's care on arrival and reduce the time to treatment?", choices: ["Alert the hospital", "Establish IV access", "Review the patient's history", "Treat hypertension"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A responder is caring for a patient with a history of congestive heart failure. The patient is experiencing shortness of breath, a blood pressure of 68/50 mm Hg, and a heart rate of 190 /min. The patent's lead ii ECG is displayed here. Which best characterizes this patient's rhythm?", choices: ["Perfusing ventricular tachycardia", "Sinus tachycardia", "Stable supraventricular tachycardia", "Unstable supraventricular tachycardia"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Unstablesupraventriculartachycardia.png" },
    { question: "Your rescue team arrives to find a 59-year-old man lying on the kitchen floor. You determine that he is unresponsive, Which is the next stop in your assessment and management of this patient?", choices: ["Apply the AED", "Check the patient's breathing and pulse", "Open the patient's airway", "Check for a medical alert bracelet"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Which best describes the length of time it should take to perform a pulse check during the BLS Assessment?", choices: ["1 to 4 seconds", "5 to 10 seconds", "11 to 15 seconds", "16 to 20 seconds"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You Instruct a team member to give 0.5 mg atropine IV. Which response is an example of closed loop communication?", choices: ["I'll give it in a few minutes.", "OK.", "I'll draw up 0.5 mg of atropine.", "Are you sure that is what you want given?"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is an effect of excessive ventilation?", choices: ["Decreased cardiac output", "Decreased intrathoracic pressure", "Increased perfusion pressures", "Increased venous return"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "If a team member is about to make a mistake during a resuscitation atternpt which best describes the action that the team leader or other team members should take?", choices: ["Conduct a debriefing after the resuscitation attempt", "Reassign the team tasks", "Address the team member immediately", "Remove the team member from the area"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Which best describes this rhythm?", choices: ["Monomorphic ventricular tachycardia", "Polymorphic ventricular tachycardia", "Supraventricular tachycardia", "Ventricular fibrillation"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "For STEMI patients, which best describes the recommended maximum goal time for emergency department door-to-balloon inflation time for percutaneous coronary intervention?", choices: ["180 minutes", "150 minutes", "120 minutes", "90 minutes"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is the maximum interval you should allow for an interruption in chest compressions?", choices: ["10 seconds", "15 seconds", "20 seconds", "25 to 30 seconds"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is one way to minimize interruptions in chest compressions during CPR?", choices: ["Administer IV medications only when delivering breaths", "Check the pulse immediately after defibrillation", "Use an AED to monitor the patient's rhythm", "Continue CPR while the defibrillator charges"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Which best describes an action taken by the team leader to avoid inefficiencies during a resuscitation attempt?", choices: ["Assign most tasks to the more experienced team members", "Perform the most complicated tasks", "Clearly delegate tasks", "Assign the same tasks to more than one team member"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is an acceptable method of selecting an appropriately sized oropharyngeal airway?", choices: ["Measure from the corner of the mouth to the angle of the mandible", "Measure from the thyroid cartilage to the bottom of the earlobe", "Estimate by using the formula Weight (kg)/8 + 2", "Estimate by using the size of the patient's finger"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You are evaluating a 58-year-old man with chest discomfort. His blood pressure is 92/50 mm Hg, his heart rate is 92/min, his nonlabored respiratory rate is 14 breaths/min, and his pulse oximetry reading is 97%. Which assessment step is most important now?", choices: ["Evaluating the PETCO2 reading", "Requesting a chest x-ray", "Obtaining a 12-lead ECG", "Requesting laboratory testing"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient in respiratory distress and with a blood pressure of 70/50mmHg presents with the lead ECG II shown here. Which is the appropriate treatment?", choices: ["Administering adenosine 6 mg IV push", "Performing synchronized cardioversion", "Performing vagal maneuvers", "Performing defibrillation"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Performingsynchronizedcardioversion.png" },
    { question: "During post-cardiac arrest care, which is the recommended duration of targeted temperature management after reaching the correct temperature range?", choices: ["0 to 8 hours", "At least 24 hours", "At least 36 hours", "At least 48 hours"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "Three minutes into a cardiac arrest resuscitation attempt, one member of your team inserts an endotracheal tube while another performs chest compressions. Capnography shows a persistent waveform and a PETC02 of 8 mmHg. Which is the significance of this finding?", choices: ["Chest compressions may not be effective", "The endotracheal tube is in the esophagus", "The patient meets the criteria for termination of efforts", "The team is ventilating the patient too often (hyperventilation)"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "Which is the recommended oral dose of aspirin for a patient with a suspected acute coronary syndrome?", choices: ["40 mg", "81 mg", "160 to 325 mg", "350 to 650 mg"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A team member is unable to perform an assigned task because it is beyond the team member's scope of practice.Which action should the team member take?", choices: ["Ask for a new task or role", "Assign it to another team member", "Do it anyway", "Seek expert advice"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "As the team leader, when do you tell the chest compressors to switch?", choices: ["Only when they tell you that they are fatigued", "About every 2 minutes", "About every 5 minutes", "About every 7 minutes"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "You are performing chest compressions during an adult resuscitation attempt. Which rate should you use to perform the compressions?", choices: ["Less than 80/min", "80 to 90/min", "100 to 120/min", "More than 120/min"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient is being resuscitated in a very noisy environment.A team member thinks he heard an order for 500 mg of amiodarone IV. Which is the best response from the team member?", choices: ["OK.", "Are you sure?", "Amiodarone 500 mg IV has been given", "I have an order to give 500 mg of amiodarone IV. Is this correct?"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient in stable narrow-complex tachycardia with a peripheral IV in place is refractory to the first dose of adenosine. Which dose would you administer next?", choices: ["3 mg", "12 mg", "20 mg", "40 mg"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A patient has a witnessed loss of consciousness. The lead II ECG reveals this rhythm. Which is the appropriate treatment?", choices: ["Administration of adenosine 6 mg IV push", "Administration of epinephrine 1 mg IV pusll", "Defibrillation", "Synchronized cardioversion"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Defibrillation.png" }, // 3 lines
    { question: "Which of these tests should be performed for a patient with suspected stroke within 25 minutes of hospital arrival?", choices: ["12-lead ECG", "Cardiac enzymes", "Coagulation studies", "Noncontrast CT scan of the head"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "What is the minimum systolic blood pressure one should attempt to achieve with fluid administration or vasoactive agents in a hypotensive postcardiac arrest patient who achieves return of spontaneous circulation?", choices: ["75 mmHg", "80 mmHg", "85 mmHg", "90 mmHg"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "You have completed 2 minutes of CPR. The ECG monitor displays the lead II rhythm shown here, and the patient has no pulse. Another member of your team resumes chest compressions, and an IV is in place Which do you do next?", choices: ["Start a dopamine infusion", "Give atropine 0.5 mg", "Give epinephrine 1 mg IV", "Insert an advanced airway"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Giveepinephrine.png" }, 
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths/min, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>On the basis of this patient's initial presentation, which condition do you suspect led to the cardiac arrest?", choices: ["Acute coronary syndrome", "Acute heart failure", "Acute ischemic stroke", "Supraventricular tachycardia with ischemic chest pain"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths/min, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>In addition to defibrillation, which intervention should be performed immediately?", choices: ["Advanced airway insertion", "Vasoactive medication administration", "Chest compressions", "Vascular access"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths/min, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>Despite 2 defibrillalion attempts, the patient remains in ventricular fibrillation. Which drug and dose should you administer first to this patient?", choices: ["Epinephrine 1 mg", "Amiodarone 300 mg", "Lidocaine 1 mg/kg", "Atropine 1 mg"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths/min, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>Despite the drug provided above and continued CPR, the patient remains in ventricular fibriflation.Which other drug should be administered next?", choices: ["Epinephrine 1 mg", "Atropine 1 mg", "Magnesium sulfate 1 g", "Amiodarone 300 mg"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" }, 
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths/min, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>The patient has return of spontaneous circulation and is not able to follow commands. Which postcardiac arrest care intervention do you choose for this patient?", choices: ["Initiate targeted temperature management", "Check the glucose level", "Administer epinephrine", "Extubate"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 45-year-old man had coronary artery stents placed 2 days ago. Today, he is in severe distress and is reporting “crushing” chest discomfort. He is pale, diaphoretic, and cool to the touch. His radial pulse is very weak, blood pressure is 64/40 mm Hg, respiratory rate is 28 breaths/min, and oxygen saturation is 89% on room air. When applied, the cardiac monitor initially showed ventricular tachycardia, which then quickly changed to ventricular fibrillation.<br><br>Which would you have done first if the patient had not gone into ventricular fibrillation?", choices: ["Established IV access", "Obtained a 12-lead ECG", "Given atropine 1 mg", "Performed synchronized cardioversion"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Dot.png" },
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but ill-appearing, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>Based on this patient's initial assessment, which adult ACLS algorithm should you follow?", choices: ["Acute coronary syndromes", "Tachycardia", "Suspected stroke", "Cardiac arrest"], correct: 1, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but ill-appearing, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>The patient's pulse oximeter shows a reading of84% on room air. Which initial action do you take?", choices: ["Perform bag-mask ventilation", "Intubate the patient", "Apply oxygen", "Check the pulse oximeter probe"], correct: 2, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but ill-appearing, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>After your initial assessment of this patient, which intervention should be performed next?", choices: ["Synchronized cardioversion", "Administration of amiodarone 150 mg IM", "Immediate defibrillation", "Endotracheal intubation"], correct: 0, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" },
    { question: "A 68-year-old woman presents with light-headedness, nausea, and chest discomfort. Your assessment finds her awake and responsive but ill-appearing, pale, and grossly diaphoretic. Her radial pulse is weak, thready, and fast. You are unable to obtain a blood pressure. She has no obvious dependent edema, and her neck veins are flat. Her lung sounds are equal, with moderate rales present bilaterally. The cardiac monitor shows the rhythm seen here.<br><br>If the patient became apneic and pulseless but the rhythm remained the same, which would take the highest priority?", choices: ["Administer amiodarone 300 mg", "Administer atropine 0.5 mg", "Insert an advanced airway", "Perform defibrillation"], correct: 3, image: "https://raw.githubusercontent.com/canisiome/ACLS_verA/main/Monomorphicventriculartach.png" }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 3600; // 60 minutes in seconds
let timerInterval;
let answered = new Array(questions.length).fill(false);
let isExpanded = false;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
    startTimer();
    document.getElementById('collapseBtn').addEventListener('click', toggleCollapse);
});

function loadQuestions() {
    const container = document.getElementById('questionsContainer');
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        if (index !== 0) questionDiv.style.display = 'none';
        else questionDiv.classList.add('active');

        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <img src="${q.image}" class="question-image" alt="Post-question image">
            <div class="choices">
                ${q.choices.map((choice, i) => `
                    <div class="choice" onclick="checkAnswer(${index}, ${i})">${choice}</div>
                `).join('')}
            </div>
            <div class="nav-buttons">
                <button class="back-btn" onclick="prevQuestion(${index})" ${index === 0 ? 'disabled' : ''}>Back</button>
                <button class="next-btn" onclick="nextQuestion(${index})" ${index === questions.length - 1 ? 'disabled' : ''}>Next</button>
            </div>
        `;
        container.appendChild(questionDiv);
    });

    updateScore();
}

function checkAnswer(qIndex, choiceIndex) {
    if (answered[qIndex]) return;
    
    const questionDiv = document.getElementsByClassName('question')[qIndex];
    const choices = questionDiv.getElementsByClassName('choice');
    const correctIndex = questions[qIndex].correct;
    
    if (choiceIndex === correctIndex) {
        choices[choiceIndex].classList.add('correct');
        score++;
    } else {
        choices[choiceIndex].classList.add('wrong');
        choices[correctIndex].classList.add('correct');
    }
    
    answered[qIndex] = true;
    updateScore();
}

function nextQuestion(index) {
    if (index < questions.length - 1) {
        const questions = document.getElementsByClassName('question');
        questions[index].style.display = 'none';
        questions[index].classList.remove('active');
        questions[index + 1].style.display = 'block';
        questions[index + 1].classList.add('active');
        currentQuestion = index + 1;
    }
}

function prevQuestion(index) {
    if (index > 0) {
        const questions = document.getElementsByClassName('question');
        questions[index].style.display = 'none';
        questions[index].classList.remove('active');
        questions[index - 1].style.display = 'block';
        questions[index - 1].classList.add('active');
        currentQuestion = index - 1;
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = 
            `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            disableAllChoices();
        }
    }, 1000);
}

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}/${questions.length}`;
}

function toggleCollapse() {
    const container = document.getElementById('questionsContainer');
    const btn = document.getElementById('collapseBtn');
    
    if (isExpanded) {
        container.classList.remove('expanded');
        container.classList.add('collapsed');
        btn.textContent = 'Expand All';
        isExpanded = false;
        const questions = document.getElementsByClassName('question');
        for (let i = 0; i < questions.length; i++) {
            if (i === currentQuestion) {
                questions[i].style.display = 'block';
                questions[i].classList.add('active');
            } else {
                questions[i].style.display = 'none';
                questions[i].classList.remove('active');
            }
        }
    } else {
        container.classList.remove('collapsed');
        container.classList.add('expanded');
        btn.textContent = 'Collapse All';
        isExpanded = true;
        const questions = document.getElementsByClassName('question');
        for (let i = 0; i < questions.length; i++) {
            questions[i].style.display = 'block';
            if (i === currentQuestion) {
                questions[i].classList.add('active');
            } else {
                questions[i].classList.remove('active');
            }
        }
    }
}

function disableAllChoices() {
    const choices = document.getElementsByClassName('choice');
    for (let choice of choices) {
        choice.onclick = null;
        choice.style.cursor = 'default';
    }
}