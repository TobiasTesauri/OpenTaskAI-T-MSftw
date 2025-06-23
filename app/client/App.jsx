
import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import Assistant from './components/Assistant';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app dark:bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">OpenTaskAI</h1>
      <KanbanBoard />
      <Assistant />
      <Footer />
    </div>
  );
}
