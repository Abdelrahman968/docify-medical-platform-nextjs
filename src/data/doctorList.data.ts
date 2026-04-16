import MohamedImage from '@/assets/homePage/team/mohamed.png';
import AhmedImage from '@/assets/homePage/team/ahmed.png';
import AmiraImage from '@/assets/homePage/team/amira.png';
import SaraImage from '@/assets/homePage/team/sara.png';
import { StaticImageData } from 'next/image';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: StaticImageData;
  width: number;
  height: number;
  position: string;
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
  },
  {
    id: 2,
    name: 'name_two',
    specialization: 'specialization_two',
    image: AhmedImage,
    width: 305,
    height: 354,
    position: 'top-[30px] left-[11px]',
  },
  {
    id: 3,
    name: 'name_three',
    specialization: 'specialization_three',
    image: AmiraImage,
    width: 382,
    height: 764,
    position: 'top-[-51px] left-[-45px]',
  },
  {
    id: 4,
    name: 'name_four',
    specialization: 'specialization_four',
    image: SaraImage,
    width: 335,
    height: 350,
    position: 'left-[16px] lg:left-[-23px]',
  },
];
