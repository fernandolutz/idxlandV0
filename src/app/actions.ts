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

  // TODO: Implementar a lógica de envio de email aqui.
  // Você pode usar serviços como Resend, SendGrid, ou Nodemailer.
  // Exemplo com Resend:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'seu-email@dominio.com',
  //   subject: `Nova mensagem de ${name}`,
  //   html: `<p>Você recebeu uma nova mensagem de contato:</p>
  //          <p><strong>Nome:</strong> ${name}</p>
  //          <p><strong>Email:</strong> ${email}</p>
  //          <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
  //          <p><strong>Mensagem:</strong></p>
  //          <p>${message}</p>`
  // });

  console.log('New contact form submission:');
  console.log({ name, email, company, message });
  
  await new Promise(resolve => setTimeout(resolve, 1500));


  return {
    success: true,
  };
}
