import type { NextApiRequest, NextApiResponse } from 'next';

// Интерфейс для данных контактной формы
interface ContactData {
  name: string;
  email: string;
  message: string;
}

// Интерфейс для ответа API
interface ApiResponse {
  success: boolean;
  message: string;
}

/**
 * Обработчик API для контактной формы
 * Получает данные формы, валидирует их и отправляет ответ
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Проверка метода запроса
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  const { name, email, message } = req.body as ContactData;

  // Валидация обязательных полей
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Логируем данные в консоль (согласно требованиям)
  console.log('Contact form data received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // В реальном проекте здесь был бы код для сохранения данных в БД
  // или отправки их по электронной почте с использованием сервисов
  // типа SendGrid, Mailgun и т.д.

  // Возвращаем успешный ответ в требуемом формате
  return res.status(200).json({
    success: true,
    message: `Thank you for your interest, ${name}`
  });
}