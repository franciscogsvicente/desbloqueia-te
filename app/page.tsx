import { BookOpen, CheckCircle, Clock, Facebook, Instagram, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CountdownTimer } from "@/components/countdown-timer"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-pink-600" />
            <span className="text-lg font-bold">Desbloqueia-te</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#sobre" className="text-sm font-medium hover:underline underline-offset-4">
              Sobre
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:underline underline-offset-4">
              Benefícios
            </Link>
            <Link href="#precos" className="text-sm font-medium hover:underline underline-offset-4">
              Preços
            </Link>
            <Link href="#para-quem" className="text-sm font-medium hover:underline underline-offset-4">
              Para Quem
            </Link>
          </nav>
          <MobileNav />
          <div className="hidden md:block">
            <Button className="bg-pink-600 hover:bg-pink-700" asChild>
              <Link href="https://pay.hotmart.com/F99306857M" target="_blank">
                Quero Entrar no Clube
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-800">
                  Clube do Livro Desbloqueia-te
                </h1>
                <p className="text-xl text-gray-600">Lê, desbloqueia e transforma-te.</p>
                <p className="text-gray-500 md:text-lg">
                  Um clube de leitura para mulheres que querem evoluir, pensar diferente e começar uma nova fase na vida
                  — através do poder de um bom livro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-lg py-6" asChild>
                    <Link href="https://pay.hotmart.com/F99306857M" target="_blank">
                      Quero Entrar no Clube
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/books-flowers.png"
                  alt="Livros com flores cor-de-rosa"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 bg-pink-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Oferta Especial por Tempo Limitado</h2>
                <p className="text-gray-600">Pré-venda especial termina em:</p>
              </div>
              <CountdownTimer targetDate="2025-04-24T23:59:59" />
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-pink-600" />
                  <p className="text-sm text-gray-600">
                    Pré-venda especial (21 a 24 de abril): <span className="font-bold">147€</span>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <p className="text-sm text-gray-600">
                    Após pré-venda (25 a 30 de abril): <span className="font-bold">197€</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  📚 O que é o Clube do Livro Desbloqueia-te?
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl">É muito mais do que um clube de leitura.</p>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  É um espaço para mulheres que querem crescer, questionar-se, refletir e criar hábitos que realmente
                  mudam a vida.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/images/books-stack.png"
                alt="Livros empilhados com flores secas"
                width={550}
                height={550}
                className="mx-auto overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Durante 3 meses, vamos juntas:</h3>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium">📖 Ler um livro por mês</p>
                      <p className="text-sm text-gray-600">
                        Selecionado por mim, com foco em crescimento pessoal e mentalidade
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium">💬 Trocar ideias e reflexões</p>
                      <p className="text-sm text-gray-600">Numa comunidade exclusiva no WhatsApp</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium">🎥 Participar de um encontro ao vivo online</p>
                      <p className="text-sm text-gray-600">
                        Ao final de cada mês para conversar sobre os maiores insights do livro
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="italic text-gray-600">
                  E sim — os 3 livros chegam até ti como presente físico, se moras em Portugal 🇵🇹✨
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">🎁 O que recebes ao entrar:</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-pink-100 p-3">
                  <BookOpen className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">📦 Trilogia de livros</h3>
                <p className="text-center text-gray-600">
                  3 livros físicos cuidadosamente selecionados (exclusivo para residentes em Portugal).
                </p>
                <p className="font-medium">Valor estimado: 45€</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-pink-100 p-3">
                  <BookOpen className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">🎥 Minicurso "Leitura Transformadora"</h3>
                <p className="text-center text-gray-600">
                  7 aulas gravadas para te guiar na criação do hábito da leitura e tirar o máximo dos livros.
                </p>
                <p className="font-medium">Valor estimado: 67€</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-pink-100 p-3">
                  <BookOpen className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">💡 Encontros ao vivo mensais</h3>
                <p className="text-center text-gray-600">
                  1 encontro ao final de cada mês para refletirmos, debatermos e desbloquearmos juntas.
                </p>
                <p className="font-medium">Valor estimado: 87€</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-pink-100 p-3">
                  <BookOpen className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">👭 Comunidade exclusiva no WhatsApp</h3>
                <p className="text-center text-gray-600">
                  Para não caminhares sozinha. Partilha de insights, apoio e energia boa.
                </p>
                <p className="font-medium">Valor: Imensurável — mas transformador</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm md:col-span-2 lg:col-span-1">
                <div className="rounded-full bg-pink-100 p-3">
                  <BookOpen className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">🎉 Sorteio de um Kindle</h3>
                <p className="text-center text-gray-600">
                  Todas as participantes concorrem automaticamente no último encontro!
                </p>
                <p className="font-medium">Valor do prémio: +/- 100€</p>
              </div>
            </div>
          </div>
        </section>

        <section id="precos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">💰 Investimento</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-pink-100 p-3">
                  <Clock className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">🕰️ Pré-venda especial</h3>
                <p className="text-center text-gray-600">21 a 24 de abril</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">147€</span>
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700" asChild>
                  <Link href="https://pay.hotmart.com/F99306857M" target="_blank">
                    Quero Entrar no Clube
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-pink-100 p-3">
                  <Clock className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">🔒 Após pré-venda</h3>
                <p className="text-center text-gray-600">25 a 30 de abril</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">197€</span>
                </div>
                <Button className="w-full" variant="outline">
                  Disponível em breve
                </Button>
              </div>
            </div>
            <div className="text-center text-sm text-gray-600 mt-4">
              <p>📌 As inscrições fecham no dia 30 de abril. Depois disso, não será possível entrar nesta edição.</p>
            </div>
          </div>
        </section>

        <section id="para-quem" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">❤️ Para quem é este clube?</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Este clube é para ti se:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5" />
                    <span>Queres cultivar o hábito da leitura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5" />
                    <span>Desejas evoluir pessoalmente e mentalmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5" />
                    <span>Sentes que precisas de um impulso, de clareza e de novas perspectivas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5" />
                    <span>Queres um ambiente seguro e inspirador para crescer</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Não é para ti se:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5" />
                    <span>Procuras fórmulas mágicas e mudanças sem esforço</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5" />
                    <span>Não gostas de refletir, questionar e transformar-te com honestidade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  🎯 A tua jornada de transformação começa aqui
                </h2>
                <p className="max-w-[700px] md:text-xl">
                  Entrar no Clube do Livro Desbloqueia-te é dizer "sim" a ti mesma.
                </p>
                <p className="max-w-[700px] md:text-xl">
                  Sim ao teu crescimento.
                  <br />
                  Sim ao teu tempo.
                  <br />
                  Sim à tua liberdade mental.
                </p>
              </div>
              <p className="max-w-[700px] md:text-xl">🌱 Começa agora. Vamos ler, desbloquear e crescer juntas.</p>
              <Button className="bg-white text-pink-600 hover:bg-gray-100 text-lg py-6 px-8 mt-4" asChild>
                <Link href="https://pay.hotmart.com/F99306857M" target="_blank">
                  Quero Entrar no Clube – Pré-venda 147€
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-pink-600" />
            <span className="text-lg font-bold">Desbloqueia-te</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} Clube do Livro Desbloqueia-te. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label
        htmlFor="mobile-menu"
        className="flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-100"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </label>
      <div className="fixed inset-0 z-50 hidden h-screen w-full flex-col bg-white peer-checked:flex">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-pink-600" />
            <span className="text-lg font-bold">Desbloqueia-te</span>
          </div>
          <label
            htmlFor="mobile-menu"
            className="flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close Menu</span>
          </label>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <Link href="#sobre" className="text-lg font-medium hover:underline underline-offset-4">
            Sobre
          </Link>
          <Link href="#beneficios" className="text-lg font-medium hover:underline underline-offset-4">
            Benefícios
          </Link>
          <Link href="#precos" className="text-lg font-medium hover:underline underline-offset-4">
            Preços
          </Link>
          <Link href="#para-quem" className="text-lg font-medium hover:underline underline-offset-4">
            Para Quem
          </Link>
          <Button className="mt-4 bg-pink-600 hover:bg-pink-700" asChild>
            <Link href="https://pay.hotmart.com/F99306857M" target="_blank">
              Quero Entrar no Clube
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  )
}
