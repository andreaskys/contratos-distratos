"use client"
import { motion } from "framer-motion"
import { Scale, FileText, Users, Mail, Phone, MapPin, Building2, CheckCircle2} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
}

export default function Home() {

  const contratosPessoaFisica = [
    "Compra e Venda de Imóveis",
    "Locação Residencial",
    "Comodato",
    "Doação",
    "Permuta",
    "Pacto Antenupcial",
    "Escritura de União Estável",
    "Contrato de Namoro",
    "Testamento Vital",
    "Partilha Amigável",
  ]

  const contratosPessoaJuridica = [
    "Contrato Social",
    "Acordo de Sócios",
    "NDA (Confidencialidade)",
    "Prestação de Serviços",
    "Franquia",
    "Mútuo Conversível",
    "Trespasse",
    "Locação Comercial",
    "Empreitada",
  ]

  const contratosTrabalho = [
    "Contrato de Trabalho Individual",
    "Contrato de Experiência",
    "Teletrabalho (Home Office)",
    "Contrato de Parceria",
    "Termo de Rescisão e Quitação",
  ]

  const contratosDigitais = [
    "Termos de Uso e Política de Privacidade",
    "Licenciamento de Software (SaaS)",
    "Contrato de Influenciador Digital",
    "Desenvolvimento de Software",
  ]

  const contratosEspecializados = ["Constituição de Usufruto"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-foreground" strokeWidth={1.5} />
            <h1 className="text-2xl font-serif font-bold tracking-tight text-foreground">
              Contratos<span className="text-muted-foreground">&</span>Distratos
            </h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#sobre"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">Especialistas em Contratos</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-foreground mb-8 text-balance">
              Segurança jurídica para suas relações contratuais
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 text-pretty">
              Elaboração profissional de contratos empresariais e pessoais com rigor técnico, clareza e total adequação
              às suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300">
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 bg-transparent hover:bg-foreground/90 hover:scale-105 transition-all duration-300">
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Contratos e Distratos
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                Especialistas em soluções estratégicas para conflitos empresariais, nossa equipe domina a 
                complexidade de processos de execução, recuperações judiciais e a estruturação de instrumentos 
                contratuais entre entes físicos e jurídicos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                Proporcionamos a blindagem necessária para que suas operações gozem de total Segurança Jurídica, 
                traduzindo obrigações em clareza e direitos em proteção legal efetiva.
              </p>
              <div className="p-8 rounded-lg mt-8 flex justify-center">
                <p className="text-lg font-medium text-foreground text-balance italic text-center max-w-2xl">
                  Vai vender, comprar, trocar ou alienar algum bem? Tenha em mente que um contrato deve ser realizado, pois a garantia e a solidez deste só se fará perante um bom contrato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Pessoa Física Section */}
      <section id="pessoa-fisica" className="py-20 border-b border-border overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, x: -80 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8" />
                  <h2 className="text-3xl md:text-4xl font-bold">Pessoa Física</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Contratos personalizados para proteger seus interesses pessoais e familiares. Seja para compra de
                  imóveis, acordos de união estável, ou partilhas amigáveis, garantimos que seus direitos estejam
                  assegurados.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-1 shrink-0" />
                    <span>Assessoria completa em negociações imobiliárias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-1 shrink-0" />
                    <span>Contratos de relacionamento e família</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-1 shrink-0" />
                    <span>Planejamento sucessório e testamentos</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-100 rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/mD1d0DLk/ddeal.jpg"
                  alt="Acordo entre pessoas físicas"
                  className="object-cover w-full h-full "
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pessoa Jurídica Section */}
      <section id="pessoa-juridica" className="py-20 border-b border-border overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, x: 80 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-100 rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/7PG8kHsm/deal.avif"
                  alt="Acordo empresarial"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-8 w-8" />
                  <h2 className="text-3xl md:text-4xl font-bold">Pessoa Jurídica</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Soluções jurídicas completas para empresas de todos os portes. Desde constituição societária até
                  acordos complexos de confidencialidade e parcerias comerciais, oferecemos suporte especializado.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-1 shrink-0" />
                    <span>Constituição e reestruturação societária</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-1 shrink-0" />
                    <span>Contratos comerciais e parcerias estratégicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-1 shrink-0" />
                    <span>Recuperação judicial e resolução de conflitos</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
     <section id="servicos" className="border-b border-border bg-card py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Atuação</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos elaboração e revisão de contratos especializados para todas as suas necessidades jurídicas.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Card 1: Pessoa Física */}
            <motion.div variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-foreground/20 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    Pessoa Física
                  </CardTitle>
                  <CardDescription>Contratos para indivíduos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {contratosPessoaFisica.map((contrato, index) => (
                      <li key={index} className="flex items-start gap-2 hover:text-foreground transition-colors duration-200">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{contrato}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Pessoa Jurídica */}
            <motion.div variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-foreground/20 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    Pessoa Jurídica
                  </CardTitle>
                  <CardDescription>Contratos empresariais</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {contratosPessoaJuridica.map((contrato, index) => (
                      <li key={index} className="flex items-start gap-2 hover:text-foreground transition-colors duration-200">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{contrato}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Trabalhistas */}
            <motion.div variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-foreground/20 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    Trabalhistas
                  </CardTitle>
                  <CardDescription>Relações de trabalho</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {contratosTrabalho.map((contrato, index) => (
                      <li key={index} className="flex items-start gap-2 hover:text-foreground transition-colors duration-200">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{contrato}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4: Digitais */}
            <motion.div variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-foreground/20 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    Digitais & Outros
                  </CardTitle>
                  <CardDescription>Contratos especializados</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {contratosDigitais.map((contrato, index) => (
                      <li key={index} className="flex items-start gap-2 hover:text-foreground transition-colors duration-200">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{contrato}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section id="contato" className="bg-card">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Entre em Contato</p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-8">
                Vamos conversar sobre seu contrato
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Envie sua solicitação e retornaremos em até 24 horas com uma proposta personalizada para suas
                necessidades contratuais.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground">contratosedistratos@yahoo.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telefone</p>
                    <p className="text-muted-foreground">(62) 986369250</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground text-background">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6" strokeWidth={1.5} />
              <span className="text-lg font-serif font-bold">
                Contratos<span className="text-background/60">&</span>Distratos
              </span>
            </div>

            <div className="text-sm text-background/70 text-center md:text-right">
              <p>© {new Date().getFullYear()} Contratos&Distratos. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
