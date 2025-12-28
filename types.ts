export enum ServiceType {
  EXPRESS = 'Express',
  PROGRAMADO = 'Programado'
}

export interface ServiceRate {
  id: ServiceType;
  name: string;
  ratePerKm: number;
  description: string;
}

export const SERVICES: Record<ServiceType, ServiceRate> = {
  [ServiceType.EXPRESS]: {
    id: ServiceType.EXPRESS,
    name: 'Express',
    ratePerKm: 1.80,
    description: 'Prioridad Máxima'
  },
  [ServiceType.PROGRAMADO]: {
    id: ServiceType.PROGRAMADO,
    name: 'Programado',
    ratePerKm: 1.50,
    description: 'Entrega Planificada'
  }
};