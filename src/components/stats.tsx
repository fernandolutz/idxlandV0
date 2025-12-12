'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 6, label: 'Anos de mercado', suffix: '+' },
  { value: 30000, label: 'Usuários', suffix: '+' },
  { value: 100, label: 'Clientes atendidos', suffix: '+' },
];

const StatItem = ({
  value,
  label,
  suffix,
}: {
  value: number;
  label: string;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1500;
      // Adjust increment for larger numbers to avoid performance issues
      const step = Math.max(1, Math.floor(end / (duration / 16)));


      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString('pt-BR');
    }
    return num;
  }

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-bold text-white flex items-center justify-center">
        <span>{formatNumber(count)}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-sm md:text-base text-gray-300 mt-2">{label}</p>
    </div>
  );
};


export default function Stats() {
  return (
    <section className="w-full py-20 bg-gray-900 text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/patterns/wavy-pattern.svg')" }}
      ></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-12">
            <div className="md:col-span-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Nossos <br/>
                    <span className="text-primary">Números</span>
                </h2>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12">
                {stats.map((stat, index) => (
                    <StatItem key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
