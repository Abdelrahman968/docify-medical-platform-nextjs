import { getTranslations } from 'next-intl/server';
import { AiOutlineClose } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';

const featuresList = [
  {
    id: 1,
    txt: 'Wide_Range_of_Specialties',
    check: true,
  },
  {
    id: 2,
    txt: 'Trusted_Medical_Team',
    check: true,
  },
  {
    id: 3,
    txt: 'Fast_Easy_Booking',
    check: true,
  },
  {
    id: 4,
    txt: 'Flexible_Scheduling',
    check: true,
  },
];

export default async function FeaturesList() {
  const t = await getTranslations('MedicalSupport');
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start max-w-[624px] mx-auto lg:mx-0">
      {featuresList.map(({ id, txt, check }) => (
        <div key={id} className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-white"
            style={{
              background: check
                ? 'linear-gradient(180deg, #29B2A4 0%, #022D70 100%)'
                : 'linear-gradient(180deg, #FF0000 0%, #FF0000 100%)',
            }}
          >
            {check ? (
              <BiCheck className="w-4 h-4" />
            ) : (
              <AiOutlineClose className="w-4 h-4" />
            )}
          </div>
          <p className="text-black font-medium text-[16px]">{t(txt) || txt}</p>
        </div>
      ))}
    </div>
  );
}
