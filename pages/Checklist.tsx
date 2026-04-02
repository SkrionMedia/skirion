
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  FileDown, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Clock, 
  Activity, 
  Layers, 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar as CalendarIcon,
  Send,
  Loader2
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Checklist: React.FC = () => {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const questions = t('checklist_page.questions', { returnObjects: true }) as string[];

  const totalQuestions = questions.length;
  const negativeAnswers = Object.values(answers).filter(v => v === false).length;
  const positiveAnswers = Object.values(answers).filter(v => v === true).length;
  const answeredCount = Object.keys(answers).length;

  const toggleAnswer = (question: string, value: boolean) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(0, 82, 255); // Brand Primary
    doc.text('SKIRION.MEDIA', 105, 20, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(t('checklist_page.badge'), 105, 30, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`${t('nav.contact')}: ${new Date().toLocaleDateString()}`, 105, 38, { align: 'center' });

    // Results Summary
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(t('checklist_page.result_meaning'), 20, 50);
    
    const summaryData = [
      [t('checklist_page.progress'), totalQuestions.toString()],
      [t('checklist_page.yes'), positiveAnswers.toString()],
      [t('checklist_page.leaks_detected'), negativeAnswers.toString()],
      ['Status', negativeAnswers > 10 ? t('checklist_page.status_low') : negativeAnswers > 5 ? t('checklist_page.status_medium') : t('checklist_page.status_high')]
    ];

    (doc as any).autoTable({
      startY: 55,
      head: [[t('checklist_page.score_label'), 'Value']],
      body: summaryData,
      theme: 'striped',
      headStyles: { fillColor: [0, 82, 255] }
    });

    // Detailed Answers
    doc.text(t('checklist_page.title'), 20, (doc as any).lastAutoTable.finalY + 15);
    
    const tableData: any[] = [];
    questions.forEach((item, index) => {
      tableData.push([
        (index + 1).toString(),
        item,
        answers[item] === true ? t('checklist_page.yes') : answers[item] === false ? t('checklist_page.no_improve') : '-'
      ]);
    });

    (doc as any).autoTable({
      startY: (doc as any).lastAutoTable.finalY + 20,
      head: [['#', t('checklist_page.badge'), t('checklist_page.score_label')]],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [0, 82, 255] },
      columnStyles: {
        0: { cellWidth: 15, halign: 'center' },
        1: { cellWidth: 145 },
        2: { cellWidth: 20, halign: 'center' }
      }
    });

    // Footer
    const finalY = (doc as any).lastAutoTable.finalY;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(t('checklist_page.footer_note'), 105, finalY + 20, { align: 'center' });

    return doc;
  };

  const handleDownload = () => {
    const doc = generatePDF();
    doc.save('SKIRION_Auditoria_Eficiencia.pdf');
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSending(true);
    
    // Simulate API call to send email and capture lead
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, we would send the PDF data or a link to the backend here
    console.log('Lead captured:', email, answers);
    
    setIsSending(false);
    setIsSent(true);
    
    // Also trigger download for the user
    handleDownload();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 px-6 bg-brand-surface text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-brand-primary font-black"
          >
            <Activity size={12} className="fill-brand-primary" />
            <span>{t('checklist_page.badge')}</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-[0.85] text-gradient">
            {t('checklist_page.title')}
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto tracking-tight">
            {t('checklist_page.subtitle')}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl text-brand-primary text-sm font-black tracking-tight uppercase"
          >
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span>{t('checklist_page.warning')}</span>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="sticky top-24 z-30 bg-brand-surface/80 backdrop-blur-md py-4 mb-12 border-b border-white/5">
          <div className="flex justify-between items-center mb-2 text-[10px] uppercase tracking-widest font-black text-gray-500">
            <span>{t('checklist_page.progress')}: {answeredCount} / {totalQuestions}</span>
            <span>{negativeAnswers} {t('checklist_page.leaks_detected')}</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              className="h-full bg-brand-primary shadow-[0_0_10px_rgba(0,82,255,0.5)]"
            />
          </div>
        </div>

        {/* Checklist Content */}
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                answers[item] === true ? 'bg-emerald-500/10 border-emerald-500/20' : 
                answers[item] === false ? 'bg-red-500/10 border-red-500/20' : 
                'bg-white/5 border-white/5'
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-brand-primary font-black text-xl pt-0.5">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className={`text-lg font-black tracking-tight uppercase ${
                  answers[item] === true ? 'text-emerald-400' : 
                  answers[item] === false ? 'text-red-400' : 
                  'text-gray-300'
                }`}>
                  {item}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-auto md:ml-0">
                <button
                  onClick={() => toggleAnswer(item, true)}
                  className={`px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-black transition-all ${
                    answers[item] === true 
                      ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' 
                      : 'bg-white/5 text-gray-500 border border-white/10 hover:border-emerald-500 hover:text-emerald-500'
                  }`}
                >
                  {t('checklist_page.yes')}
                </button>
                <button
                  onClick={() => toggleAnswer(item, false)}
                  className={`px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-black transition-all ${
                    answers[item] === false 
                      ? 'bg-red-500 text-black shadow-lg shadow-red-500/20' 
                      : 'bg-white/5 text-gray-500 border border-white/10 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  {t('checklist_page.no_improve')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        {answeredCount === totalQuestions && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-24 p-12 md:p-20 glass-card border-brand-primary/20 rounded-[4rem] text-center space-y-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] pointer-events-none"></div>
            
            <div className="w-24 h-24 bg-brand-primary/10 rounded-[2rem] flex items-center justify-center text-brand-primary mx-auto">
              <Activity size={48} />
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                {t('checklist_page.result_meaning')}
              </h2>
              <p className="text-2xl text-gray-500 font-light tracking-tight max-w-2xl mx-auto">
                {t('checklist_page.result_desc', { count: negativeAnswers })}
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5 text-left">
              <p className="text-xl text-gray-400 leading-relaxed font-light tracking-tight italic">
                {negativeAnswers > 5 
                  ? t('checklist_page.result_high_risk')
                  : t('checklist_page.result_low_risk')
                }
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-lg text-gray-600 font-light tracking-tight">
                {t('checklist_page.result_footer')}
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => window.location.href = '/contacte'}
                  className="px-14 py-7 bg-brand-primary text-black font-black rounded-full hover:scale-105 transition-all duration-500 text-xs uppercase tracking-[0.4em] flex items-center gap-3 shadow-2xl shadow-brand-primary/20"
                >
                  {t('checklist_page.cta_diagnostic')} <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => setShowEmailForm(true)}
                  className="px-14 py-7 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-xs uppercase tracking-[0.4em] flex items-center gap-3"
                >
                  <FileDown size={20} /> {t('checklist_page.cta_save')}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Email Capture Modal */}
        <AnimatePresence>
          {showEmailForm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowEmailForm(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-lg bg-brand-surface border border-white/10 rounded-[3rem] p-12 shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 blur-[60px] pointer-events-none"></div>
                
                <div className="text-center space-y-8">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto">
                    <Mail size={32} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white">
                      {t('checklist_page.modal_title')}
                    </h3>
                    <p className="text-gray-500 font-light tracking-tight">
                      {t('checklist_page.modal_subtitle')}
                    </p>
                  </div>

                  {!isSent ? (
                    <form onSubmit={handleSendEmail} className="space-y-6">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('checklist_page.modal_placeholder')}
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-primary transition-colors text-lg text-white"
                        required
                      />
                      <button 
                        disabled={isSending}
                        className="w-full py-5 bg-brand-primary text-black font-black rounded-2xl hover:scale-[1.02] transition-all text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/20 disabled:opacity-50"
                      >
                        {isSending ? (
                          <>
                            <Loader2 size={18} className="animate-spin" /> {t('checklist_page.modal_button_sending')}
                          </>
                        ) : (
                          <>
                            {t('checklist_page.modal_button_send')} <Send size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400"
                    >
                      <CheckCircle2 size={48} className="mx-auto mb-4 text-emerald-500" />
                      <p className="font-black uppercase tracking-widest text-sm mb-2">{t('checklist_page.modal_success_title')}</p>
                      <p className="text-sm opacity-80">{t('checklist_page.modal_success_desc')}</p>
                      <button 
                        onClick={() => setShowEmailForm(false)}
                        className="mt-6 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:underline"
                      >
                        {t('checklist_page.modal_close')}
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Footer Note */}
        <div className="mt-24 text-center text-gray-400 text-[10px] uppercase tracking-[0.3em] font-black">
          {t('checklist_page.footer_note')}
        </div>
      </div>
    </motion.div>
  );
};

export default Checklist;

