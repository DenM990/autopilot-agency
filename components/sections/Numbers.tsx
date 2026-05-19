"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 3, label: "реализованных продукта", prefix: "" },
  { value: 200, label: "часов рутины автоматизировано", prefix: "~" },
  { value: 3, label: "отрасли автоматизации", prefix: "" },
  { value: 0, label: "шаблонных решений", prefix: "" },
];

function Counter({ value, prefix }: { value: number; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count}</span>;
}

export function Numbers() {
  return (
    <section id="numbers" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-text-primary">
          В <span className="text-accent">цифрах</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <div className="text-5xl font-bold text-accent">
                <Counter value={stat.value} prefix={stat.prefix} />
              </div>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
