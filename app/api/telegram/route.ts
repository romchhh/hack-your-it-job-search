import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const botToken =
      process.env.TELEGRAM_BOT_TOKEN ||
      process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId =
      process.env.TELEGRAM_CHAT_ID ||
      process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return new Response(
        JSON.stringify({ message: "Telegram credentials are not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { name, phone, telegram, interest } = await req.json();

    const message = `
Нова заявка з форми:
Ім'я: ${name}
Телефон: ${phone}
Telegram: ${telegram}
Цікавість у марафоні по пошуку роботи: ${interest || "Не вказано"}
    `.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram");
    }

    return new Response(
      JSON.stringify({ message: "Message sent to Telegram successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return new Response(
      JSON.stringify({
        message: "Error sending message to Telegram",
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
