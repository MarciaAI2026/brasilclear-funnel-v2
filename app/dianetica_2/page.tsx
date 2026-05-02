'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveSubscriber } from '../../lib/email-storage';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Shield, 
  Clock, 
  Zap,
  Users,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Heart,
  Brain,
  Target
} from 'lucide-react';

export default function Dianetica2Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);

    setTimeout(() => {
      saveSubscriber(email, 'B');
      setShowSuccess(true);
      setTimeout(() => router.push('/obrigado?variant=B'), 1500);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img src="/logo.png" alt="Brasil Clear" className="h-28 w-auto" />
              </div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Star className="w-4 h-4" />
                #1 Bestseller Mundial Sobre a Mente
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                A Abordagem da Mente que Já Transformou
                <span className="text-green-600"> 22 Milhões de Vidas</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Baseada no livro mais vendido sobre a mente humana de todos os tempos, 
                a Dianética oferece uma abordagem prática para entender melhor o funcionamento da mente, 
                desenvolver maior autoconhecimento e alcançar mais clareza no dia a dia.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700">✓ 100% Natural</span>
                <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700">✓ Base Científica</span>
                <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700">✓ Resultados Imediatos</span>
              </div>

              <a href="#inscricao-b" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg shadow-green-500/20 whitespace-nowrap">
                <span className="whitespace-nowrap">Agendar Sessão Gratuita</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 via-white to-teal-50 p-8 rounded-3xl border border-green-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-green-600">22M+</p>
                    <p className="text-sm text-gray-500 mt-1">Livros Vendidos</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-teal-600">50+</p>
                    <p className="text-sm text-gray-500 mt-1">Idiomas</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-purple-600">#1</p>
                    <p className="text-sm text-gray-500 mt-1">NYT Bestseller</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-orange-600">70+</p>
                    <p className="text-sm text-gray-500 mt-1">Anos de História</p>
                  </div>
                </div>
                <div className="mt-4 bg-gray-900 text-white p-4 rounded-xl text-center">
                  <p className="text-sm font-medium">Reconhecido por:</p>
                  <p className="text-xs text-gray-400 mt-1">The New York Times · Publishers Weekly · Los Angeles Times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como a Dianética Funciona em 3 Passos
            </h2>
            <p className="text-lg text-gray-600">Um processo estruturado, natural e eficaz</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <span className="text-5xl font-black text-green-100">01</span>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Identificação</h3>
              <p className="text-gray-600 leading-relaxed">Através da Audição, identificamos eventos passados que estão criando reações negativas no presente.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <span className="text-5xl font-black text-green-100">02</span>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Revisitação Consciente</h3>
              <p className="text-gray-600 leading-relaxed">Você revisita esses eventos de forma consciente e segura, reduzindo o impacto emocional.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <span className="text-5xl font-black text-green-100">03</span>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Resultados Naturais</h3>
              <p className="text-gray-600 leading-relaxed">Com a carga mental liberada, sua mente retorna ao estado natural de clareza e foco.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Benefícios Comprovados pelos Praticantes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="font-bold text-gray-900 mb-2">Clareza Mental</h3>
              <p className="text-sm text-gray-600">Eliminação da "neblina mental" e pensamentos confusos.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Foco Absoluto</h3>
              <p className="text-sm text-gray-600">Capacidade de concentrar-se em tarefas por mais tempo.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">❤️</div>
              <h3 className="font-bold text-gray-900 mb-2">Relacionamentos</h3>
              <p className="text-sm text-gray-600">Melhora significativa na comunicação e empatia.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Produtividade</h3>
              <p className="text-sm text-gray-600">Mais energia para realizar projetos e metas.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Resiliência</h3>
              <p className="text-sm text-gray-600">Maior capacidade de lidar com adversidades.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-bold text-gray-900 mb-2">Autoconfiança</h3>
              <p className="text-sm text-gray-600">Recuperação da certeza nas próprias decisões.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="font-bold text-gray-900 mb-2">Sem Procrastinação</h3>
              <p className="text-sm text-gray-600">Ação imediata sem a paralisia da indecisão.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-bold text-gray-900 mb-2">Liderança</h3>
              <p className="text-sm text-gray-600">Melhor capacidade de influenciar positivamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + TESTIMONIALS */}
      <section className="py-20 text-white" style={{backgroundColor: '#051420'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Resultados que Falam por Si</h2>
              <p className="text-gray-300 text-lg mb-8">
                A Dianética não é uma promessa vazia. É uma metodologia com mais de 70 anos 
                de aplicação prática, com resultados mensuráveis em milhões de pessoas ao redor do mundo.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Aumento de autoconfiança relatado</span>
                    <span className="font-bold text-green-400">94%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-teal-400 h-3 rounded-full" style={{width:'94%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Maior equilíbrio pessoal</span>
                    <span className="font-bold text-green-400">89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-teal-400 h-3 rounded-full" style={{width:'89%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Maior tranquilidade</span>
                    <span className="font-bold text-green-400">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-teal-400 h-3 rounded-full" style={{width:'87%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Melhora em relacionamentos</span>
                    <span className="font-bold text-green-400">82%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-teal-400 h-3 rounded-full" style={{width:'82%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold mb-6">Depoimentos Verificados</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-700 last:border-0 pb-4 last:pb-0">
                  <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                  <p className="text-gray-300 text-sm mb-2">"Depois de anos buscando diferentes abordagens, em poucas sessões de Dianética senti uma diferença que nunca imaginei possível."</p>
                  <p className="text-green-400 text-sm font-semibold">— Carlos Eduardo</p>
                </div>
                <div className="border-b border-gray-700 last:border-0 pb-4 last:pb-0">
                  <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                  <p className="text-gray-300 text-sm mb-2">"Minha produtividade no trabalho aumentou 300%. Consigo finalizar projetos que antes deixava para depois há meses."</p>
                  <p className="text-green-400 text-sm font-semibold">— Patrícia M.</p>
                </div>
                <div className="border-b border-gray-700 last:border-0 pb-4 last:pb-0">
                  <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                  <p className="text-gray-300 text-sm mb-2">"Relacionamento com minha família mudou completamente. Parei de reagir com raiva e comecei a realmente ouvir."</p>
                  <p className="text-green-400 text-sm font-semibold">— João Paulo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">A sessão introdutória realmente é gratuita?</h3>
              <p className="text-gray-600">Sim, 100% gratuita e sem compromisso. Não pedimos cartão de crédito e você não tem obrigação de continuar.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Preciso ter lido o livro antes?</h3>
              <p className="text-gray-600">Não. A sessão introdutória é justamente para apresentar os conceitos de forma prática, antes mesmo de qualquer estudo teórico.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">É seguro? Funciona mesmo?</h3>
              <p className="text-gray-600">A Dianética é um processo natural que utiliza apenas a comunicação e a própria inteligência da pessoa. Não envolve medicamentos, hipnose ou procedimentos invasivos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Quanto tempo dura a sessão?</h3>
              <p className="text-gray-600">A sessão introdutória tem duração de aproximadamente 30 minutos, incluindo a explicação do processo e a demonstração prática.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Onde acontecem as sessões?</h3>
              <p className="text-gray-600">Temos auditores em <strong>São Paulo</strong> e <strong>Santo André</strong>, no Estado de São Paulo. Também temos centros parceiros em diversos países para quem reside fora do Brasil. Todas as sessões são realizadas <strong>presencialmente</strong>, para garantir a melhor observação do processo e resultados mais efetivos. Após a inscrição, entraremos em contato para indicar o local mais próximo de você.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="inscricao-b" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-green-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comece Sua Transformação Hoje</h2>
            <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
              Preencha seu e-mail e receba em até 24h o contato para agendar 
              sua sessão introdutória gratuita de Dianética.
            </p>

            {showSuccess ? (
              <div className="bg-white/20 rounded-xl p-6">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-3" />
                <p className="text-xl font-bold">Inscrição Confirmada!</p>
                <p className="text-green-100">Redirecionando...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="flex-1 px-5 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 sm:px-8 py-4 rounded-xl transition-all disabled:opacity-50 whitespace-nowrap flex-shrink-0"
                  >
                    <span className="whitespace-nowrap">{isSubmitting ? 'Enviando...' : 'Agendar Agora'}</span>
                  </button>
                </div>
                <p className="text-xs text-green-200 mt-4">
                  Seus dados estão protegidos. Leia nossa política de privacidade.
                </p>
              </form>
            )}

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold text-lg">30min</p>
                <p className="text-green-200 text-xs">Duração</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold text-lg">R$ 0</p>
                <p className="text-green-200 text-xs">Custo</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold text-lg">100%</p>
                <p className="text-green-200 text-xs">Natural</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-gray-400 py-12 border-t border-gray-800" style={{backgroundColor: '#051420'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <img src="/logo.png" alt="Brasil Clear" className="h-32 w-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Aviso Legal</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                O Brasil Clear atua exclusivamente como plataforma digital de conteúdo e promoção de atividades de desenvolvimento pessoal. Não realiza diretamente a prestação de serviços presenciais no Brasil. Os serviços são oferecidos por organizações independentes de Dianética, com atuação própria e responsabilidade legal individual.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Organizações no Brasil:</strong><br/>
                Dianética ABC (Santo André)<br/>
                Associação Brasileira de Dianética (Zona Sul – Mirandópolis)<br/>
                Dianética São Paulo (Zona Leste – São Paulo)
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Isenção de Responsabilidade</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                O conteúdo disponibilizado neste site tem caráter exclusivamente educativo, informativo e promocional. O Brasil Clear não realiza diagnósticos, tratamentos médicos ou psicológicos, nem substitui a orientação de profissionais qualificados da área da saúde. Nenhuma informação apresentada neste site deve ser interpretada como promessa de cura, tratamento ou garantia de resultados específicos. Os resultados podem variar de pessoa para pessoa.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                <strong className="text-gray-400">Privacidade e Cookies (LGPD):</strong> Este site utiliza apenas armazenamento local (localStorage) para lembrar suas preferências de navegação. Não utilizamos cookies de rastreamento. Seus dados pessoais são tratados conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Direitos Autorais:</strong> © 2026 Brasil Clear. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}