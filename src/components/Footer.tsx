import { motion } from 'framer-motion';
import { Crown, TreePine, Heart, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const sources = [
  "Criadouro Onça Pintada",
  "Wikipédia",
  "Projeto Harpia", 
  "Zoológico San Diego"
];

const conservationOrgs = [
  { name: "ICMBio", description: "Instituto Chico Mendes" },
  { name: "WWF", description: "World Wildlife Fund" },
  { name: "IUCN", description: "União Internacional para Conservação" },
  { name: "Projeto Harpia", description: "Conservação Nacional" }
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-8 lg:px-16 border-t border-border/50">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-full bg-accent/20">
                <Crown className="h-6 w-6 text-accent" />
              </div>
              <span className="text-xl font-bold text-majesty">HARPIA</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Descobrindo a majestade da águia mais poderosa do planeta. 
              Uma jornada pela vida da Harpia harpyja nas florestas tropicais.
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <Shield className="h-4 w-4 mr-2 text-accent" />
              Quase Ameaçada - IUCN
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-accent">Fatos Rápidos</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>📏 Comprimento: 90-105cm</div>
              <div>🪶 Envergadura: +200cm</div>
              <div>⚖️ Peso: 4-9kg</div>
              <div>🌿 Habitat: Florestas Tropicais</div>
              <div>🌎 Região: América do Sul</div>
              <div>👑 Status: Ave Nacional do Panamá</div>
            </div>
          </motion.div>

          {/* Conservation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-primary-glow">Conservação</h3>
            <div className="space-y-3">
              {conservationOrgs.map((org, index) => (
                <div key={org.name} className="text-sm">
                  <div className="font-medium text-foreground">{org.name}</div>
                  <div className="text-muted-foreground text-xs">{org.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-secondary">Fontes</h3>
            <div className="space-y-2">
              {sources.map((source, index) => (
                <div key={source} className="text-sm text-muted-foreground flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                  {source}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Conservation Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 bg-gradient-to-r from-accent/10 to-primary-glow/10 backdrop-blur border-accent/20 mb-8">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-accent/20 mr-4">
                <TreePine className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 text-accent">
                  Protegendo o Futuro da Harpia
                </h3>
                <p className="text-muted-foreground text-sm">
                  A preservação das florestas tropicais é fundamental para a sobrevivência da Harpia. 
                  Cada ação de conservação conta para manter esta magnífica espécie voando livre 
                  pelas copas das árvores por gerações futuras.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-4 w-4 text-destructive mr-2" />
            <span className="text-sm text-muted-foreground">
              Feito com paixão pela conservação da natureza
            </span>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2025 Harpia Educational Project. Conteúdo baseado em pesquisas científicas 
            para fins educacionais e de conservação.
          </p>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground mb-2">Desenvolvido por:</p>
            <div className="flex flex-wrap justify-center gap-3 text-xs text-accent">
              <span>Ikaro Freire</span>
              <span>•</span>
              <span>Murilo Fornel</span>
              <span>•</span>
              <span>Gabriel Carvalho</span>
              <span>•</span>
              <span>João Paulo</span>
              <span>•</span>
              <span>Caio Henrique</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-4 space-x-4">
            <div className="flex items-center text-xs text-muted-foreground">
              <Crown className="h-3 w-3 mr-1 text-accent" />
              Harpia harpyja
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="text-xs text-muted-foreground">Gavião Real</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="text-xs text-muted-foreground">Rainha das Florestas</div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}