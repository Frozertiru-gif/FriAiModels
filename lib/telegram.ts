const TELEGRAM_API_BASE = 'https://api.telegram.org';

export async function sendTelegramMessage(text: string): Promise<void> {
  if (process.env.TELEGRAM_NOTIFY_ENABLED !== 'true') {
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Telegram notification enabled, but TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID are missing.');
    return;
  }

  try {
    const response = await fetch(`${TELEGRAM_API_BASE}/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error('Failed to send Telegram notification:', response.status, body);
    }
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
  }
}
