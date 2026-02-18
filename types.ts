export enum PageRoute {
  HOME = '/',
  EZ_EV = '/ez-ev',
  JUNK_DEMO = '/junk-removal-demolition',
  ROOFING = '/roofing-nyc',
  GENERAL_CONSTRUCTION = '/general-construction',
  SERVICE_AREAS = '/service-areas-nyc',
  ABOUT = '/about-aviel',
  GET_QUOTE = '/get-quote',
  COMMERCIAL = '/commercial-property-management'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'renovation' | 'ev';
}

export interface ProjectParams {
  budget: string;
  timeline: string;
  description: string;
}

export interface AiConsultationResponse {
  summary: string;
  estimatedTier: 'Budget' | 'Standard' | 'Premium' | 'Luxury';
  recommendation: string;
}