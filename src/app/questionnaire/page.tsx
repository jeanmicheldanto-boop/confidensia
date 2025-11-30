'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, CheckCircle, BookOpen, Database, Sparkles, Wrench, Zap, ArrowLeft } from 'lucide-react';

// CSS personnalisé avec priorité maximale
const customButtonStyles = `
  .questionnaire-button-override button {
    width: 100%;
    padding: 1rem 1.25rem;
    margin-bottom: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    background-color: white;
    color: #374151;
    text-align: left;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.5;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  
  .questionnaire-button-override button:hover {
    border-color: #FF9933;
    background-color: #FFF5EB;
    box-shadow: 0 4px 12px rgba(255, 153, 51, 0.15);
    transform: translateX(4px);
  }
  
  .questionnaire-button-override button.selected {
    background-color: #FF9933;
    color: white;
    border-color: #FF9933;
    box-shadow: 0 6px 20px rgba(255, 153, 51, 0.35);
    transform: scale(1.02);
  }
`;

interface Question {
  id: number;
  category: string;
  question: string;
  options: Array<{
    text: string;
    points: number;
    isCorrect?: boolean;
  }>;
  bonus: string;
}

interface Profile {
  name: string;
  range: [number, number];
  description: string;
  recommendation: string;
  image: string;
  emoji: string;
}

const questions: Question[] = [
  {
    id: 1,
    category: "CULTURE & CONNAISSANCE DES OUTILS",
    question: "Lequel de ces outils n'est pas un modèle de langage (LLM) ?",
    options: [
      { text: "Claude", points: 0 },
      { text: "ChatGPT", points: 0 },
      { text: "Mistral", points: 0 },
      { text: "Igor", points: 4, isCorrect: true }
    ],
    bonus: "Si vous avez hésité, rassurez-vous : la majorité des établissements pensent encore que « LLM » veut dire Logiciel Libre Médico-social. Vous êtes dans le tempo."
  },
  {
    id: 2,
    category: "CULTURE & CONNAISSANCE DES OUTILS",
    question: "Pour expliquer (très) simplément le fonctionnement modèle de langage par l'IA (comme Chat GPT), on peut dire que :",
    options: [
  { text: "Il calcule la probabilité d'un mot d'être à la suite d'un autre.", points: 4 },
  { text: "Il enregistre une infinité de combinaison de mots.", points: 1 },
  { text: "Il calcule la probabilité qu'un mot d'un sens donné soit en relation avec un autre mot, même éloigné.", points: 2, isCorrect: true },
  { text: "Il transforme les mots en images qui se superposent.", points: 1 }
    ],
    bonus: "Finalement la complexité de l'IA n'est peut-être pas si éloignée que ça la complexité du CASF."
  },
  {
    id: 3,
    category: "DATA – Structurer, fiabiliser, exploiter",
    question: "Comment vos données sont-elles aujourd'hui structurées ?",
    options: [
      { text: "Dispersées dans des fichiers Excel un peu partout (dont \"version_definitive_3_bis.xlsx\")", points: 1 },
      { text: "Centralisées mais encore hétérogènes", points: 2 },
      { text: "Structurées avec quelques contrôles de cohérence", points: 3 },
      { text: "Structurées, nettoyées et reliées à des tableaux de bord automatisés", points: 4 }
    ],
    bonus: "Si vous avez déjà vécu le moment où le fichier principal a disparu le jour du CA, vous savez que la maturité data, c'est d'abord une histoire de sérénité cardiaque."
  },
  {
    id: 4,
    category: "DATA – Structurer, fiabiliser, exploiter",
    question: "Avez-vous une politique claire de gouvernance des données (RGPD, accès, mise à jour) ?",
    options: [
      { text: "Non, chaque service fait comme il peut", points: 1 },
      { text: "Oui, mais non formalisée", points: 2 },
      { text: "Oui, avec quelques règles appliquées", points: 3 },
      { text: "Oui, documentée, suivie et comprise des équipes", points: 4 }
    ],
    bonus: "Si la politique RGPD est rangée dans un classeur vert au fond du bureau de la cheffe de service, vous avez déjà franchi la première étape : elle existe."
  },
  {
    id: 5,
    category: "DATA – Structurer, fiabiliser, exploiter",
    question: "Dans quelle mesure les données sont-elles utilisées pour piloter les décisions ?",
    options: [
      { text: "Rarement", points: 1 },
      { text: "Pour quelques suivis d'activité", points: 2 },
      { text: "Régulièrement pour les rapports et évaluations internes", points: 3 },
      { text: "Systématiquement, avec analyses croisées et alertes automatiques", points: 4 }
    ],
    bonus: "Si votre tableau de bord budgétaire est ouvert uniquement la veille de l'échéance pour envoyer votre EPRD ou votre BP, c'est déjà un signe d'optimisation… temporelle."
  },
  {
    id: 6,
    category: "IA GÉNÉRATIVE – Comprendre, expérimenter, encadrer",
    question: "Avez-vous déjà utilisé un outil d'IA générative (ChatGPT, Copilot, Mistral, etc.) ?",
    options: [
      { text: "Non, jamais", points: 1 },
      { text: "Oui, à titre individuel", points: 2 },
      { text: "Oui, dans quelques projets ou tâches internes", points: 3 },
      { text: "Oui, intégré à certains processus (rapports, communications, analyses)", points: 4 }
    ],
    bonus: "Si vous l'avez testé en cachette pour écrire une note d'intention au financeur, vous êtes officiellement dans la phase expérimentale."
  },
  {
    id: 7,
    category: "IA GÉNÉRATIVE – Comprendre, expérimenter, encadrer",
    question: "Quelle est votre réaction lorsqu'un collègue utilise l'IA pour rédiger un rapport social ou une réponse à l'autorité ?",
    options: [
      { text: "On cadre immédiatement en rappelant que les données personnelles \"appartiennent aux usagers\"", points: 2 },
      { text: "On a soulevé cette question en réunion pour sensibiliser les équipes", points: 3 },
      { text: "On a défini des règles d'usage (données fictives, IA interne, validation humaine)", points: 4 },
      { text: "On ferme un peu les yeux tant que le rendu est propre et sans faute 😏", points: 1 }
    ],
    bonus: "Si vous avez déjà dit \"l'IA, oui, mais pas sur mon rapport d'évaluation interne\", vous êtes officiellement un gardien du temple… numérique."
  },
  {
    id: 8,
    category: "IA GÉNÉRATIVE – Comprendre, expérimenter, encadrer",
    question: "Quelle est la perception de l'IA générative dans votre établissement ?",
    options: [
      { text: "Inconnue ou jugée risquée", points: 1 },
      { text: "Intéressante mais non prioritaire", points: 2 },
      { text: "En expérimentation encadrée", points: 3 },
      { text: "Considérée comme un levier stratégique accompagné d'une charte interne", points: 4 }
    ],
    bonus: "Si le mot \"IA\" déclenche encore un haussement de sourcil du DAF, commencez par parler de \"gain de temps sur les tableaux Excel\", c'est plus efficace."
  },
  {
    id: 9,
    category: "OUTILS DE PRODUCTIVITÉ – Gagner du temps et fiabiliser",
    question: "Utilisez-vous des outils intégrant déjà de l'IA (Office Copilot, Notion AI, Canva Magic Write, etc.) ?",
    options: [
      { text: "Non", points: 1 },
      { text: "De manière ponctuelle", points: 2 },
      { text: "Par quelques services pilotes", points: 3 },
      { text: "De manière intégrée dans la plupart des usages bureautiques", points: 4 }
    ],
    bonus: "Si votre équipe pense que \"Copilot\" est un nouveau prestataire de transport adapté, vous avez encore une marge d'acculturation."
  },
  {
    id: 10,
    category: "OUTILS DE PRODUCTIVITÉ – Gagner du temps et fiabiliser",
    question: "Comment vos équipes sont-elles accompagnées dans la prise en main de ces outils ?",
    options: [
      { text: "Pas du tout", points: 1 },
      { text: "Par entraide informelle", points: 2 },
      { text: "Par quelques formations ciblées", points: 3 },
      { text: "Par une politique d'acculturation structurée", points: 4 }
    ],
    bonus: "Si la formation IA de votre établissement consistait en \"regarder une vidéo YouTube pendant la pause café\", c'est déjà un début d'acculturation horizontale."
  },
  {
    id: 11,
    category: "OUTILS DE PRODUCTIVITÉ – Gagner du temps et fiabiliser",
    question: "Quel est l'impact de ces outils sur votre productivité perçue ?",
    options: [
      { text: "Aucun à ce jour", points: 1 },
      { text: "Léger, mais non mesuré", points: 2 },
      { text: "Sensible dans certains services", points: 3 },
      { text: "Mesuré et documenté à l'échelle de la structure", points: 4 }
    ],
    bonus: "Si vos équipes disent \"on gagne du temps, mais on ne sait pas où il passe\", félicitations, vous êtes en phase 2 de la transformation numérique."
  },
  {
    id: 12,
    category: "AUTOMATISATION – Simplifier les processus",
    question: "Certains de vos processus administratifs sont-ils automatisés (extraction de données, tableaux de bord, envois automatiques) ?",
    options: [
      { text: "Non", points: 1 },
      { text: "Quelques initiatives isolées", points: 2 },
      { text: "Plusieurs automatisations récurrentes", points: 3 },
      { text: "Automatisations interconnectées avec suivi et maintenance", points: 4 }
    ],
    bonus: "Si \"automatisation\" signifie encore \"copier-coller plus vite dans Excel\", vous êtes à deux clics de la révolution industrielle ESSMS 4.0."
  },
  {
    id: 13,
    category: "AUTOMATISATION – Simplifier les processus",
    question: "Qui est à l'origine de ces automatisations ?",
    options: [
      { text: "Aucun acteur désigné", points: 1 },
      { text: "Des initiatives personnelles (Excel/VBA, macros)", points: 2 },
      { text: "Un service support ou prestataire externe", points: 3 },
      { text: "Une stratégie interne clairement définie et pilotée", points: 4 }
    ],
    bonus: "Si le seul qui comprend la macro Excel est parti à la retraite, il est peut-être temps d'automatiser… la transmission des savoirs."
  },
  {
    id: 14,
    category: "AUTOMATISATION – Simplifier les processus",
    question: "Comment les utilisateurs perçoivent-ils l'automatisation ?",
    options: [
      { text: "Avec méfiance ou désintérêt", points: 1 },
      { text: "Comme une aide ponctuelle", points: 2 },
      { text: "Comme un vrai levier de simplification", points: 3 },
      { text: "Comme un réflexe intégré dans leur pratique", points: 4 }
    ],
    bonus: "Si la seule réaction positive à un nouvel outil est \"au moins il plante pas comme l'ancien\", vous êtes déjà en progrès qualitatif mesurable."
  }
];

const profiles: Profile[] = [
  {
    name: "Explorateur",
    range: [14, 22],
    description: "L'IA est perçue comme lointaine ou risquée. Les données sont peu structurées.",
    recommendation: "Initier une acculturation et clarifier la gouvernance de la donnée.",
    image: "/profil1.png",
    emoji: "🧭"
  },
  {
    name: "Curieux organisé",
    range: [23, 34],
    description: "Des usages émergent, souvent isolés. La curiosité est là, mais sans cadre.",
    recommendation: "Identifier des cas d'usage simples et sécurisés pour enclencher la dynamique.",
    image: "/profil2.png",
    emoji: "🔍"
  },
  {
    name: "Pragmatique en transition",
    range: [35, 45],
    description: "L'IA devient un levier opérationnel dans certains domaines.",
    recommendation: "Consolider les pratiques, formaliser les règles et diffuser les réussites.",
    image: "/profil3.png",
    emoji: "⚙️"
  },
  {
    name: "ESSMS augmenté",
    range: [46, 56],
    description: "L'organisation maîtrise ses données et intègre l'IA dans son fonctionnement quotidien.",
    recommendation: "Étendre les usages à l'ensemble du cycle métier et mesurer les impacts.",
    image: "/profil4.png",
    emoji: "🚀"
  }
];

const getCategoryIcon = (category: string) => {
  if (category.includes("CULTURE & CONNAISSANCE")) {
    return <BookOpen className="w-5 h-5" />;
  }
  if (category.includes("DATA")) {
    return <Database className="w-5 h-5" />;
  }
  if (category.includes("IA GÉNÉRATIVE")) {
    return <Sparkles className="w-5 h-5" />;
  }
  if (category.includes("OUTILS DE PRODUCTIVITÉ")) {
    return <Wrench className="w-5 h-5" />;
  }
  if (category.includes("AUTOMATISATION")) {
    return <Zap className="w-5 h-5" />;
  }
  return <BookOpen className="w-5 h-5" />;
};

export default function QuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string | number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const totalSteps = questions.length;
  const currentQuestion = questions[currentStep];

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const getCurrentAnswer = (): number | undefined => {
    return answers[currentQuestion.id];
  };

  const isAnswered = getCurrentAnswer() !== undefined;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const goBack = () => {
    if (currentStep === 0) {
      setHasStarted(false);
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStartQuiz = () => {
    setHasStarted(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setHasStarted(false);
  };

  // Calcul du score total
  // Calcul du score total (uniquement les points, pas les index)
  const totalScore = Object.entries(answers)
    .filter(([key]) => !key.endsWith('_idx'))
    .reduce((sum, [, score]) => sum + score, 0);

  const getProfile = (score: number): Profile => {
    return profiles.find(profile => 
      score <= profile.range[1] && score >= profile.range[0]
    ) || profiles[profiles.length - 1];
  };

  const getOtherProfiles = (currentProfile: Profile): Profile[] => {
    return profiles.filter(profile => profile.name !== currentProfile.name);
  };

  if (showResult) {
    const userProfile = getProfile(totalScore);
    const otherProfiles = getOtherProfiles(userProfile);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Injection du CSS personnalisé */}
        <style dangerouslySetInnerHTML={{ __html: customButtonStyles }} />
        <div className="container mx-auto px-4 py-8">
          {/* Résultats */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold text-slate-800 mb-4">
                Résultats de votre diagnostic IA
              </h1>
              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                <span className="text-2xl font-bold text-orange-600 mr-2">
                  {totalScore}/56 points
                </span>
              </div>
            </motion.div>

            {/* Profil principal élégant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="result-main-profile mb-8"
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem' }}>
                  <img 
                    src={userProfile.image} 
                    alt={userProfile.name}
                    style={{
                      width: '340px',
                      height: '340px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                      boxShadow: '0 4px 24px rgba(30,41,59,0.10)',
                      marginRight: '3rem'
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 className="text-3xl font-bold text-slate-800 mb-1">
                      {userProfile.name}
                    </h2>
                    <p className="text-slate-600">
                      {userProfile.description}
                    </p>
                  </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-orange-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Recommandation personnalisée
                </h3>
                <p className="text-orange-800 leading-relaxed">
                  {userProfile.recommendation}
                </p>
              </div>
              
              {/* Recommandation ConfidensIA */}
              <div className="bg-gradient-to-r from-orange-800 to-orange-900 rounded-lg p-6 mt-4">
                <p className="text-orange-100 leading-relaxed mb-4">
                  <span className="font-semibold text-orange-200">ConfidensIA</span> peut vous accompagner pour développer les usages de l&apos;IA dans une approche simple, pragmatique et totalement adaptée à votre situation et à votre environnement.
                </p>
                <p className="text-orange-100">
                  N&apos;hésitez pas à{' '}
                  <a 
                    href="/contact" 
                    className="font-semibold underline"
                    style={{ color: '#f97316' }}
                  >
                    prendre RDV
                  </a>
                  , à{' '}
                  <a 
                    href="/contact" 
                    className="font-semibold underline"
                    style={{ color: '#f97316' }}
                  >
                    nous contacter
                  </a>
                  {' '}ou à{' '}
                  <a 
                    href="/contact" 
                    className="font-semibold underline"
                    style={{ color: '#f97316' }}
                  >
                    vous tenir informé
                  </a>
                  {' '}de nos avancées sur l&apos;IA dans les ESSMS.
                </p>
              </div>
            </motion.div>

            {/* Autres profils grisés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-slate-700 mb-8 text-center">
                Les profils des autres répondants
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {otherProfiles.map((profile, index) => {
                  return (
                    <motion.div 
                      key={profile.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center mb-4">
                        <img 
                          src={profile.image} 
                          alt={profile.name}
                          className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
                        />
                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          {profile.name}
                        </h4>
                        <p className="text-sm text-slate-500 font-semibold mb-3">
                          {profile.range[0]}-{profile.range[1]} points
                        </p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {profile.description}
                        </p>
                        <p className="text-sm text-slate-500 italic">
                          {profile.recommendation}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetQuiz}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'linear-gradient(90deg, #FF9933, #e67e22)',
                  color: '#fff',
                  padding: '16px 32px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 16px rgba(255, 153, 51, 0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s, box-shadow 0.2s'
                }}
              >
                <RotateCcw style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.75rem' }} />
                Refaire le test
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Page d'accueil du questionnaire
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">
                Diagnostic de maturité de l&apos;usage de l&apos;IA dans les ESSMS
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-lg mb-6"
              >
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Évaluer comment votre structure aborde l&apos;intelligence artificielle selon 4 domaines :
                </p>
                
                {/* Icônes en grille 2x2 */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Database, label: "Data", color: "from-blue-500 to-blue-600" },
                    { icon: Sparkles, label: "IA générative", color: "from-orange-500 to-orange-600" },
                    { icon: Wrench, label: "Productivité", color: "from-indigo-500 to-indigo-600" },
                    { icon: Zap, label: "Automatisation", color: "from-yellow-500 to-orange-500" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shrink-0`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="font-semibold text-slate-700 text-sm">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-sm text-slate-500 italic mb-6">
                  (Et surtout, mesurer tout ce que vous faites déjà sans vous en rendre compte.)
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleStartQuiz}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #FF9933, #e67e22)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '16px 32px',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    boxShadow: '0 8px 16px rgba(255, 153, 51, 0.3)',
                    transition: 'all 300ms ease',
                    cursor: 'pointer'
                  }}
                >
                  Lancer le questionnaire
                </motion.button>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-sm text-slate-600"
              >
                <strong>14 questions</strong> • <strong>5 minutes</strong> • Résultats personnalisés
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6">
        {/* En-tête avec navigation et progression */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goBack}
              className="flex items-center px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow-md"
              style={{
                backgroundColor: '#ffffff',
                color: '#374151',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '8px 16px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                transition: 'all 200ms ease'
              }}
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              {currentStep === 0 ? 'Retour' : 'Précédent'}
            </motion.button>
            <div className="text-sm text-slate-500">
              Question {currentStep + 1} sur {totalSteps}
            </div>
          </div>
          
          {/* Barre de progression élégante */}
          <div className="w-full bg-slate-200 rounded-full h-3 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full shadow-sm"
            />
          </div>
        </div>

        {/* Question Card avec animations */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-4"
            >
              {/* En-tête de question avec icône */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-600">
                    {getCategoryIcon(currentQuestion.category)}
                  </span>
                  <h2 className="text-lg font-semibold text-slate-800">
                    {currentQuestion.category}
                  </h2>
                </div>
                <div style={{
                  background: '#4A2C2A',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(74, 44, 42, 0.15)'
                }}>
                  {currentQuestion.question}
                </div>
              </div>

              {/* Boutons avec styles forcés */}
              <div className="questionnaire-button-override mb-6" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {currentQuestion.options.map((option, index) => {
                  const idxKey = currentQuestion.id + '_idx';
                  const selected = answers[currentQuestion.id] !== undefined && index === Number(answers[idxKey]);
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        handleAnswer(option.points);
                        setAnswers(prev => ({ ...prev, [idxKey]: index }));
                      }}
                      className={selected ? 'selected' : ''}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        padding: '0.85rem 1rem',
                        border: selected ? '2px solid #FF9933' : '2px solid #e5e7eb',
                        borderRadius: '12px',
                        backgroundColor: selected ? '#FF9933' : 'white',
                        color: selected ? 'white' : '#374151',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: '0.95rem',
                        lineHeight: '1.4',
                        boxShadow: selected ? '0 6px 20px rgba(255, 153, 51, 0.35)' : '0 1px 3px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <div style={{
                        width: '1.6rem',
                        height: '1.6rem',
                        borderRadius: '50%',
                        backgroundColor: selected ? '#e67e22' : '#d1d5db',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '0.65rem',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <span style={{ flex: 1 }}>
                        {option.text}
                      </span>
                      {option.isCorrect && selected && (
                        <CheckCircle className="w-5 h-5 ml-4" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bonus avec animation délicate */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 p-3 mb-3 rounded-r-xl"
                  >
                    <div className="flex items-start">
                      <span className="text-xl mr-2">💡</span>
                      <div>
                        <p className="font-semibold text-amber-800 mb-1 text-sm">Bonus :</p>
                        <p className="text-amber-700 leading-snug text-sm">
                          {currentQuestion.bonus}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex-1 py-3 px-6 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 transition-all duration-200 shadow-sm hover:shadow-md font-medium"
              style={{
                backgroundColor: currentStep === 0 ? '#f8fafc' : '#ffffff',
                color: '#374151',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.9rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                opacity: currentStep === 0 ? 0.5 : 1,
                cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 200ms ease'
              }}
            >
              Précédent
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={nextStep}
              disabled={!isAnswered}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-orange-500 disabled:hover:to-orange-600 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              style={{
                background: 'linear-gradient(to right, #FF9933, #e67e22)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                boxShadow: '0 4px 6px rgba(255, 153, 51, 0.3)',
                opacity: !isAnswered ? 0.5 : 1,
                cursor: !isAnswered ? 'not-allowed' : 'pointer',
                transition: 'all 200ms ease'
              }}
            >
              {currentStep === totalSteps - 1 ? "Voir mon résultat" : "Continuer"}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}