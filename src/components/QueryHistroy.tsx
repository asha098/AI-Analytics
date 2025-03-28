import React from 'react';
import { History, ArrowRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentQuery } from '../store/querySlice';
import type { RootState } from '../store/store';

export default function QueryHistory() {
  const dispatch = useDispatch();
  const { queryHistory } = useSelector((state: RootState) => state.query);

  if (queryHistory.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="flex items-center gap-2 mb-3 text-gray-600">
        <History className="h-4 w-4" />
        <h2 className="text-sm font-medium">Recent Queries</h2>
      </div>
      <div className="space-y-2">
        {queryHistory.slice(0, 5).map((query, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => dispatch(setCurrentQuery(query))}
          >
            <ArrowRight className="h-4 w-4 text-gray-400" />
            {query}
          </button>
        ))}
      </div>
    </div>
  );
}
