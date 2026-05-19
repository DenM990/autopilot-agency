import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, contact, task } = body;

  if (!name || !contact || !task) {
    return NextResponse.json({ error: "Заполните все поля" }, { status: 400 });
  }

  const text = `📩 <b>Новая заявка с сайта</b>\n\n<b>Имя:</b> ${name}\n<b>Контакт:</b> ${contact}\n<b>Задача:</b> ${task}`;

  await sendTelegramMessage(text);

  return NextResponse.json({ success: true });
}
