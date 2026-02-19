
export interface APIItem {
  id: string;
  name: string;
  category: 'Weather' | 'Finance' | 'Maps' | 'AI' | 'Media' | 'Social' | 'Dev' | 'Fun';
  description: string;
  icon: string;
}

export interface BusinessSector {
  id: string;
  name: string;
  icon: string;
  description: string;
  benefits: string[];
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  apisUsed: string[];
  automationLogic: string;
  price?: string;
  discount?: string;
  features?: { title: string; desc: string }[];
}

export type ViewType = 'dashboard' | 'sectors' | 'api-hub' | 'ai-lab';
