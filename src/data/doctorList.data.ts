import MohamedImage from '@/assets/homePage/team/mohamed.png';
import AhmedImage from '@/assets/homePage/team/ahmed.png';
import AmiraImage from '@/assets/homePage/team/amira.png';
import SaraImage from '@/assets/homePage/team/sara.png';
import { StaticImageData } from 'next/image';

export interface SocialLink {
  type: 'phone' | 'email' | 'whatsapp' | 'facebook' | 'instagram' | 'x';
  href: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: StaticImageData;
  width: number;
  height: number;
  position: string;
  doctorPageClassName?: string;
  description: string;
  subtitle: string;
  qualification: string[];
  certifications: string[];
  areasOfExpertise: string[];
  experience: string;
  socials?: SocialLink[];
}

export const doctorList: Doctor[] = [
  {
    id: 1,
    name: 'name_one',
    specialization: 'specialization_one',
    image: MohamedImage,
    width: 335,
    height: 582,
    position: 'top-[-30px] left-[-23px]',
    doctorPageClassName:
      'top-[312px] left-[48%] -translate-x-1/2 -translate-y-1/2 scale-140',
    description: 'description_one',
    subtitle: 'subtitle_one',
    qualification: ['qualification_one'],
    certifications: ['certification_one_a', 'certification_one_b'],
    areasOfExpertise: [
      'expertise_one_a',
      'expertise_one_b',
      'expertise_one_c',
      'expertise_one_d',
      'expertise_one_e',
      'expertise_one_f',
    ],
    experience: 'experience_one',
    socials: [
      { type: 'phone', href: 'tel:+1234567890' },
      { type: 'email', href: 'mailto:dr.hassan@example.com' },
      { type: 'whatsapp', href: 'https://wa.me/1234567890' },
      { type: 'facebook', href: 'https://facebook.com/' },
      { type: 'instagram', href: 'https://instagram.com/' },
      { type: 'x', href: 'https://x.com/' },
    ],
  },
  {
    id: 2,
    name: 'name_two',
    specialization: 'specialization_two',
    image: AhmedImage,
    width: 305,
    height: 354,
    position: 'top-[30px] left-[11px]',
    doctorPageClassName:
      'top-[335px] left-[50%] -translate-x-1/2 -translate-y-1/2 scale-90',
    description: 'description_two',
    subtitle: 'subtitle_two',
    qualification: ['qualification_two'],
    certifications: ['certification_two_a'],
    areasOfExpertise: ['expertise_two_a', 'expertise_two_b', 'expertise_two_c'],
    experience: 'experience_two',
    socials: [
      { type: 'phone', href: 'tel:+1234567891' },
      { type: 'email', href: 'mailto:dr.ahmed@example.com' },
      { type: 'facebook', href: 'https://facebook.com/' },
    ],
  },
  {
    id: 3,
    name: 'name_three',
    specialization: 'specialization_three',
    image: AmiraImage,
    width: 382,
    height: 764,
    position: 'top-[-51px] left-[-45px]',
    doctorPageClassName:
      'top-[339px] left-[50%] -translate-x-1/2 -translate-y-1/2 scale-70',
    description: 'description_three',
    subtitle: 'subtitle_three',
    qualification: ['qualification_three'],
    certifications: ['certification_three_a', 'certification_three_b'],
    areasOfExpertise: [
      'expertise_three_a',
      'expertise_three_b',
      'expertise_three_c',
      'expertise_three_d',
    ],
    experience: 'experience_three',
    socials: [
      { type: 'phone', href: 'tel:+1234567892' },
      { type: 'email', href: 'mailto:dr.amira@example.com' },
      { type: 'instagram', href: 'https://instagram.com/' },
    ],
  },
  {
    id: 4,
    name: 'name_four',
    specialization: 'specialization_four',
    image: SaraImage,
    width: 335,
    height: 350,
    position: 'left-[16px] lg:left-[-23px]',
    doctorPageClassName: 'bottom-[-10%] left-[50%] -translate-x-1/2 scale-90',
    description: 'description_four',
    subtitle: 'subtitle_four',
    qualification: ['qualification_four'],
    certifications: ['certification_four_a'],
    areasOfExpertise: [
      'expertise_four_a',
      'expertise_four_b',
      'expertise_four_c',
    ],
    experience: 'experience_four',
    socials: [
      { type: 'phone', href: 'tel:+1234567893' },
      { type: 'email', href: 'mailto:dr.sara@example.com' },
      { type: 'facebook', href: 'https://facebook.com/' },
    ],
  },
];
