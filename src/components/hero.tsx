import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Cloud, Wrench, Clock, DatabaseBackup, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: Server,
    title: "Infraestrutura de TI",
    description: "Gestão completa de servidores, redes e infraestrutura tecnológica.",
  },
  {
    icon: Shield,
    title: "Segurança da Informação",
    description: "Proteção de dados, backup e soluções de cibersegurança empresarial.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Migração e gestão de ambientes em nuvem com alta disponibilidade.",
  },
  {
    icon: Wrench,
    title: "Suporte Técnico",
    description: "Atendimento especializado para garantir continuidade do negócio.",
  },
  {
    icon: Clock,
    title: "Monitoramento 24/7",
    description: "Monitoramento contínuo para prevenir problemas e garantir estabilidade.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup e Recuperação",
    description: "Soluções robustas de backup e recuperação de dados.",
  },
];

const highlightsData = [
  "Desde 2019 no mercado",
  "Mais de 100 clientes ativos",
  "Atendimento em todo Brasil",
  "Suporte técnico especializado",
  "Soluções personalizadas",
  "Consultoria gratuita inicial",
];


export default function Hero() {
  return (
    <section id="home" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground">
            Desde 2019, ajudamos pequenas e médias empresas em todo o Brasil a fortalecer sua operação por meio de tecnologia confiável. Com mais de 100 clientes ativos, somos especialistas em infraestrutura, segurança, backup e gestão de TI.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferecemos suporte completo para que sua empresa funcione com estabilidade, produtividade e segurança. Transformamos tecnologia em solução prática, organizando processos, prevenindo problemas e garantindo um ambiente preparado para crescer junto com o seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-primary transition-colors group">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                 <div className="p-3 rounded-md bg-primary/10 border border-primary/20">
                    <solution.icon className="h-6 w-6 text-primary" />
                 </div>
                 <CardTitle className="text-lg font-semibold leading-snug">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlightsData.map((text, index) => (
            <div key={index} className="bg-card p-4 rounded-lg flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <p className="text-foreground font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
