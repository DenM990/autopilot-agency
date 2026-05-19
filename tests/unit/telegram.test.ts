import { describe, it, expect, vi, beforeEach } from "vitest";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("sendTelegramMessage", () => {
  beforeEach(() => {
    mockFetch.mockClear();
    process.env.TELEGRAM_BOT_TOKEN = "test-token";
    process.env.TELEGRAM_CHAT_ID = "123456";
    vi.resetModules();
  });

  it("отправляет POST запрос к Telegram API", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ ok: true }),
    });

    const { sendTelegramMessage } = await import("../../lib/telegram");
    await sendTelegramMessage("Тестовое сообщение");

    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.telegram.org/bottest-token/sendMessage",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.stringContaining("Тестовое сообщение"),
      })
    );
  });

  it("выбрасывает ошибку если Telegram вернул not ok", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ ok: false, description: "Bad token" }),
    });

    const { sendTelegramMessage } = await import("../../lib/telegram");
    await expect(sendTelegramMessage("test")).rejects.toThrow("Telegram API error");
  });
});
