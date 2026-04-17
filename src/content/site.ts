export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  services: string[];
  situations: string[];
  approach: string;
  cta: string;
};

export type LawyerProfile = {
  slug: string;
  name: string;
  role: string;
  oab: string;
  imageDirection: string;
  miniBio: string;
  fullBio: string;
  education: string[];
  expertise: string[];
  languages: string[];
  email: string;
};

export const siteConfig = {
  name: "Teste e teste Advocacia",
  shortName: "Teste e teste",
  city: "Franca-SP",
  phoneDisplay: "(16) 0000-0000",
  whatsappDisplay: "(16) 99999-0000",
  whatsappHref:
    "https://wa.me/5516999990000?text=Olá!%20Gostaria%20de%20falar%20com%20a%20equipe%20da%20Teste%20e%20teste%20Advocacia.",
  email: "contato@testeetesteadvocacia.com.br",
  address: "Av. Presidente Vargas, 0000, Centro, Franca-SP",
  officeHours: "Segunda a sexta, das 8h30 às 18h",
  serviceRegion: "Franca-SP e região",
  description:
    "Escritório de advocacia em Franca-SP com atuação em Direito Previdenciário, Trabalhista e Cível, com atendimento claro, humano e tecnicamente consistente.",
  foundedLabel: "Atuação jurídica responsável e próxima",
  ctaPrimary: "Agendar atendimento",
  ctaSecondary: "Falar no WhatsApp",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

export const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Equipe", href: "/equipe" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export const practiceAreas: PracticeArea[] = [
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    shortTitle: "Previdenciário",
    summary:
      "Orientação e atuação em benefícios do INSS com linguagem simples, análise documental criteriosa e estratégia jurídica responsável.",
    intro:
      "Prestamos atendimento em questões previdenciárias com foco em organização de documentos, leitura técnica do histórico contributivo e definição do caminho mais seguro para cada caso.",
    services: [
      "Aposentadorias (idade, tempo de contribuição, especial e híbrida)",
      "Planejamento previdenciário individual",
      "Benefício por incapacidade temporária e aposentadoria por incapacidade permanente",
      "Benefício assistencial (BPC/LOAS)",
      "Pensão por morte e auxílio-reclusão",
      "Revisões de benefício e análise de cálculo",
      "Recursos administrativos e ações judiciais previdenciárias",
    ],
    situations: [
      "Dúvidas sobre o melhor momento para se aposentar",
      "Negativa de benefício pelo INSS",
      "Perícia médica com resultado desfavorável",
      "Benefício concedido com valor abaixo do esperado",
      "Necessidade de regularizar vínculos ou períodos de contribuição",
    ],
    approach:
      "Cada atendimento é conduzido com escuta atenta, explicações claras e acompanhamento técnico em todas as etapas, sem promessas de resultado e com total transparência quanto aos riscos e possibilidades.",
    cta: "Converse com nossa equipe para uma avaliação previdenciária cuidadosa.",
  },
  {
    slug: "direito-trabalhista",
    title: "Direito Trabalhista",
    shortTitle: "Trabalhista",
    summary:
      "Atuação em conflitos trabalhistas com postura técnica, objetiva e respeitosa, buscando segurança jurídica e previsibilidade no processo.",
    intro:
      "No Direito do Trabalho, oferecemos suporte para pessoas que precisam compreender seus direitos e tomar decisões com informação adequada, sempre com comunicação direta e sem exageros.",
    services: [
      "Análise de verbas rescisórias",
      "Horas extras, adicional noturno e intervalos",
      "Reconhecimento de vínculo empregatício",
      "Assédio moral e situações de ambiente de trabalho inadequado",
      "Estabilidade gestante, acidentária e outras hipóteses legais",
      "Defesas e orientações estratégicas para empregadores",
      "Negociação e acompanhamento de acordos trabalhistas",
    ],
    situations: [
      "Rescisão contratual com dúvidas sobre valores",
      "Jornada extensa sem remuneração adequada",
      "Demissão durante período de estabilidade",
      "Situações recorrentes de constrangimento no trabalho",
      "Necessidade de prevenir passivos trabalhistas na empresa",
    ],
    approach:
      "Nosso trabalho combina análise jurídica minuciosa, documentação organizada e condução ética da demanda, buscando soluções coerentes com os fatos e com a legislação vigente.",
    cta: "Receba orientação trabalhista com clareza e discrição.",
  },
  {
    slug: "direito-civel",
    title: "Direito Cível",
    shortTitle: "Cível",
    summary:
      "Assessoria em conflitos e prevenções cíveis com foco em proteção patrimonial, relações contratuais e segurança nas decisões do dia a dia.",
    intro:
      "Atuamos em demandas cíveis com atenção à realidade de cada cliente, priorizando organização, estratégia e comunicação acessível para quem não é da área jurídica.",
    services: [
      "Elaboração e revisão de contratos",
      "Cobranças e execuções",
      "Responsabilidade civil e pedidos de indenização",
      "Conflitos de vizinhança e questões de condomínio",
      "Direito do consumidor",
      "Cumprimento de obrigações contratuais",
      "Negociação e mediação extrajudicial",
    ],
    situations: [
      "Assinatura de contrato sem segurança jurídica",
      "Prejuízos causados por descumprimento contratual",
      "Cobranças indevidas ou inadimplência",
      "Conflitos patrimoniais e obrigações entre particulares",
      "Necessidade de prevenir litígios com orientação prévia",
    ],
    approach:
      "Buscamos soluções sólidas e proporcionais, com leitura cuidadosa dos documentos, visão estratégica e atuação técnica para reduzir riscos e proteger interesses legítimos.",
    cta: "Conte com orientação cível segura e linguagem direta.",
  },
];

export const differentials = [
  {
    title: "Atendimento humano e acessível",
    text: "Explicamos cada etapa com objetividade, sem excesso de termos técnicos, para que você compreenda seu processo com tranquilidade.",
  },
  {
    title: "Estratégia jurídica personalizada",
    text: "Cada caso é analisado de forma individual, com critérios técnicos e alinhamento claro sobre caminhos possíveis.",
  },
  {
    title: "Comunicação responsável",
    text: "Mantemos informação constante e transparente sobre andamento, documentos necessários e decisões importantes.",
  },
  {
    title: "Atuação ética e consistente",
    text: "Nossa conduta é orientada por responsabilidade profissional, respeito ao cliente e compromisso com a boa prática jurídica.",
  },
];

export const trustHighlights = [
  "Atendimento presencial e digital com suporte dedicado",
  "Atuação focada em Franca-SP e região",
  "Linguagem clara para quem não é da área jurídica",
  "Equipe com atuação multidisciplinar em três áreas centrais",
];

export const team: LawyerProfile[] = [
  {
    slug: "helena-prado",
    name: "Dra. Helena Prado",
    role: "Sócia-fundadora",
    oab: "OAB/SP 000.000",
    imageDirection:
      "Retrato profissional em preto e branco, luz lateral suave, fundo de escritório com textura discreta.",
    miniBio:
      "Advogada com atuação em Previdenciário e Cível, focada em planejamento jurídico e comunicação clara com clientes 40+.",
    fullBio:
      "Dra. Helena Prado conduz atendimentos com abordagem técnica e acolhedora, priorizando organização documental e previsibilidade do caminho jurídico. Sua atuação combina atenção ao detalhe, escuta ativa e estratégia objetiva, especialmente em demandas previdenciárias e patrimoniais.",
    education: [
      "Bacharelado em Direito - Universidade de Franca (UNIFRAN)",
      "Pós-graduação em Direito Previdenciário",
      "Curso de Atualização em Prática Cível Estratégica",
    ],
    expertise: ["Direito Previdenciário", "Direito Cível"],
    languages: ["Português"],
    email: "helena.prado@testeetesteadvocacia.com.br",
  },
  {
    slug: "ricardo-menezes",
    name: "Dr. Ricardo Menezes",
    role: "Advogado",
    oab: "OAB/SP 000.001",
    imageDirection:
      "Retrato natural em tons dessaturados, expressão confiante, cenário contemporâneo e sóbrio.",
    miniBio:
      "Atua em Direito Trabalhista, com experiência em análise de verbas, negociação e condução técnica de litígios.",
    fullBio:
      "Dr. Ricardo Menezes atua com foco em relações de trabalho, prestando orientação segura tanto para trabalhadores quanto para empresas. Sua prática valoriza documentação robusta, estratégia realista e comunicação transparente sobre riscos, prazos e possibilidades processuais.",
    education: [
      "Bacharelado em Direito - Faculdade de Direito de Franca",
      "Especialização em Direito e Processo do Trabalho",
      "Formação complementar em negociação aplicada a conflitos",
    ],
    expertise: ["Direito Trabalhista", "Consultivo Empresarial Trabalhista"],
    languages: ["Português", "Inglês"],
    email: "ricardo.menezes@testeetesteadvocacia.com.br",
  },
  {
    slug: "camila-duarte",
    name: "Dra. Camila Duarte",
    role: "Advogada",
    oab: "OAB/SP 000.002",
    imageDirection:
      "Retrato editorial em preto e branco, composição limpa e elegante, com profundidade de campo suave.",
    miniBio:
      "Advogada com atuação em Cível e Previdenciário, dedicada a soluções estruturadas e atendimento próximo.",
    fullBio:
      "Dra. Camila Duarte trabalha com visão integrada entre demandas cíveis e previdenciárias, oferecendo suporte completo desde a análise inicial até a condução da demanda. Seu atendimento é pautado por clareza, organização e compromisso com decisões bem fundamentadas.",
    education: [
      "Bacharelado em Direito - Centro Universitário Municipal de Franca",
      "Pós-graduação em Direito Civil e Processo Civil",
      "Extensão em Prática Previdenciária Administrativa",
    ],
    expertise: ["Direito Cível", "Direito Previdenciário"],
    languages: ["Português", "Espanhol"],
    email: "camila.duarte@testeetesteadvocacia.com.br",
  },
];

export const faqItems = [
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "O primeiro contato é dedicado a entender sua situação, revisar os documentos iniciais e explicar, de forma simples, quais caminhos jurídicos podem ser avaliados. Você recebe orientação objetiva sobre próximos passos.",
  },
  {
    question: "Preciso ter todos os documentos antes de procurar o escritório?",
    answer:
      "Não. Caso ainda falte algum documento, nossa equipe orienta exatamente o que é necessário e como organizar cada item para uma análise mais segura.",
  },
  {
    question: "Atendem somente casos em Franca-SP?",
    answer:
      "Nosso foco principal é Franca-SP e região. Também realizamos atendimentos digitais quando o caso permite, preservando a mesma qualidade técnica e de comunicação.",
  },
  {
    question: "Quanto tempo leva um processo previdenciário?",
    answer:
      "O prazo varia conforme o tipo de benefício, a etapa do caso (administrativa ou judicial) e a complexidade dos documentos. No atendimento inicial, apresentamos uma estimativa realista para sua situação.",
  },
  {
    question: "Fui demitido e tenho dúvidas sobre meus direitos. O que fazer?",
    answer:
      "É recomendado reunir documentos como contrato, holerites e termo de rescisão para uma avaliação técnica. A partir disso, orientamos com clareza quais medidas podem ser adotadas.",
  },
  {
    question: "Vocês fazem revisão de aposentadoria já concedida?",
    answer:
      "Sim, quando há elementos técnicos que indiquem possível inconsistência no cálculo ou no enquadramento do benefício. A revisão depende de análise individual e documental.",
  },
  {
    question: "Atendem empresas em Direito Trabalhista?",
    answer:
      "Sim. Oferecemos orientação preventiva, revisão de práticas e suporte em conflitos trabalhistas, sempre com foco em segurança jurídica e conformidade.",
  },
  {
    question: "Posso resolver meu caso apenas pelo WhatsApp?",
    answer:
      "O WhatsApp é um canal importante para contato e agendamento. Dependendo da demanda, parte do atendimento pode ser digital, mas algumas etapas exigem análise formal de documentos e reuniões estruturadas.",
  },
  {
    question: "O escritório garante resultado?",
    answer:
      "Não. Na advocacia, não é possível garantir resultado. Nosso compromisso é atuar com técnica, ética, transparência e dedicação em todas as fases do caso.",
  },
  {
    question: "Como recebo atualizações do meu processo?",
    answer:
      "Você recebe informações periódicas por canais combinados no início do atendimento, com linguagem clara sobre movimentações relevantes e próximos passos.",
  },
];

export const footerColumns = {
  institution: [
    { label: "Sobre o Escritório", href: "/sobre" },
    { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
    { label: "Equipe", href: "/equipe" },
  ],
  support: [
    { label: "Perguntas Frequentes", href: "/faq" },
    { label: "Contato", href: "/contato" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  ],
};

export const homeSeo = {
  title: "Advocacia em Franca-SP com atuação em Previdenciário, Trabalhista e Cível",
  description:
    "Teste e teste Advocacia: escritório em Franca-SP com atendimento jurídico claro, humano e responsável para questões previdenciárias, trabalhistas e cíveis.",
};

export function getAreaBySlug(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getLawyerBySlug(slug: string) {
  return team.find((lawyer) => lawyer.slug === slug);
}
