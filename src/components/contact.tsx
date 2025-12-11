'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
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
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Contatos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos prontos para atender você!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="bg-card border-border/50">
              <CardHeader className='flex-row items-center gap-4'>
                <Mail className="h-8 w-8 text-primary" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">comercial@indexti.com.br</p>
              </CardContent>
            </Card>
             <Card className="bg-card border-border/50">
              <CardHeader className='flex-row items-center gap-4'>
                <Phone className="h-8 w-8 text-primary" />
                <CardTitle>Telefone/WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">(51) 99999-9999</p>
              </CardContent>
            </Card>
             <Card className="bg-card border-border/50">
              <CardHeader className='flex-row items-center gap-4'>
                <MapPin className="h-8 w-8 text-primary" />
                <CardTitle>Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Porto Alegre - RS, Brasil</p>
                 <p className="text-sm text-muted-foreground">(Atendemos todo o Brasil)</p>
              </CardContent>
            </Card>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
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
                          placeholder="Como podemos ajudar?"
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
      </div>
    </section>
  );
}