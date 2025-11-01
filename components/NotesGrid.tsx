'use client';

import type { Note } from '@/lib/mockData';
import NoteCard from './NoteCard';

interface NotesGridProps {
  notes: Note[];
}

export default function NotesGrid({ notes }: NotesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}