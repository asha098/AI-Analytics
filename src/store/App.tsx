import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsDisplay from './components/ResultsDisplay';
import { Database, Sparkles } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Gen AI Analytics</h1>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium">AI-Powered Insights</span>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            <div className="flex flex-col items-center gap-8">
              <div className="text-center max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ask Questions, Get Insights
                </h2>
                <p className="text-lg text-gray-600">
                  Use natural language to query your data. Our AI will understand your question
                  and provide relevant insights through beautiful visualizations.
                </p>
              </div>
              <QueryInput />
              <QueryHistory />
            </div>
            <ResultsDisplay />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
