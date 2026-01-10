import { Scale, FileText, Users, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export default function Home() {
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
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 bg-transparent">
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Nossos Serviços</p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
              Áreas de Atuação
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-background border-2 border-border hover:border-foreground transition-colors">
              <div className="mb-6">
                <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-foreground mb-3">Contratos Empresariais</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Contratos societários, de prestação de serviços, parcerias comerciais, locação comercial, compra e
                  venda empresarial, confidencialidade e mais.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-background border-2 border-border hover:border-foreground transition-colors">
              <div className="mb-6">
                <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-foreground mb-3">Contratos Pessoais</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Contratos de locação residencial, compra e venda de imóveis, empréstimos, doação, comodato, prestação
                  de serviços autônomos e distratos.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 p-8 border-2 border-border bg-background">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-serif font-bold text-foreground mb-2">Atendimento personalizado</h4>
                <p className="text-muted-foreground">
                  Cada contrato é elaborado sob medida, considerando as particularidades e necessidades específicas de
                  cada cliente.
                </p>
              </div>
              <Button variant="outline" className="border-2 self-start md:self-center bg-transparent">
                <a href="#contato">Falar com Especialista</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="border-b border-border">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Sobre o Profissional</p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-8">
                Dr. Paulo André Ferreira Nunes
              </h3>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Advogado especializado em Direito Contratual com mais de 15 anos de experiência na elaboração e
                  análise de contratos para pessoas físicas e jurídicas.
                </p>
                <p>
                  Formado em Direito pela Faculdade Universos, com pós-graduação em Direito Empresarial e Contratos. Atuação
                  focada em segurança jurídica e clareza contratual.
                </p>
                <p>
                  Compromisso com a excelência técnica, ética profissional e atendimento personalizado para garantir que
                  cada contrato reflita perfeitamente a vontade das partes e proteja seus interesses.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-card border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-serif font-bold text-foreground">15+</div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Anos de Experiência</p>
                    <p className="text-sm text-muted-foreground">em elaboração de contratos</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-serif font-bold text-foreground">500+</div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Contratos Elaborados</p>
                    <p className="text-sm text-muted-foreground">para clientes PF e PJ</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-foreground text-background border-2 border-foreground">
                <p className="text-sm uppercase tracking-wider mb-2 text-background/70">Compromisso</p>
                <p className="text-lg font-serif leading-relaxed">
                  "Cada contrato é uma ferramenta de segurança e confiança nas relações jurídicas dos meus clientes."
                </p>
              </Card>
            </div>
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
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground">contato@contratosdistratos.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telefone</p>
                    <p className="text-muted-foreground">(00) 0000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Localização</p>
                    <p className="text-muted-foreground">
                      [Sua Cidade/Estado]
                      <br />
                      Atendimento presencial e online
                    </p>
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
              <p className="mt-1">OAB/[UF] [Número de Registro]</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
