export const SITE = {
  name: "FeiraBox — Mercado & Ofício",
  shortName: "FeiraBox",
  url: "https://feirabox.ufms.br",
  description:
    "Feira livre direto na sua porta em Campo Grande/MS: caixas de hortifrúti, artesanais e pantaneiras da agricultura familiar de Mato Grosso do Sul. Piloto oficial no Mercado Escola UFMS. Em breve na App Store e Google Play — assinaturas exclusivas no app.",
  keywords: [
    "feira livre Campo Grande",
    "cesta orgânica Campo Grande MS",
    "agricultura familiar Mato Grosso do Sul",
    "hortifrúti fresco Campo Grande",
    "caixa de feira por assinatura",
    "Mercado Escola UFMS",
    "feirantes Campo Grande MS",
    "queijo pantaneiro artesanal",
    "mel silvestre Pantanal",
    "geleias artesanais MS",
    "feirabox",
    "feirabox app",
    "cesta agroecológica assinatura",
  ],
  locale: "pt_BR",
  language: "pt-BR",
  email: "contato@feirabox.ufms.br",
  address: {
    locality: "Campo Grande",
    region: "MS",
    country: "BR",
    place: "Cidade Universitária UFMS",
  },
  ogImage: {
    url: "https://lh3.googleusercontent.com/aida/AEtjO1Xe6hgjTPDJsCJXB_j2MF7HZ-N9GxXMko_XM43llUYmXWwqCpnDQNKp6gQf8hP2IKtovLLppmGK64qJQ6JCaw-qzjqetT8LxonBcbNNhOxVkRX2lADKVfwOwAbg4fQ41r8p3lC04ElidMdvbpQXrewzymertCHcLpsBa39iEUuYiZ8VskuKon8epWWl8vm6NKcoxOm7EfwE0W8_rk2nYt4ve62HQ1UIPVDIdYFY9ZREBrWg3jkOo8oVMw",
    width: 1200,
    height: 630,
    alt: "Caixa rústica FeiraBox com hortifrúti orgânicos, queijo artesanal e mel silvestre do Pantanal",
  },
  sections: [
    { id: "como-funciona", name: "Como Funcionará" },
    { id: "modelos-caixas", name: "Modelos de Caixas" },
    { id: "feirantes", name: "Para Feirantes" },
    { id: "depoimentos", name: "Depoimentos" },
    { id: "piloto-ufms", name: "Piloto UFMS" },
    { id: "instituicoes", name: "Parcerias Institucionais" },
    { id: "faq", name: "Dúvidas Frequentes" },
    { id: "avise-me", name: "Lista de Espera" },
  ],
} as const;

/**
 * Métricas da faixa de números — Fase 3.
 * Edite aqui quando tiver os números reais (mantido "+45 feirantes mapeados" como pedido).
 */
/* TODO: dado real — atualizar números quando houver dados oficiais do piloto */
export const METRICS = {
  mappedFarmers: "+45",
  mappedFarmersLabel: "Feirantes Mapeados",
  mappedFarmersDescription: "Prontos para integrar o aplicativo",
} as const;

export const FAQ_DATA = [
  {
    question:
      "Quando o aplicativo estará disponível na Google Play e App Store?",
    answer:
      "Atualmente o FeiraBox está em fase ativa de validação com produtores rurais de Campo Grande e no Mercado Escola da UFMS. O lançamento oficial para iOS e Android está previsto para breve, com prioridade para inscritos na lista de espera.",
  },
  {
    question: "Poderei fazer pedidos ou assinar caixas pelo site?",
    answer:
      "Não. Todas as assinaturas, montagens de caixas, personalização de itens e pagamentos serão 100% exclusivos do aplicativo móvel, garantindo rastreamento pontual e a melhor experiência de compra.",
  },
  {
    question: "O aplicativo será gratuito para baixar e usar?",
    answer:
      "Sim, o download do app FeiraBox será 100% gratuito tanto na App Store quanto na Google Play Store. Você paga exclusivamente pelos produtos e caixas agroecológicas que escolher assinar.",
  },
  {
    question: "Como funcionará a entrega ou retirada das caixas?",
    answer:
      "Cada feirante define como prefere entregar: você pode retirar sua caixa em um ponto de retirada indicado por ele ou receber em casa, com entrega feita pelo próprio feirante. As opções, os horários e as condições aparecem no perfil de cada banca antes de você assinar.",
  },
  {
    question: "Sou feirante do MS: como cadastrar minha banca no app?",
    answer:
      "É simples e acessível: acesse a página Para Feirantes (/feirantes) e envie seu contato. O cadastro é feito direto pelo celular, sem mensalidade de adesão, com ajuda da nossa equipe de suporte do primeiro acesso ao cadastro dos produtos.",
  },
  {
    question: "Como serei avisado do lançamento oficial nas lojas?",
    answer:
      "Basta preencher seu e-mail ou WhatsApp no formulário de lista de espera. Assim que as versões para Android e iOS forem publicadas, você receberá um link direto para ser um dos primeiros assinantes.",
  },
  {
    question: "Quanto vão custar as caixas?",
    answer:
      "Valores divulgados no lançamento. Quando lançarmos, cada banca publica o preço da sua caixa direto no app, sem taxa escondida.",
  },
  {
    question: "Qual será a área de entrega?",
    answer:
      "Quando lançarmos, começamos por Campo Grande/MS, com opção de retirada no Mercado Escola da UFMS. A área exata de entrega de cada banca aparece no perfil dela no app.",
  },
  {
    question: "Como vou pagar pelos pedidos?",
    answer:
      "Quando lançarmos, todos os pagamentos acontecem dentro do app, com confirmação na hora. Os meios de pagamento aceitos serão divulgados no lançamento.",
  },
  {
    question: "Sou feirante: como cadastro minha banca?",
    answer:
      "Acesse a página Para Feirantes e envie seu contato: nossa equipe chama você para o cadastro piloto, sem mensalidade de adesão.",
  },
  {
    question: "E se meu produto chegar com problema?",
    answer:
      "Quando lançarmos, você fala direto com a banca pelo app e nossa equipe acompanha até resolver. Nenhum caso fica sem resposta.",
  },
] as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organizacao`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.shortName,
    inLanguage: SITE.language,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organizacao` },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    inLanguage: SITE.language,
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function productListJsonLd() {
  const boxes = [
    {
      name: "Caixa Artesanato",
      description:
        "Produtos feitos à mão por artesãos regionais: crochê, decoração e cultura sul-mato-grossense.",
    },
    {
      name: "Caixa Artesanal & Doçuras",
      description:
        "Geleias de frutas nativas, mel silvestre do cerrado e pães rústicos de fermentação natural.",
    },
    {
      name: "Caixa Pantaneira & Queijaria",
      description:
        "Queijo caipira curado, doce de leite à lenha e iguarias do Pantanal e Cerrado.",
    },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/#caixas`,
    name: "Modelos de caixas FeiraBox disponíveis no aplicativo",
    itemListElement: boxes.map((box, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: box.name,
        description: box.description,
        brand: { "@type": "Brand", name: SITE.shortName },
        areaServed: "Campo Grande, Mato Grosso do Sul",
      },
    })),
  };
}
