import MedicalServices from '@/assets/homePage/section4/medical.svg';
import DiagnosticServices from '@/assets/homePage/section4/diagnostic.svg';
import HealthIcon from '@/assets/homePage/section4/healthicons.svg';
import CareServices from '@/assets/homePage/section4/care.svg';
import Treatment from '@/assets/homePage/section4/treatment.svg';
import Patient from '@/assets/homePage/section4/patient.svg';
import Appointment from '@/assets/homePage/section4/appointment.svg';
import Health from '@/assets/homePage/section4/health.svg';
import { StaticImageData } from 'next/image';

interface Service {
  id: number;
  img: StaticImageData;
  titleKey: string;
  descriptionKey: string;
}

export const ServicesList: Service[] = [
  {
    id: 1,
    img: MedicalServices,
    titleKey: 'medical.title',
    descriptionKey: 'medical.description',
  },
  {
    id: 2,
    img: DiagnosticServices,
    titleKey: 'diagnostic.title',
    descriptionKey: 'diagnostic.description',
  },
  {
    id: 3,
    img: HealthIcon,
    titleKey: 'followUp.title',
    descriptionKey: 'followUp.description',
  },
  {
    id: 4,
    img: CareServices,
    titleKey: 'preventive.title',
    descriptionKey: 'preventive.description',
  },
  {
    id: 5,
    img: Treatment,
    titleKey: 'treatment.title',
    descriptionKey: 'treatment.description',
  },
  {
    id: 6,
    img: Patient,
    titleKey: 'patient.title',
    descriptionKey: 'patient.description',
  },
  {
    id: 7,
    img: Appointment,
    titleKey: 'appointment.title',
    descriptionKey: 'appointment.description',
  },
  {
    id: 8,
    img: Health,
    titleKey: 'health.title',
    descriptionKey: 'health.description',
  },
];
