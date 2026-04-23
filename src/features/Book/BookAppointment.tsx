'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import AppointmentImage from '@/assets/appointment/booking.jpg';
import { BiCalendar, BiChevronDown } from 'react-icons/bi';
import AppImage from '@/components/AppImage';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}

interface DateTimeFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: 'date' | 'time';
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`
          w-full appearance-none bg-white border border-gray-200 rounded-xl
          px-4 py-3 pr-10 text-sm outline-none cursor-pointer
          focus:border-[#29B2A4] focus:ring-1 focus:ring-[#29B2A4]/30
          transition-colors duration-200 shadow-sm
          ${value ? 'text-gray-800' : 'text-gray-400'}
        `}
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <BiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}

function DateTimeField({ label, value, onChange, type }: DateTimeFieldProps) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={label}
        className={`
          w-full bg-white border border-gray-200 rounded-xl
          px-4 py-3 text-sm outline-none
          focus:border-[#29B2A4] focus:ring-1 focus:ring-[#29B2A4]/30
          transition-colors duration-200 shadow-sm
          ${value ? 'text-gray-800' : 'text-gray-400'}
          [&:not([value])]:text-gray-400
        `}
      />
      {!value && (
        <div className="absolute inset-0 flex items-center px-4 pointer-events-none">
          <span className="text-sm text-gray-400">{label}</span>
        </div>
      )}
      <BiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BookAppointment() {
  const t = useTranslations('Appointment');

  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const departmentOptions = [
    { value: 'neurology', label: t('dept_neurology') },
    { value: 'dermatology', label: t('dept_dermatology') },
    { value: 'internal', label: t('dept_internal') },
    { value: 'dentistry', label: t('dept_dentistry') },
  ];

  const doctorOptions = [
    { value: '1', label: 'Dr. Mohamed Hassan' },
    { value: '2', label: 'Dr. Ahmed Saleh' },
    { value: '3', label: 'Dr. Amira Abdelrahman' },
    { value: '4', label: 'Dr. Sara Ahmed' },
  ];

  const serviceOptions = [
    { value: 'consultation', label: t('service_consultation') },
    { value: 'followup', label: t('service_followup') },
    { value: 'checkup', label: t('service_checkup') },
  ];

  const totalPrice = 0.0;

  const handleCheckout = () => {
    console.log({ department, doctor, serviceType, date, time });
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-[#f0f2f7] mb-10">
      {/* ── Left: Form ── */}
      <div className="flex-1 p-8 md:p-10 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('title')}</h2>

        <SelectField
          label={t('select_department')}
          value={department}
          onChange={setDepartment}
          options={departmentOptions}
        />

        <SelectField
          label={t('choose_doctor')}
          value={doctor}
          onChange={setDoctor}
          options={doctorOptions}
        />

        <SelectField
          label={t('service_type')}
          value={serviceType}
          onChange={setServiceType}
          options={serviceOptions}
        />

        <DateTimeField
          label={t('select_date')}
          value={date}
          onChange={setDate}
          type="date"
        />

        <DateTimeField
          label={t('select_time')}
          value={time}
          onChange={setTime}
          type="time"
        />

        {/* Total Price Row */}
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
          <span className="text-sm text-gray-500">{t('total_price')}</span>
          <span className="text-sm font-semibold text-gray-800">
            {totalPrice.toFixed(2)} {t('currency')}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={handleCheckout}
          className="w-full py-3.5 rounded-xl text-white font-semibold text-sm
                     bg-linear-to-r from-[#29B2A4] to-[#022D70]
                     hover:opacity-90 active:scale-[0.98]
                     transition-all duration-200 shadow-md mt-2"
        >
          {t('go_to_checkout')}
        </button>
      </div>

      {/* ── Right: Image ── */}
      <div className="hidden md:block w-[45%] relative">
        <AppImage
          src={AppointmentImage}
          alt="Book appointment"
          fill
          className="object-cover"
          sizes="45vw"
        />
      </div>
    </div>
  );
}
