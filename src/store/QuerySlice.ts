import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataPoint {
  name: string;
  value: number;
  category?: string;
}

interface QueryResult {
  type: 'line' | 'bar' | 'pie' | 'area';
  title: string;
  description: string;
  data: DataPoint[];
}

interface QueryState {
  currentQuery: string;
  queryHistory: string[];
  isLoading: boolean;
  error: string | null;
  results: QueryResult | null;
  suggestions: string[];
}

const initialState: QueryState = {
  currentQuery: '',
  queryHistory: [],
  isLoading: false,
  error: null,
  results: null,
  suggestions: [
    'Show me monthly revenue trends for 2024',
    'Compare sales performance by region',
    'What are our top 5 products by revenue?',
    'Display customer growth over time',
    'Analyze marketing campaign effectiveness',
    'Show quarterly profit margins'
  ]
};

const mockDatasets = {
  revenue: {
    type: 'area' as const,
    title: 'Monthly Revenue Trends (2024)',
    description: 'Analysis shows consistent growth with seasonal variations',
    data: [
      { name: 'Jan', value: 4500 },
      { name: 'Feb', value: 5200 },
      { name: 'Mar', value: 6100 },
      { name: 'Apr', value: 5800 },
      { name: 'May', value: 7200 },
      { name: 'Jun', value: 8400 }
    ]
  },
  sales: {
    type: 'bar' as const,
    title: 'Regional Sales Performance',
    description: 'North America leads in sales, followed by Europe',
    data: [
      { name: 'North America', value: 28000 },
      { name: 'Europe', value: 24000 },
      { name: 'Asia Pacific', value: 19000 },
      { name: 'Latin America', value: 12000 }
    ]
  },
  products: {
    type: 'pie' as const,
    title: 'Top 5 Products by Revenue',
    description: 'Premium subscription generates highest revenue share',
    data: [
      { name: 'Premium Plan', value: 35 },
      { name: 'Basic Plan', value: 25 },
      { name: 'Enterprise', value: 20 },
      { name: 'Add-ons', value: 12 },
      { name: 'Consulting', value: 8 }
    ]
  }
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setCurrentQuery: (state, action: PayloadAction<string>) => {
      state.currentQuery = action.payload;
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      if (!state.queryHistory.includes(action.payload)) {
        state.queryHistory.unshift(action.payload);
        if (state.queryHistory.length > 5) {
          state.queryHistory.pop();
        }
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setResults: (state, action: PayloadAction<QueryResult>) => {
      state.results = action.payload;
    },
    clearResults: (state) => {
      state.results = null;
    }
  }
});

export const mockQueryProcess = async (query: string): Promise<QueryResult> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const queryLower = query.toLowerCase();
  
  if (queryLower.includes('revenue') || queryLower.includes('trend')) {
    return mockDatasets.revenue;
  } else if (queryLower.includes('sales') || queryLower.includes('region')) {
    return mockDatasets.sales;
  } else if (queryLower.includes('product')) {
    return mockDatasets.products;
  }
  
  // Default fallback
  return mockDatasets.revenue;
};

export const {
  setCurrentQuery,
  addToHistory,
  setLoading,
  setError,
  setResults,
  clearResults
} = querySlice.actions;

export default querySlice.reducer;
