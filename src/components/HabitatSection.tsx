import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TreePine, MapPin, Shield, AlertTriangle } from 'lucide-react';

const regions = [
  { country: "Brasil", status: "Principal habitat", color: "accent" },
  { country: "Panamá", status: "Ave nacional", color: "primary-glow" },
  { country: "México", status: "Região norte", color: "secondary" },
  { country: "Guatemala", status: "Florestas centrais", color: "muted" },
  { country: "Argentina", status: "Região limitrofe", color: "accent" }
];

const conservationFacts = [
  {
    icon: AlertTriangle,
    title: "Estado Atual",
    description: "Classificada como 'Quase Ameaçada' pela IUCN",
    status: "Preocupante",
    color: "destructive"
  },
  {
    icon: TreePine,
    title: "Perda de Habitat",
    description: "Desmatamento das florestas tropicais",
    status: "Crítico",
    color: "destructive"
  },
  {
    icon: Shield,
    title: "Proteção Legal",
    description: "Protegida por leis ambientais nacionais",
    status: "Ativo",
    color: "accent"
  }
];

export default function HabitatSection() {
  return (
    <section id="habitat" className="py-20 px-8 lg:px-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc947' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-30 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            Habitat & Conservação
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Rainha das <span className="text-majesty">Florestas Tropicais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Harpia habita as vastas florestas tropicais da América Central e do Sul, 
            onde reina como o predador supremo do dossel florestal.
          </p>
        </motion.div>

        {/* Main Habitat Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Habitat Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center mb-6">
                <TreePine className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold">Habitat Natural</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-accent">Florestas Tropicais</h4>
                  <p className="text-muted-foreground">
                    Prefere florestas primárias densas com dossel alto, onde pode caçar 
                    com eficiência utilizando sua agilidade entre as árvores.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-primary-glow">Adaptações Únicas</h4>
                  <p className="text-muted-foreground">
                    Suas asas relativamente curtas e largas são perfeitamente adaptadas 
                    para manobras rápidas entre a vegetação densa da floresta.
                  </p>
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-accent font-medium">
                    💡 Curiosidade: A Harpia é a ave nacional do Panamá e está presente 
                    no brasão de armas do estado brasileiro do Paraná.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Distribution Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-primary-glow mr-3" />
                <h3 className="text-2xl font-bold">Distribuição Geográfica</h3>
              </div>
              
              <div className="space-y-4">
                {regions.map((region, index) => (
                  <motion.div
                    key={region.country}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-${region.color} mr-3`} />
                      <span className="font-medium">{region.country}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{region.status}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary-glow/10 rounded-lg border border-primary-glow/20">
                <p className="text-sm text-primary-glow">
                  🗺️ Registros históricos: Do México ao norte da Argentina, 
                  com maior concentração na Amazônia brasileira.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Conservation Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Estado de <span className="text-destructive">Conservação</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conservationFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card/30 backdrop-blur border-border/50 hover:bg-card/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-full bg-${fact.color}/20 mr-4`}>
                      <fact.icon className={`h-6 w-6 text-${fact.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{fact.title}</h4>
                        <Badge 
                          variant="outline" 
                          className={`text-${fact.color} border-${fact.color}`}
                        >
                          {fact.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary-glow/10 backdrop-blur border-accent/20">
            <h3 className="text-2xl font-bold mb-4">
              Protegendo o <span className="text-accent">Futuro</span> da Harpia
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              A preservação das florestas tropicais é essencial para a sobrevivência da Harpia. 
              Cada hectare de floresta protegida é um passo em direção à conservação desta magnífica espécie.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-accent text-accent-foreground">Conservação</Badge>
              <Badge className="bg-primary-glow text-primary-foreground">Proteção</Badge>
              <Badge className="bg-secondary text-secondary-foreground">Sustentabilidade</Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}