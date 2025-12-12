'use server';

import { contactFormSchema } from './schemas';

export async function submitContactForm(data: unknown) {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      error: 'Dados inválidos. Por favor, verifique os campos.',
    };
  }
  
  const { name, email, company, message } = parsed.data;

  // Simulate sending an email or saving to DB
  console.log('New contact form submission:');
  console.log({ name, email, company, message });
  
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate a potential error
  // if (Math.random() > 0.5) {
  //   return {
  //     success: false,
  //     error: "Ocorreu um erro inesperado. Tente novamente."
  //   }
  // }

  return {
    success: true,
  };
}
