"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  contact: string;
  task: string;
};

export function Contacts() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacts" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">
          Давай <span className="text-accent">поговорим</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                {...register("name", { required: "Введите имя" })}
                placeholder="Ваше имя"
                className="w-full bg-card border border-white/10 rounded-2xl px-5 py-4 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent/50 transition-colors"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("contact", { required: "Укажите телефон или Telegram" })}
                placeholder="Телефон или Telegram (@username)"
                className="w-full bg-card border border-white/10 rounded-2xl px-5 py-4 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent/50 transition-colors"
              />
              {errors.contact && (
                <p className="text-red-400 text-sm mt-1">{errors.contact.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("task", { required: "Опишите задачу" })}
                placeholder="Опишите вашу задачу или вопрос"
                rows={4}
                className="w-full bg-card border border-white/10 rounded-2xl px-5 py-4 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
              {errors.task && (
                <p className="text-red-400 text-sm mt-1">{errors.task.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-accent hover:bg-accent/90 disabled:opacity-60 text-background font-semibold py-4 rounded-2xl text-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
            >
              {status === "sending" ? "Отправляем..." : "Отправить"}
            </button>

            {status === "ok" && (
              <p className="text-green-400 text-center">
                Заявка отправлена! Ответим в течение дня.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center">
                Ошибка отправки. Напишите напрямую в Telegram.
              </p>
            )}
          </form>

          <div className="flex flex-col gap-6 justify-center">
            <div>
              <p className="text-text-secondary text-sm mb-1">Telegram</p>
              <a
                href="https://t.me/dm1975_23"
                className="text-accent hover:underline text-lg font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @dm1975_23
              </a>
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">Email</p>
              <a
                href="mailto:info@автопилот-ии.рф"
                className="text-accent hover:underline text-lg font-medium"
              >
                info@автопилот-ии.рф
              </a>
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">География</p>
              <p className="text-text-primary">Калининград — онлайн по всей России</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
