import React, { useState } from 'react';
import { Search, Send, Sparkles } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuery, addToHistory, setLoading, setResults, setError, mockQueryProcess } from '../store/querySlice';
import type { RootState } from '../store/store';

export default function QueryInput() {
  const dispatch = useDispatch();
  const { currentQuery, suggestions } = useSelector((state: RootState) => state.query);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuery.trim()) return;

    dispatch(setLoading(true));
    dispatch(setError(null));
    dispatch(addToHistory(currentQuery));

    try {
      const results = await mockQueryProcess(currentQuery);
      dispatch(setResults(results));
    } catch (error) {
      dispatch(setError('Failed to process query'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="relative w-full max-w-3xl">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-blue-600">
            <Search className="h-5 w-5" />
            <Sparkles className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={currentQuery}
            onChange={(e) => dispatch(setCurrentQuery(e.target.value))}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Ask your data question..."
            className="w-full pl-16 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>

      {showSuggestions && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full text-left px-6 py-3 hover:bg-blue-50 transition-colors flex items-center gap-3 border-b border-gray-100 last:border-none"
              onClick={() => {
                dispatch(setCurrentQuery(suggestion));
                setShowSuggestions(false);
              }}
            >
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-gray-700">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
