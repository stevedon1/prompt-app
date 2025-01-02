import { subjects } from '@/libs'
import Link from 'next/link'
import React from 'react'


export default function Subjects() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <p className="text-2xl font-bold text-center mb-6">Subjects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <Link
            href={`/subjects/${subject.id}`}
            key={subject.id}
            className="block p-4 bg-white shadow-md rounded-lg hover:bg-blue-50 hover:shadow-lg transition duration-300"
          >
            <h1 className="text-lg font-semibold text-slate-800">
              {subject.title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}


