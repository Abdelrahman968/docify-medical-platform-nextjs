'use client';
import { Link } from '@/i18n/navigation';
import { Button } from '@heroui/react';

export default function Btn({
  txt,
  href,
  height = 'h-10',
  width = 'w-40',
}: {
  txt: string;
  href: string;
  height?: string;
  width?: string;
}) {
  return (
    <Button
      className={`bg-linear-to-b from-[#29B2A4] to-[#022D70] text-white ${height ? height : 'h-10'} ${width ? width : 'w-40'} rounded-full font-medium shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-102 hover:cursor-pointer active:scale-98 focus:scale-98 focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29B2A4] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg disabled:focus:scale-98 disabled:focus:shadow-2xl disabled:focus:outline-none disabled:focus:ring-2 disabled:focus:ring-offset-2 disabled:focus:ring-offset-white disabled:focus:ring-[#29B2A4] border-2 border-white`}
    >
      <Link href={href}>{txt}</Link>
    </Button>
  );
}
