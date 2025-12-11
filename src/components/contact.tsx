'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { contactFormSchema, type ContactFormValues } from '@/app/schemas';

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { formState } = form;

  async function onSubmit(values: ContactFormValues) {
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: 'Mensagem Enviada!',
        description: 'Obrigado por entrar em contato. Retornaremos em breve.',
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Falha no Envio',
        description: result.error || 'Ocorreu um erro. Por favor, tente novamente.',
      });
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <Mail className="h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tem um projeto em mente ou alguma dúvida? Preencha o formulário e nossa equipe entrará em contato com você.
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu.email@exemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Conte-nos sobre seu projeto ou dúvida"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
                {formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
