import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Zap, Baby, Target } from 'lucide-react';

const behaviorData = [
  {
    icon: Target,
    title: "Técnica de Caça",
    description: "Caça por emboscada, permanecendo imóvel por horas até detectar a presa ideal.",
    details: [
      "Velocidade de ataque: 80 km/h",
      "Pressão das garras: 42 kg/cm²",
      "Alcance visual: 8x superior ao humano"
    ],
    color: "destructive"
  },
  {
    icon: Zap,
    title: "Alimentação",
    description: "Predador especializado em mamíferos arbóreos de grande porte.",
    details: [
      "Preguiças-reais (presa favorita)",
      "Macacos-prego e guaribas",
      "Coatás, mutuns e araras-azuis"
    ],
    color: "accent"
  },
  {
    icon: Heart,
    title: "Comportamento Social",
    description: "Aves monogâmicas que formam laços duradouros com seus parceiros.",
    details: [
      "Relacionamento vitalício",
      "Território de 25-30 km²",
      "Comunicação por gritos agudos"
    ],
    color: "primary-glow"
  },
  {
    icon: Baby,
    title: "Reprodução",
    description: "Ciclo reprodutivo longo com cuidado parental extensivo.",
    details: [
      "Gestações a cada 2-3 anos",
      "1-2 ovos por ninhada",
      "10 meses de alimentação parental"
    ],
    color: "secondary"
  }
];

const huntingStats = [
  { label: "Taxa de Sucesso", value: "85%", description: "Na caça de preguiças" },
  { label: "Força de Impacto", value: "42 kg/cm²", description: "Pressão das garras" },
  { label: "Velocidade Máxima", value: "80 km/h", description: "Durante o ataque" },
  { label: "Alcance Territorial", value: "30 km²", description: "Área de caça por casal" }
];

export default function BehaviorSection() {
  return (
    <section id="behavior" className="py-20 px-8 lg:px-16 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-destructive/20 rounded-full blur-3xl feather-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl feather-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Comportamento & Reprodução
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            A <span className="text-majesty">Estratégia</span> de uma <span className="text-destructive">Predadora</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada movimento da Harpia é calculado. Sua técnica de caça refinada e 
            comportamento social complexo a tornam uma das aves mais fascinantes do mundo.
          </p>
        </motion.div>

        {/* Behavior Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {behaviorData.map((behavior, index) => (
            <motion.div
              key={behavior.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className={`p-4 rounded-full bg-${behavior.color}/20 group-hover:bg-${behavior.color}/30 transition-colors mr-4`}>
                    <behavior.icon className={`h-8 w-8 text-${behavior.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {behavior.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {behavior.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {behavior.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-${behavior.color} mr-3 opacity-70`} />
                      <span className="text-muted-foreground">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Hunting Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-r from-destructive/10 to-accent/10 backdrop-blur border-destructive/20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Estatísticas de <span className="text-destructive">Caça</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {huntingStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-4">
                    <div className="text-4xl font-bold text-destructive mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Reproduction Cycle */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Ciclo <span className="text-primary-glow">Reprodutivo</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/30 backdrop-blur border-border/50 text-center">
              <div className="text-3xl font-bold text-accent mb-2">6 meses</div>
              <div className="text-lg font-medium mb-2">Desenvolvimento das Penas</div>
              <div className="text-sm text-muted-foreground">
                Filhotes desenvolvem suas penas definitivas
              </div>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur border-border/50 text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">10 meses</div>
              <div className="text-lg font-medium mb-2">Alimentação Parental</div>
              <div className="text-sm text-muted-foreground">
                Período de dependência total dos pais
              </div>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur border-border/50 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">2-3 anos</div>
              <div className="text-lg font-medium mb-2">Intervalo Reprodutivo</div>
              <div className="text-sm text-muted-foreground">
                Tempo entre cada gestação
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Fascinating Facts */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-card/20 backdrop-blur border-accent/20">
            <h3 className="text-2xl font-bold text-center mb-6">
              Fatos <span className="text-accent">Fascinantes</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    <strong className="text-accent">Força Excepcional:</strong> Capaz de arrancar 
                    preguiças agarradas a galhos de árvores com facilidade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-primary-glow rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    <strong className="text-primary-glow">Record de Captura:</strong> Há relatos 
                    da captura de um guariba macho pesando 6,5 kg.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    <strong className="text-secondary">Adaptação Perfeita:</strong> Asas curtas 
                    e largas desenvolvidas para maior manobrabilidade na floresta.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-destructive rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    <strong className="text-destructive">Longevidade:</strong> Permanecem 
                    reprodutivamente ativos por toda a vida adulta.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}