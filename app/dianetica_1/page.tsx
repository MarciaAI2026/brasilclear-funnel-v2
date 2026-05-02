'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveSubscriber } from '@/lib/email-storage';
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

// ─── VARIANT A: EMOTIONAL / STORY-DRIVEN ───
function VariantA() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    trackEvent('subscribe_attempt', 'A', { email });

    setTimeout(() => {
      saveSubscriber(email, 'A');
      trackEvent('subscribe_success', 'A', { email });
      setShowSuccess(true);
      setTimeout(() => router.push('/obrigado?variant=A'), 1500);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative text-white overflow-hidden" style={{background: "linear-gradient(135deg, #051420 0%, #142839 50%, #051420 100%)"}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-6">
              <img src="/logo.png" alt="Brasil Clear" className="h-14 w-auto brightness-200" />
            </div>
            <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-brand-500/30">
              <Sparkles className="w-4 h-4" />
              Sessão Introdutória 100% Gratuita
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Você sente que há algo
              <span className="block text-brand-400">bloqueando seu potencial?</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Milhares de pessoas descobriram uma forma natural e eficaz de superar limites, 
              eliminar emoções negativas e desbloquear o verdadeiro poder da mente — 
              <span className="text-white font-semibold"> sua experiência, sem julgamentos.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inscricao" className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-500/25 whitespace-nowrap">
                <span className="whitespace-nowrap">Quero Minha Sessão Gratuita</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
              <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg transition-all border border-white/20 whitespace-nowrap">
                <span className="whitespace-nowrap">Como Funciona</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-400" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-400" />
                <span>30 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-400" />
                <span>+2.000 atendidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM AGITATION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Você já tentou de tudo, mas nada parece funcionar de verdade?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Preocupações persistentes, falta de foco, relacionamentos complicados, 
            sensação de estar "travado" — esses são sinais de que algo na mente 
            precisa de atenção. E não é sua culpa.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'Mente Ansiosa', desc: 'Pensamentos que não param, dificuldade para dormir, preocupações constantes.' },
              { icon: Target, title: 'Falta de Foco', desc: 'Procrastinação, dificuldade para terminar projetos, sensação de estagnação.' },
              { icon: Heart, title: 'Relacionamentos', desc: 'Conflitos repetidos, dificuldade para se conectar, isolamento emocional.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <item.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                A Solução
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dianética: O Poder da Mente Sobre o Corpo
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Criada por L. Ron Hubbard e reconhecida mundialmente como o livro mais vendido 
                sobre a mente humana de todos os tempos, a Dianética oferece uma abordagem 
                prática e natural para entender e melhorar o funcionamento da mente.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Através da <strong>Audição</strong> — uma sessão terapêutica guiada — você 
                revisita eventos do passado de forma consciente, liberando o poder limitante 
                dessas experiências e recuperando sua clareza mental natural.
              </p>

              <div className="space-y-4">
                {[
                  'Processo 100% natural, sem substâncias externas',
                  'Processo natural baseado na própria inteligência',
                  'Resultados perceptíveis desde a primeira sessão',
                  'Aumento de autoconfiança e autoconsciência',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-brand-50 to-teal-50 p-8 rounded-3xl border border-brand-100">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center">
                      <Star className="w-7 h-7 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Livro #1 em Bestsellers</p>
                      <p className="text-sm text-gray-500">The New York Times, Publishers Weekly, LA Times</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Vendas mundiais</span>
                      <span className="font-bold text-gray-900">+22 milhões</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-brand-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Idiomas disponíveis</span>
                      <span className="font-bold text-gray-900">+50</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-20 text-white" style={{backgroundColor: "#051420"}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Nossos Visitantes Dizem
            </h2>
            <p className="text-gray-400 text-lg">Histórias reais de transformação pessoal</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mariana S.',
                role: 'Empresária',
                text: 'Conversando com a minha manicure, ela me falou que havia descoberto algo incrível. Desde então obtive muitas melhoras, tomando consciência das coisas ao meu redor, superando momentos difíceis e reorganizando minha vida.',
                stars: 5
              },
              {
                name: 'Ricardo M.',
                role: 'Empreendedor',
                text: 'Com Dianética eu fiquei muito mais habilidoso, conseguindo ter vários negócios e fontes de renda. Vivia preso no meu trabalho, e após as sessões as coisas começaram a dar certo, como se tivesse mudado minha sorte.',
                stars: 5
              },
              {
                name: 'Fernanda L.',
                role: 'Professora',
                text: 'A Dianética é concreta, não fica no abstrato. Basta treinar e vem de uma forma tão natural. Quebramos todos nossos tabus e nos permitimos evoluir, tanto espiritualmente quanto no lado material.',
                stars: 5
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="flex gap-1 mb-4">
                  {Array.from({length: t.stars}).map((_, s) => (
                    <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Você Recebe na Sessão Introdutória
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Uma experiência completa de 30 minutos ou mais, sem custo e sem compromisso
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              { title: 'Avaliação Personalizada', desc: 'Identificamos juntos os pontos que mais precisam de atenção na sua vida.' },
              { title: 'Explicação do Processo', desc: 'Você entende exatamente como a Dianética funciona e por que é eficaz.' },
              { title: 'Demonstração Prática', desc: 'Uma breve sessão demonstrativa para você sentir os resultados na pele.' },
              { title: 'Plano de Ação', desc: 'Receba orientações personalizadas sobre os próximos passos do seu desenvolvimento.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-brand-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY + CTA */}
      <section id="inscricao" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-500/30">
              <Clock className="w-4 h-4" />
              Vagas Limitadas — Agende Agora
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sua Sessão Introdutória Gratuita Espera
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Preencha seu e-mail abaixo e entraremos em contato para agendar 
              sua sessão no horário mais conveniente para você.
            </p>

            {showSuccess ? (
              <div className="bg-brand-500/20 border border-brand-500/30 rounded-xl p-6 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-brand-400 mx-auto mb-3" />
                <p className="text-xl font-bold text-brand-300">Inscrição Confirmada!</p>
                <p className="text-gray-300">Redirecionando...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu melhor e-mail"
                    className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-6 sm:px-8 py-4 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-lg shadow-brand-500/25 whitespace-nowrap flex-shrink-0"
                  >
                    <span className="whitespace-nowrap">{isSubmitting ? 'Enviando...' : 'Quero Agendar'}</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  🔒 Seus dados estão 100% seguros. Nunca enviamos spam.
                </p>
              </form>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> Privacidade garantida
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Resposta em até 24h
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Suporte via WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-gray-400 py-12 border-t border-gray-800" style={{backgroundColor: "#051420"}}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025 Brasil Clear — Dianética no Brasil. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 text-gray-600">
            Dianética: A Ciência Moderna da Saúde Mental — L. Ron Hubbard
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function Dianetica1Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);

    setTimeout(() => {
      saveSubscriber(email, 'A');
      setShowSuccess(true);
      setTimeout(() => router.push('/obrigado?variant=A'), 1500);
    }, 800);
  };

  return <VariantA />;
}