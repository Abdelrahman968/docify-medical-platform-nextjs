import AppImage from '@/components/AppImage';
import { doctorList } from '@/data/doctorList.data';
import { getTranslations } from 'next-intl/server';

export default async function TeamList() {
  const t = await getTranslations('Team');
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full p-10">
      {doctorList.map(
        ({ id, name, specialization, image, width, height, position }) => (
          <div
            key={id}
            className="relative w-full h-[340px] rounded-2xl overflow-hidden group"
            dir="ltr"
            style={{
              background:
                'linear-gradient(226.08deg, #29B2A4 -55.51%, #022D70 125.55%), linear-gradient(180.52deg, rgba(0, 0, 0, 0) 34.92%, #022D70 64.66%)',
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10" />

            <div
              className={`absolute top-0 left-0 right-0 ${position}`}
              style={{ width, height }}
            >
              <AppImage
                src={image.src}
                alt={name}
                width={width}
                height={height}
                className="w-full h-full object-cover group-hover:scale-103 transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="absolute bottom-0 right-full translate-x-full md:left-0 md:translate-x-0 p-4 z-10 w-full text-center text-white">
              <h3 className="text-[20px] font-semibold">{t(name) || name}</h3>
              <p className="text-[16px] font-medium">
                {t(specialization) || specialization}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
