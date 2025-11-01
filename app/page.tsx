'use client';

import { useState, useMemo } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import NotesGrid from '@/components/NotesGrid';
import { notes } from '@/lib/mockData';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNotes = useMemo(() => {
    if (selectedCategory === 'All') return notes;
    if (selectedCategory === 'Starred') return notes.filter(note => note.isFavorite);
    return notes.filter(note => note.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex h-screen bg-(--color-background)">
      <Sidebar 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <NotesGrid notes={filteredNotes} />
        </main>
      </div>
    </div>
  );
}