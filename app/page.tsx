import { BookOpen, CheckCircle, Clock, Facebook, Instagram, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CountdownTimer } from "@/components/countdown-timer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactButton } from "@/components/contact-button"

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
            <Link href="#sobre-mim" className="text-sm font-medium hover:underline underline-offset-4">
              Sobre Mim
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
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
                <div className="flex flex-col items-center lg:items-start">
                  <BookOpen className="h-16 w-16 text-pink-600 mb-4" />
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-800 text-center lg:text-left">
                    Clube do Livro Desbloqueia-te
                  </h1>
                </div>
                <p className="text-xl text-gray-600 text-center lg:text-left">Lê, desbloqueia e transforma-te.</p>
                <p className="text-gray-500 md:text-lg text-center lg:text-left">
                  Um clube de leitura para mulheres que querem evoluir, pensar diferente e começar uma nova fase na vida
                  — através do poder de um bom livro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              <CountdownTimer targetDate="2025-04-30T23:59:59" />
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

        <section id="sobre-mim" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">👋 Sobre Mim</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-12 py-8 md:grid-cols-2 items-center">
              <div className="flex justify-center">
                <Image
                  src="/images/profile-photo.png"
                  alt="Foto da criadora do Clube do Livro"
                  width={350}
                  height={450}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Durante muito tempo eu quis mudar a minha vida…
                  <br />
                  Tinha mil sonhos, metas, vontade de ser mais disciplinada…
                  <br />
                  Mas sentia-me sempre perdida, desconectada de mim mesma.
                </p>
                <p className="leading-relaxed">
                  Até que, num momento em que tudo parecia estagnado, eu abri um livro…
                  <br />E ali começou a minha virada.
                </p>
                <p className="leading-relaxed">
                  A leitura tornou-se o meu ponto de equilíbrio, o meu momento de clareza.
                  <br />E mais do que isso: ajudou-me a criar novos hábitos, desenvolver autoconhecimento e mudar de
                  dentro pra fora.
                </p>
                <p className="leading-relaxed">
                  Criei o Clube do Livro porque sei que existem muitas outras mulheres como eu era: cheias de vontade,
                  mas sem saber por onde começar.
                </p>
                <p className="leading-relaxed font-medium text-pink-700">
                  E agora quero caminhar contigo.
                  <br />
                  Porque juntas, a transformação vai muito além dos livros 💖
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="precos" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
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

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">❓ Perguntas Frequentes</h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  Tudo o que precisas de saber sobre o Clube do Livro Desbloqueia-te
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Como funciona o Clube do Livro?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      O Clube é uma experiência de 3 meses para ajudar-te a criar o hábito da leitura de forma leve,
                      prática e transformadora.
                      <br />
                      <br />
                      Durante esse tempo, vais receber 3 livros (1 por mês) diretamente em tua casa, participar de 3
                      encontros online e ter acesso a um mini curso exclusivo sobre leitura, organização e
                      desenvolvimento pessoal. Tudo pensado para encaixar na tua rotina real ❤️
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Quais livros vamos ler?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Selecionámos 3 livros de desenvolvimento pessoal e crescimento interior — escolhidos a dedo para
                      desbloquear a tua mentalidade, aumentar a tua clareza e dar-te ferramentas práticas para aplicares
                      no dia-a-dia.
                      <br />
                      <br />
                      Os títulos vão ser revelados dentro do grupo VIP e são uma surpresa para criar ainda mais
                      entusiasmo a cada mês 📚✨
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Moro fora de Portugal. Posso participar?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Podes sim! A participação no Clube é 100% online, e qualquer mulher com acesso à internet pode
                      fazer parte.
                      <br />
                      <br />
                      Para o envio dos livros, basta que o endereço de entrega esteja em território português 🇵🇹
                      <br />
                      <br />
                      Se estiveres fora, ainda assim podes participar com a versão digital dos livros ou comprar
                      localmente — vais receber as instruções!
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Qual o formato e o horário dos encontros?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Os encontros são online, ao vivo, 1 vez por mês, com duração média de 1h a 1h30.
                      <br />
                      <br />A data e o horário são definidos junto com o grupo para garantir que o maior número de
                      participantes consiga estar presente.
                      <br />
                      <br />E sim, são encontros com partilha real, dinâmicas e muita troca 💻💬
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Quanto tempo preciso para conseguir acompanhar as leituras?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Basta entre 15 a 30 minutos por dia, o que já é suficiente para leres com calma e absorveres o
                      conteúdo.
                      <br />
                      <br />O Clube foi pensado para caber na tua vida, mesmo com trabalho, estudos ou filhos. Não é
                      sobre ler mais, é sobre ler com intenção e consistência 📖⏳
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">Como funciona a entrega dos livros?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Os livros são enviados todos os meses para tua morada, por transportadora ou correio registado.
                      Vais receber um e-mail com os detalhes de envio e código de rastreio.
                      <br />
                      <br />A entrega é garantida para qualquer local em Portugal 🇵🇹
                      <br />
                      <br />E sim, é um presente nosso para ti ❤️
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">E se eu não gostar? Posso pedir reembolso?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Sim! Tens 15 dias de garantia após a compra. Se por algum motivo sentires que não é para ti, basta
                      enviares um e-mail e tratamos de tudo.
                      <br />
                      <br />
                      Acreditamos tanto na transformação que o Clube proporciona que damos-te essa segurança desde o
                      início 💰
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">O que acontece após os 3 meses?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Após os 3 meses, vais ter a opção de continuar connosco numa nova edição, com novos livros e novos
                      encontros.
                      <br />
                      <br />O objectivo é transformar a leitura num estilo de vida — e não apenas um projeto de curto
                      prazo.
                      <br />
                      <br />
                      Além disso, vais manter o acesso ao mini curso e ao grupo da comunidade!
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    Preciso ter alguma experiência ou ler rápido?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Nada disso! O Clube foi feito para iniciantes e também para quem já lê, mas quer consistência.
                      <br />
                      <br />
                      Vamos começar do ZERO e caminhar passo a passo, juntas. O mini curso vai ajudar-te em tudo: desde
                      como organizar o tempo até como ler de forma mais eficiente 💡
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">Preciso já gostar de ler para participar?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Não! O Clube do Livro foi criado precisamente para quem ainda não conseguiu ganhar esse hábito.
                      <br />
                      <br />A proposta é acompanhar-te desde o início, com método, apoio e conteúdo que realmente
                      transforma.
                      <br />
                      <br />
                      Não vais estar sozinha — vamos caminhar juntas 💖
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left">Os livros estão incluídos no valor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Sim! Os 3 livros do Clube são enviados directamente para tua casa, como parte da experiência 🎁
                      <br />
                      <br />É o nosso presente para te ajudar a começares com o pé direito!
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left">E se eu não conseguir acompanhar a leitura?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Não há problema! O Clube foi pensado para encaixar na tua rotina real.
                      <br />
                      <br />
                      Além disso, vais ter acesso a um mini curso com dicas práticas de organização e foco, para
                      conseguires encaixar a leitura de forma leve e realista.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-left">O que está incluído no mini curso?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      São aulas curtas e práticas sobre:
                      <br />
                      <br />📌 Como organizar o teu tempo para conseguir ler
                      <br />📌 Como tirar o máximo de cada livro
                      <br />📌 Como aplicar o que aprendes na tua vida
                      <br />
                      <br />
                      Tudo disponível durante 6 meses, para veres sempre que precisares!
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-left">É um clube só para mulheres?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Sim! Este espaço foi criado para jovens mulheres que querem desenvolver novos hábitos, evoluir e
                      conectar-se com outras que estão na mesma jornada.
                      <br />
                      <br />É sobre crescer em conjunto 💕✨
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-left">Quais são as formas de pagamento?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Podes pagar com cartão de crédito (a pronto ou em prestações) ou com MB WAY/pagamento por
                      referência multibanco. Tudo 100% seguro!
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-16">
                  <AccordionTrigger className="text-left">
                    Posso participar a partir de qualquer lugar?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Sim, claro! O Clube é totalmente online e enviamos os livros para qualquer parte de Portugal 🇵🇹
                      <br />
                      <br />
                      Se tiveres acesso à internet, estás dentro!
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
      <ContactButton />
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
          <Link href="#sobre-mim" className="text-lg font-medium hover:underline underline-offset-4">
            Sobre Mim
          </Link>
          <Link href="#faq" className="text-lg font-medium hover:underline underline-offset-4">
            FAQ
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
