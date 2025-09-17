import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Zap, Shield, Crown } from 'lucide-react';

const characteristics = [
  {
    icon: Crown,
    title: "Majestade Real",
    description: "A maior ave de rapina brasileira, medindo entre 90 e 105 centímetros de comprimento.",
    stats: "90-105cm",
    color: "accent"
  },
  {
    icon: Zap,
    title: "Força Suprema",
    description: "Considerada a águia mais forte do planeta, capaz de arrancar preguiças agarradas a galhos.",
    stats: "42 kg/cm²",
    color: "primary-glow"
  },
  {
    icon: Shield,
    title: "Envergadura Majestosa",
    description: "Asas largas e arredondadas, perfeitamente adaptadas para caça em florestas tropicais.",
    stats: "+200cm",
    color: "secondary"
  },
  {
    icon: Eye,
    title: "Visão Aguçada",
    description: "Olhos marrom escuros com visão excepcional para detectar presas a grandes distâncias.",
    stats: "8x humana",
    color: "accent"
  }
];

const physicalFeatures = [
  { label: "Partes Superiores", value: "Cinza Escuro", color: "muted" },
  { label: "Partes Inferiores", value: "Brancas", color: "secondary" },
  { label: "Pernas e Pés", value: "Amarelos", color: "accent" },
  { label: "Garras", value: "Negras Longas", color: "primary" },
  { label: "Bico", value: "Robusto Gancho", color: "muted" },
  { label: "Crista", value: "Erétil Conspícua", color: "primary-glow" }
];

export default function CharacteristicsSection() {
  return (
    <section id="characteristics" className="py-20 px-8 lg:px-16 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />
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
            Características Físicas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-majesty">Anatomia</span> de uma <span className="text-accent">Predadora</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada aspecto da Harpia foi moldado pela evolução para criar a ave de rapina mais eficiente das florestas tropicais.
          </p>
        </motion.div>

        {/* Main Characteristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {characteristics.map((char, index) => (
            <motion.div
              key={char.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-${char.color}/20 group-hover:bg-${char.color}/30 transition-colors`}>
                    <char.icon className={`h-6 w-6 text-${char.color}`} />
                  </div>
                  <div className={`ml-auto text-2xl font-bold text-${char.color}`}>
                    {char.stats}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {char.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {char.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Physical Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-card/30 backdrop-blur border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Características <span className="text-accent">Distintivas</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {physicalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  className="text-center p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-sm font-medium text-${feature.color} mb-1`}>
                    {feature.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {feature.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Development Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur border-border/50">
            <h3 className="text-xl font-semibold mb-4">
              Desenvolvimento <span className="text-accent">Vital</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">4-5 anos</div>
                <div className="text-sm text-muted-foreground">Para plumagem adulta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-glow mb-2">3 anos</div>
                <div className="text-sm text-muted-foreground">Maturidade física</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">5 anos</div>
                <div className="text-sm text-muted-foreground">Idade reprodutiva</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}