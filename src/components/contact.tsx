'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Loader2, Send } from 'lucide-react';
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
import { contactFormSchema, type ContactFormValues } from '@/app/schemas';
import { WhatsAppIcon } from './icons';
import Link from 'next/link';

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const { formState } = form;

  async function onSubmit(values: ContactFormValues) {
    // Since this is a static site, we can't process the form on the server.
    // We'll show a confirmation to the user.
    // For a real submission, you would typically use a third-party service.
    console.log('Form values:', values);
    
    toast({
      title: 'Funcionalidade em Demonstração',
      description: 'Em um site real, esta mensagem seria enviada.',
    });
  }
  
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua Hermann Faulhaber, 90, Panambi -RS, Brasil')}`;

  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-background">
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
            <Link href="https://wa.me/5555981092211" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-transparent border border-green-500/50 rounded-lg p-6 flex items-start gap-4 hover:bg-green-500/10 hover:border-green-500 transition-colors group h-full">
                <div className="bg-green-500/10 p-3 rounded-md">
                  <WhatsAppIcon className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-green-400 transition-colors">WhatsApp</h3>
                  <p className="text-muted-foreground">O melhor jeito de falar conosco</p>
                </div>
              </div>
            </Link>
            <div className="bg-card/50 border border-border/50 rounded-lg p-6 flex items-start gap-4 hover:border-primary transition-colors">
              <div className="bg-primary/10 p-3 rounded-md">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">comercial@indexti.com.br</p>
              </div>
            </div>
             <Link href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 flex items-start gap-4 hover:border-primary transition-colors h-full">
                <div className="bg-primary/10 p-3 rounded-md">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Localização</h3>
                  <p className="text-muted-foreground">Rua Hermann Faulhaber, 90 - Panambi/RS</p>
                  <p className="text-sm text-muted-foreground">(Atendemos todo o Brasil)</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground">Manda uma mensagem</h3>
              <p className="text-muted-foreground">Fala o que você precisa. A gente entra em contato.</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome *</FormLabel>
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
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da sua empresa" {...field} />
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
                      <FormLabel>Mensagem *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte-nos sobre seu projeto, requisitos ou dúvidas..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
                    {formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
