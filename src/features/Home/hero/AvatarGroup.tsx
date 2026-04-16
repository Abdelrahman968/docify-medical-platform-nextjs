import Avatar1 from '@/assets/homePage/AvatarGroup/avatar-1.jpg';
import Avatar2 from '@/assets/homePage/AvatarGroup/avatar-2.jpg';
import Avatar3 from '@/assets/homePage/AvatarGroup/avatar-3.jpg';
import Avatar4 from '@/assets/homePage/AvatarGroup/avatar-4.jpg';
import AppImage from '@/components/AppImage';
import { getTranslations } from 'next-intl/server';

const avatars = [
  { id: 1, src: Avatar1.src },
  { id: 2, src: Avatar2.src },
  { id: 3, src: Avatar3.src },
  { id: 4, src: Avatar4.src },
];

export default async function AvatarGroup() {
  const t = await getTranslations('HeroHomePage');
  return (
    <div className="flex items-center">
      {avatars.map(({ id, src }, index) => (
        <div key={id} className={index !== 0 ? '-ml-3' : ''}>
          <AppImage
            src={src}
            alt={t('avatar') || 'Avatar'}
            width={40}
            height={40}
            className="rounded-full border-2 border-white hover:scale-110 transition-transform"
            title={t('avatar') || 'Avatar'}
          />
        </div>
      ))}
    </div>
  );
}
