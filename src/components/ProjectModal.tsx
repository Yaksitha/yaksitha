import React, { useState } from 'react';
import { X, Play, Github, Code, CheckCircle2, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Simulator states for Voter Eligibility
  const [voterAge, setVoterAge] = useState<string>('18');
  const [voterOutput, setVoterOutput] = useState<string | null>(null);

  // Simulator states for ATM
  const [atmBalance, setAtmBalance] = useState<number>(5000);
  const [atmAmount, setAtmAmount] = useState<string>('500');
  const [atmLog, setAtmLog] = useState<string[]>([
    'Session initialized with starting balance: ₹5,000.00',
  ]);

  // Simulator states for Grade Calculator
  const [gradeMarks, setGradeMarks] = useState<string>('85');
  const [gradeOutput, setGradeOutput] = useState<{ grade: string; message: string; color: string } | null>(null);

  // Active view inside modal: Demo simulator vs Python Code
  const [modalTab, setModalTab] = useState<'demo' | 'code'>('demo');

  // Handlers
  const handleVoterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(voterAge, 10);
    if (isNaN(age) || age < 0) {
      setVoterOutput('Invalid age. Please enter a positive integer.');
      return;
    }
    const VOTING_AGE = 18;
    if (age >= VOTING_AGE) {
      setVoterOutput(`Eligible to vote! You are ${age} years old and meet the minimum age of ${VOTING_AGE}.`);
    } else {
      const remaining = VOTING_AGE - age;
      setVoterOutput(`Not eligible yet. You need ${remaining} more year${remaining > 1 ? 's' : ''} to reach voting age.`);
    }
  };

  const handleAtmDeposit = () => {
    const amt = parseFloat(atmAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmLog((prev) => ['[Error] Please enter a valid deposit amount.', ...prev]);
      return;
    }
    const newBal = atmBalance + amt;
    setAtmBalance(newBal);
    setAtmLog((prev) => [
      `[Deposit Success] Deposited ₹${amt.toLocaleString()}. New Balance: ₹${newBal.toLocaleString()}`,
      ...prev,
    ]);
  };

  const handleAtmWithdraw = () => {
    const amt = parseFloat(atmAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmLog((prev) => ['[Error] Please enter a valid withdrawal amount.', ...prev]);
      return;
    }
    if (amt > atmBalance) {
      setAtmLog((prev) => [
        `[Transaction Denied] Insufficient balance. Attempted: ₹${amt.toLocaleString()}, Available: ₹${atmBalance.toLocaleString()}`,
        ...prev,
      ]);
      return;
    }
    const newBal = atmBalance - amt;
    setAtmBalance(newBal);
    setAtmLog((prev) => [
      `[Withdrawal Success] Dispensed ₹${amt.toLocaleString()}. New Balance: ₹${newBal.toLocaleString()}`,
      ...prev,
    ]);
  };

  const handleGradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const marks = parseFloat(gradeMarks);
    if (isNaN(marks) || marks < 0 || marks > 100) {
      setGradeOutput({
        grade: 'N/A',
        message: 'Invalid marks entered. Please enter a value between 0 and 100.',
        color: 'text-rose-600',
      });
      return;
    }

    if (marks >= 90) {
      setGradeOutput({ grade: 'A+', message: 'Outstanding Performance (≥ 90%)', color: 'text-emerald-700' });
    } else if (marks >= 80) {
      setGradeOutput({ grade: 'A', message: 'Excellent (80% - 89%)', color: 'text-emerald-600' });
    } else if (marks >= 70) {
      setGradeOutput({ grade: 'B', message: 'Good Standing (70% - 79%)', color: 'text-blue-600' });
    } else if (marks >= 60) {
      setGradeOutput({ grade: 'C', message: 'Satisfactory (60% - 69%)', color: 'text-amber-600' });
    } else if (marks >= 50) {
      setGradeOutput({ grade: 'D', message: 'Passing Grade (50% - 59%)', color: 'text-orange-600' });
    } else {
      setGradeOutput({ grade: 'F', message: 'Needs Improvement (< 50%)', color: 'text-rose-600' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div>
            <span className="text-xs font-medium text-blue-600">{project.category}</span>
            <h3 id="modal-title" className="text-lg font-bold text-slate-900">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls: Interactive Simulation vs Python Code */}
        <div className="flex border-b border-slate-200 px-6 bg-white gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setModalTab('demo')}
            className={`py-3 flex items-center gap-1.5 border-b-2 transition-colors ${
              modalTab === 'demo'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            type="button"
            onClick={() => setModalTab('code')}
            className={`py-3 flex items-center gap-1.5 border-b-2 transition-colors ${
              modalTab === 'code'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Python Source Code</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {/* Tab 1: Interactive Simulator */}
          {modalTab === 'demo' && (
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              {project.interactiveType === 'voter' && (
                <form onSubmit={handleVoterSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Run Voter Verification Logic</span>
                  </div>

                  <div>
                    <label htmlFor="voter-age-input" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Enter Applicant Age (years)
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="voter-age-input"
                        type="number"
                        min="1"
                        max="120"
                        value={voterAge}
                        onChange={(e) => setVoterAge(e.target.value)}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        placeholder="e.g. 19"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Calculate
                      </button>
                    </div>
                  </div>

                  {voterOutput && (
                    <div className="p-3.5 bg-white rounded-lg border border-slate-200 text-sm">
                      <p className="text-xs font-semibold text-slate-400 mb-1">Execution Output:</p>
                      <p className="text-slate-800 font-medium">{voterOutput}</p>
                    </div>
                  )}
                </form>
              )}

              {project.interactiveType === 'atm' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      ATM Terminal Simulation
                    </span>
                    <span className="text-xs font-mono font-semibold text-emerald-600">
                      Balance: ₹{atmBalance.toLocaleString()}
                    </span>
                  </div>

                  <div>
                    <label htmlFor="atm-amount-input" className="block text-xs font-medium text-slate-700 mb-1">
                      Transaction Amount (₹)
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="atm-amount-input"
                        type="number"
                        min="100"
                        step="100"
                        value={atmAmount}
                        onChange={(e) => setAtmAmount(e.target.value)}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        placeholder="e.g. 500"
                      />
                      <button
                        type="button"
                        onClick={handleAtmDeposit}
                        className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Deposit
                      </button>
                      <button
                        type="button"
                        onClick={handleAtmWithdraw}
                        className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Withdraw
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1.5">Transaction Log:</p>
                    <div className="bg-slate-900 text-slate-300 p-3 rounded-lg font-mono text-xs max-h-32 overflow-y-auto space-y-1">
                      {atmLog.map((log, i) => (
                        <div key={i} className="leading-snug">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.interactiveType === 'grade' && (
                <form onSubmit={handleGradeSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Calculate Student Grade & Category</span>
                  </div>

                  <div>
                    <label htmlFor="grade-marks-input" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Enter Student Score (0 - 100)
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="grade-marks-input"
                        type="number"
                        min="0"
                        max="100"
                        value={gradeMarks}
                        onChange={(e) => setGradeMarks(e.target.value)}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        placeholder="e.g. 85"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Evaluate
                      </button>
                    </div>
                  </div>

                  {gradeOutput && (
                    <div className="p-3.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-slate-400">Calculated Evaluation</p>
                        <p className="text-sm font-medium text-slate-800">{gradeOutput.message}</p>
                      </div>
                      <div className={`text-2xl font-bold font-mono ${gradeOutput.color}`}>
                        {gradeOutput.grade}
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          )}

          {/* Tab 2: Python Source Code */}
          {modalTab === 'code' && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{project.id}.py</span>
                <span>Python 3</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{project.pythonSnippet}</code>
              </pre>
            </div>
          )}

          {/* Technologies breakdown */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Implemented Concepts
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-slate-600">
              {project.technologies.map((tech, i) => (
                <span key={tech} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{tech}</span>
                  {i < project.technologies.length - 1 && <span className="text-slate-300">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Open Python Repository</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-medium rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
