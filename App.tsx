import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  RotateCcw, 
  Play, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  ChevronRight,
  Target,
  Zap,
  Info,
  Trophy,
  Star
} from 'lucide-react';
import { VERB_THEORY, GAME_1_QUESTIONS, GAME_2_QUESTIONS, ASSETS } from './constants';

export default function App() {
  const [gameState, setGameState] = useState<'start' | 'theory' | 'playing' | 'end'>('start');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const currentQuestions = useMemo(() => {
    return currentLevel === 1 ? GAME_1_QUESTIONS : GAME_2_QUESTIONS;
  }, [currentLevel]);

  const currentQuestion = currentQuestions[currentIndex];

  const handleChoice = (choice: string) => {
    if (feedback) return;

    if (choice === currentQuestion.target) {
      setFeedback('correct');
      setScore(s => s + 1);
      setTimeout(() => {
        nextStep();
      }, 1200);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        nextStep();
      }, 1800);
    }
  };

  const nextStep = () => {
    setFeedback(null);
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      if (currentLevel === 1) {
        setGameState('end'); // Level completion
      } else {
        setGameState('end'); // Final completion
      }
    }
  };

  const startLevel2 = () => {
    setCurrentLevel(2);
    setCurrentIndex(0);
    setGameState('playing');
    setFeedback(null);
  };

  const restart = () => {
    setGameState('start');
    setCurrentLevel(1);
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-blue-600 font-sans flex flex-col items-center justify-start py-8 px-4 relative overflow-x-hidden overflow-y-auto">
      
      {/* Colorful Background Elements */}
      <div className="fixed top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-700 pointer-events-none" />
      <div className="fixed inset-0 bg-blue-700/20 -z-10 pointer-events-none" />

      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full max-w-xl bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-500" />
            
            <div className="mb-10 flex justify-center items-center gap-4">
              <div className="relative group">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-blue-50"
                >
                   <img src={ASSETS.KITTEN} alt="Kitten" className="w-full h-full object-cover" />
                </motion.div>
                <div className="absolute -bottom-2 -left-2 bg-pink-500 px-3 py-0.5 rounded-full text-[8px] font-black uppercase text-white">Miau</div>
              </div>

              <div className="relative">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-yellow-400 shadow-xl bg-blue-50">
                   <img src={ASSETS.ERNESTO} alt="Ernesto" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-orange-500 p-4 rounded-2xl shadow-lg border-4 border-white">
                   <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 text-blue-900 tracking-tight leading-none uppercase">
              ERNESTO'S<br/><span className="text-orange-500">VERB TRAINING</span>
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest mb-10 text-xs">2 Games • 4 Verbs • 15 Steps</p>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setGameState('theory')}
                className="w-full py-6 bg-blue-100 hover:bg-blue-200 text-blue-900 rounded-2xl font-black text-xl flex items-center justify-center gap-4 transition-all"
              >
                <BookOpen className="w-6 h-6" />
                VIEW THEORY
              </button>
              <button 
                onClick={() => setGameState('playing')}
                className="w-full py-8 bg-orange-500 text-white rounded-[2rem] font-black text-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 shadow-xl border-b-8 border-orange-700"
              >
                <Play className="w-8 h-8 fill-current" />
                START LEVEL 1
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'theory' && (
          <motion.div
            key="theory"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="w-full max-w-2xl bg-white rounded-[2rem] md:rounded-[3rem] p-4 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b-4 border-yellow-100">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-blue-900 uppercase italic">theory</h2>
               </div>
               <button onClick={() => setGameState('start')} className="p-2 hover:bg-slate-100 rounded-full transition-all">
                 <X className="w-8 h-8 text-slate-400" />
               </button>
            </div>

            <div className="space-y-6 md:space-y-8 mb-10">
               {VERB_THEORY.map((t, idx) => (
                 <div key={idx} className="bg-yellow-50 p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-yellow-200">
                    <h3 className="text-xl md:text-2xl font-black text-orange-600 mb-2">{t.verb}</h3>
                    <p className="text-slate-600 font-bold mb-4 text-sm">{t.meaning}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                       {t.conjugations.map((c, i) => (
                         <div key={i} className="bg-white p-3 rounded-xl border border-yellow-300 flex justify-between items-center gap-3">
                            <span className="text-slate-400 font-bold text-[10px] md:text-sm">{c.subject}</span>
                            <span className="text-blue-700 font-black italic text-xs md:text-sm whitespace-nowrap">{c.form}</span>
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>

            <button 
              onClick={() => setGameState('playing')}
              className="w-full py-8 bg-blue-600 text-white rounded-[2rem] font-black text-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-4 border-b-8 border-blue-900"
            >
              READY TO PLAY <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl flex flex-col items-center gap-6"
          >
            <div className="w-full flex justify-between items-center mb-4 px-2 md:px-4">
               <div className="bg-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 md:gap-4 shadow-lg border-2 border-yellow-400">
                  <img src={ASSETS.ERNESTO} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-yellow-400 object-cover" />
                  <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-4">
                    <span className="text-slate-400 font-bold uppercase text-[8px] md:text-[10px] tracking-widest leading-none">Level {currentLevel}</span>
                    <span className="text-sm md:text-2xl font-black text-blue-900 leading-none">{currentIndex + 1} / {currentQuestions.length}</span>
                  </div>
               </div>
               <div className="bg-orange-500 px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 md:gap-4 shadow-lg border-2 border-white">
                  <img src={ASSETS.KITTEN} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover" />
                  <span className="text-sm md:text-2xl font-black text-white">{score}</span>
               </div>
            </div>

            <div className="w-full bg-white rounded-[2.5rem] md:rounded-[4rem] p-4 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.2)] relative overflow-hidden border-b-[8px] md:border-b-[12px] border-slate-100 flex flex-col">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Zap className="w-32 h-32 text-orange-500" />
               </div>

               <div className="relative z-10">
                  <div className="mb-8 md:mb-10 text-center">
                     <h2 className="text-2xl md:text-5xl font-black text-blue-900 mb-4 md:mb-6 leading-tight italic">
                        "{currentQuestion.prompt}"
                     </h2>
                     <div className="bg-blue-50 px-6 py-2 rounded-full inline-block border border-blue-100">
                        <p className="text-blue-500 font-bold italic text-xs md:text-lg">
                           ({currentQuestion.translation})
                        </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                     {currentQuestion.choices.map(choice => (
                       <button
                         key={choice}
                         disabled={!!feedback}
                         onClick={() => handleChoice(choice)}
                         className={`py-6 md:py-8 rounded-2xl md:rounded-[2rem] font-black text-xl md:text-3xl transition-all border-b-6 md:border-b-8 transform active:scale-95 relative overflow-hidden ${
                           feedback === 'correct' && choice === currentQuestion.target
                             ? 'bg-emerald-500 border-emerald-800 text-white scale-105 shadow-xl'
                             : feedback === 'incorrect' && choice === choice
                             ? choice === currentQuestion.target ? 'bg-orange-400 border-orange-700 text-white' : 'bg-rose-500 border-rose-800 text-white'
                             : 'bg-yellow-400 border-yellow-600 text-blue-900 hover:bg-yellow-300 hover:translate-y-[-4px]'
                         }`}
                       >
                          {choice.toUpperCase()}
                       </button>
                     ))}
                  </div>
               </div>

               <AnimatePresence>
                  {feedback && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-md rounded-[2.5rem] md:rounded-[4rem] ${feedback === 'correct' ? 'bg-emerald-100/90' : 'bg-rose-100/90'}`}
                    >
                       {feedback === 'correct' ? (
                          <div className="flex flex-col items-center animate-bounce">
                             <CheckCircle2 className="w-16 h-16 md:w-24 md:h-24 text-emerald-600 mb-4" />
                             <span className="text-3xl md:text-5xl font-black text-emerald-700 uppercase italic">¡FANTÁSTICO!</span>
                          </div>
                       ) : (
                          <div className="flex flex-col items-center">
                             <AlertCircle className="w-16 h-16 md:w-24 md:h-24 text-rose-600 mb-4" />
                             <span className="text-2xl md:text-4xl font-black text-rose-700 uppercase mb-4 italic text-center">CORRECT: {currentQuestion.target.toUpperCase()}</span>
                          </div>
                       )}
                    </motion.div>
                  )}
               </AnimatePresence>
            </div>
          </motion.div>
        )}

        {gameState === 'end' && (
          <motion.div
            key="end"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl bg-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 shadow-2xl text-center relative overflow-hidden"
          >
             <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-400" />
             
             <div className="mb-8 flex justify-center">
               <div className="relative">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-emerald-400 flex items-center justify-center shadow-2xl bg-blue-50">
                      <Trophy className="w-16 h-16 md:w-24 md:h-24 text-yellow-500" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 p-3 rounded-xl rotate-12 shadow-xl border-4 border-white">
                      <Star className="w-6 h-6 md:w-8 md:h-8 text-white fill-current" />
                  </div>
               </div>
             </div>
             
             <h1 className="text-4xl md:text-5xl font-black mb-2 text-blue-900 italic uppercase leading-none">
                {currentLevel === 1 ? 'LEVEL 1 CLEAR!' : 'MASTER!'}
             </h1>
             <p className="text-slate-400 font-bold uppercase tracking-[0.3em] mb-10 text-[10px] md:text-sm">
                {currentLevel === 1 ? 'Next: Hear & Write challenge' : 'All challenges complete'}
             </p>
             
             <div className="bg-blue-50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] mb-10 border-2 border-blue-100 flex flex-col items-center">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Current Score</span>
                <div className="text-6xl md:text-8xl font-black text-blue-900 mb-2 leading-none">{score}</div>
                <div className="text-sm md:text-xl font-bold text-blue-600 uppercase tracking-widest">Great work!</div>
             </div>

             {currentLevel === 1 ? (
               <button 
                 onClick={startLevel2}
                 className="w-full py-6 md:py-8 bg-orange-500 text-white rounded-[2rem] md:rounded-[2.5rem] font-black text-xl md:text-2xl hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-4 border-b-8 border-orange-700"
               >
                 GO TO LEVEL 2 <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
               </button>
             ) : (
               <button 
                 onClick={restart}
                 className="w-full py-6 md:py-8 bg-blue-600 text-white rounded-[2rem] md:rounded-[2.5rem] font-black text-xl md:text-2xl hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-4 border-b-8 border-blue-900"
               >
                 <RotateCcw className="w-6 h-6 md:w-8 md:h-8" />
                 REPLAY TRAINING
               </button>
             )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
