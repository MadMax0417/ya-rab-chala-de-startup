export type QuestionId = "mrr" | "runway" | "cofounder" | "strategy" | "focus";

export type SurvivalOption = {
  id: string;
  label: string;
  points: number;
  observation: string;
  recommendation: string;
};

export type SurvivalQuestion = {
  id: QuestionId;
  prompt: string;
  shortLabel: string;
  options: SurvivalOption[];
};

export type AnswerMap = Partial<Record<QuestionId, string>>;
export type CompleteAnswerMap = Record<QuestionId, string>;

export type SurvivalBand = {
  max: number;
  label: string;
  diagnosis: string;
  note: string;
  tone: "critical" | "fragile" | "ambiguous" | "viable" | "excellent";
};

export type SurvivalReport = {
  score: number;
  maxScore: number;
  band: SurvivalBand;
  diagnosis: string;
  observations: string[];
  recommendation: string;
  spiritual: string;
};

export const SURVIVAL_QUESTIONS: SurvivalQuestion[] = [
  {
    id: "mrr",
    prompt: "What's your monthly recurring revenue?",
    shortLabel: "Revenue",
    options: [
      {
        id: "zero",
        label: "₹0",
        points: 0,
        observation:
          "Your MRR is a perfect zero. It has achieved a kind of spiritual purity.",
        recommendation: "Send one invoice this week. Not a pitch deck. An invoice.",
      },
      {
        id: "small",
        label: "₹1–10,000",
        points: 10,
        observation:
          "You have revenue. It is not yet a business, but it is no longer a rumour.",
        recommendation:
          "Find the one customer who paid and ask why. Then find four more like them.",
      },
      {
        id: "mid",
        label: "₹10,000–₹1 lakh",
        points: 20,
        observation:
          "You have graduated from pocket money to mildly concerning optimism.",
        recommendation: "Raise your prices before you raise a round.",
      },
      {
        id: "large",
        label: "₹1 lakh+",
        points: 30,
        observation: "You have real revenue. Please check that it is not a bank error.",
        recommendation: "Protect the boring thing that pays you. Scale it before you rename it.",
      },
    ],
  },
  {
    id: "runway",
    prompt: "How much runway do you have?",
    shortLabel: "Runway",
    options: [
      {
        id: "under-one",
        label: "Less than one month",
        points: 0,
        observation:
          "Your runway is shorter than the average investor follow-up email.",
        recommendation: "Collect receivables today. Not next week. Today.",
      },
      {
        id: "one-three",
        label: "1–3 months",
        points: 6,
        observation:
          "You have enough runway to discover the problem, not enough to solve it comfortably.",
        recommendation:
          "Cancel one subscription you do not use and speak to one paying customer today.",
      },
      {
        id: "three-six",
        label: "3–6 months",
        points: 14,
        observation:
          "A respectable amount of time to find traction or become a cautionary tale.",
        recommendation:
          "Choose one metric that must improve in the next 30 days. Ignore the rest.",
      },
      {
        id: "six-plus",
        label: "More than six months",
        points: 24,
        observation: "You have runway. This is rare. Please do not waste it on a rebrand.",
        recommendation:
          "Use the cushion to have the customer conversation you have been avoiding.",
      },
    ],
  },
  {
    id: "cofounder",
    prompt: "What's your cofounder situation?",
    shortLabel: "Team",
    options: [
      {
        id: "aligned",
        label: "We're perfectly aligned.",
        points: 14,
        observation:
          "Two founders, one vision, zero unresolved equity conversations. Suspicious.",
        recommendation:
          "Put the hard conversation on the calendar before it becomes a resignation.",
      },
      {
        id: "conversation",
        label: "We need to have a conversation.",
        points: 8,
        observation: "The cofounder chat is not a chat. It is a countdown.",
        recommendation:
          "Have the conversation this week. Write down who owns what.",
      },
      {
        id: "left",
        label: "Someone has already left.",
        points: 0,
        observation: "The cap table survived. The WhatsApp group did not.",
        recommendation: "Update the cap table and the narrative. In that order.",
      },
      {
        id: "solo",
        label: "I'm the entire team.",
        points: 5,
        observation:
          "You are the founder, the intern, and the person who replies to your own support emails.",
        recommendation:
          "Document one process and hire the first person who can take it off your plate.",
      },
    ],
  },
  {
    id: "strategy",
    prompt: "What's your current strategy?",
    shortLabel: "Strategy",
    options: [
      {
        id: "clarity",
        label: "We know exactly what we're building.",
        points: 18,
        observation: "Clarity is excellent. Delusion is also confident.",
        recommendation:
          "Write down the one thing you will not pivot away from for 90 days.",
      },
      {
        id: "pivoting",
        label: "We're pivoting.",
        points: 4,
        observation: "You are not pivoting. You are redecorating.",
        recommendation: "Finish one thing before starting the next. One.",
      },
      {
        id: "ai",
        label: "We're adding AI to everything.",
        points: 6,
        observation:
          "The AI does not know why the customers are leaving either.",
        recommendation:
          "Remove the word AI from the homepage and see if the proposition still makes sense.",
      },
      {
        id: "pmf",
        label: "We're still looking for product-market fit.",
        points: 0,
        observation:
          "At least you are honest. The market remains unmoved by your honesty.",
        recommendation:
          "Speak to five people who did not buy. Listen without pitching.",
      },
    ],
  },
  {
    id: "focus",
    prompt: "How much time do you spend building versus selling?",
    shortLabel: "Focus",
    options: [
      {
        id: "selling",
        label: "Mostly selling.",
        points: 14,
        observation:
          "You spend most of your time selling. Your codebase has filed a missing person report.",
        recommendation:
          "Keep selling. Then block two hours for the one bug that risks the deal.",
      },
      {
        id: "balanced",
        label: "Balanced between both.",
        points: 12,
        observation:
          "A balanced split. Either disciplined or indecisive, depending on the month.",
        recommendation:
          "Protect the balance for four weeks and see which side breaks first.",
      },
      {
        id: "building",
        label: "Mostly building.",
        points: 2,
        observation:
          "You are shipping features at an impressive pace to an audience that has not arrived.",
        recommendation: "Close the code editor. Speak to five potential customers.",
      },
      {
        id: "landing",
        label: "I just redesigned the landing page again.",
        points: 0,
        observation:
          "You redesigned the landing page again. The customers did not notice. There are no customers.",
        recommendation:
          "Stop redesigning the page. The bottleneck is outside the browser.",
      },
    ],
  },
];

const SPIRITUAL_SUFFIX: Record<QuestionId, string> = {
  mrr: "And send one invoice while You are at it.",
  runway: "And extend the runway by one small miracle.",
  cofounder: "And grant both cofounders the same WhatsApp reply time.",
  strategy: "And send product-market fit in the next funding cycle.",
  focus: "And protect the founder from another landing-page redesign.",
};

const BANDS: SurvivalBand[] = [
  {
    max: 19,
    label: "Critically pre-revenue",
    diagnosis:
      "Your startup has enormous technological potential, insufficient revenue, and dangerously high levels of founder delusion.",
    note: "Technically alive. Commercially theoretical.",
    tone: "critical",
  },
  {
    max: 39,
    label: "Spiritually funded",
    diagnosis:
      "You have the ambition of a unicorn and the revenue of a rounding error.",
    note: "The vision is strong. The evidence is on leave.",
    tone: "fragile",
  },
  {
    max: 59,
    label: "Operationally ambiguous",
    diagnosis:
      "There is a business in here somewhere, currently hiding behind the roadmap.",
    note: "Encouraging, in the way a coin flip is encouraging.",
    tone: "ambiguous",
  },
  {
    max: 79,
    label: "Suspiciously functional",
    diagnosis:
      "You have revenue, runway, and a strategy. We recommend sitting down.",
    note: "Do not celebrate. You may have customers.",
    tone: "viable",
  },
  {
    max: 100,
    label: "Please explain",
    diagnosis:
      "Your answers suggest an actual business. Are you sure you completed this honestly?",
    note: "Seek professional advice. Or a modest seed round.",
    tone: "excellent",
  },
];

export const MAX_SCORE = SURVIVAL_QUESTIONS.reduce(
  (total, question) =>
    total + Math.max(...question.options.map((option) => option.points)),
  0,
);

export function generateSurvivalReport(answers: CompleteAnswerMap): SurvivalReport {
  const answered = SURVIVAL_QUESTIONS.map((question, index) => {
    const optionId = answers[question.id];
    const option = question.options.find((candidate) => candidate.id === optionId);

    if (!option) {
      throw new Error(`Missing or invalid answer for ${question.id}`);
    }

    const questionMax = Math.max(...question.options.map((candidate) => candidate.points));

    return {
      question,
      option,
      index,
      ratio: questionMax === 0 ? 0 : option.points / questionMax,
    };
  });

  const score = answered.reduce((total, answer) => total + answer.option.points, 0);
  const ranked = [...answered].sort(
    (a, b) => a.ratio - b.ratio || a.index - b.index,
  );
  const weakest = ranked[0];
  const band =
    BANDS.find((candidate) => score <= candidate.max) ?? BANDS[BANDS.length - 1];

  return {
    score,
    maxScore: MAX_SCORE,
    band,
    diagnosis: band.diagnosis,
    observations: ranked.slice(0, 3).map((answer) => answer.option.observation),
    recommendation: weakest.option.recommendation,
    spiritual: `Ya Rab, chala de ye startup. ${SPIRITUAL_SUFFIX[weakest.question.id]}`,
  };
}

export function buildSurvivalShareText(report: SurvivalReport, url: string) {
  return [
    `I scored ${report.score}/${report.maxScore} on the Ya Rab Startup Survival Test.`,
    "",
    `“${report.diagnosis}”`,
    "",
    report.spiritual,
    "",
    url,
  ].join("\n");
}

export function answersAreComplete(answers: AnswerMap): answers is CompleteAnswerMap {
  return SURVIVAL_QUESTIONS.every((question) => Boolean(answers[question.id]));
}
