"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  RotateCcw,
  Share2,
} from "lucide-react";
import {
  answersAreComplete,
  generateSurvivalReport,
  SURVIVAL_QUESTIONS,
  type AnswerMap,
  type SurvivalReport,
} from "@/lib/survival";
import { shareSurvivalReport } from "@/lib/share";

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 bg-ink px-4 py-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-paper transition hover:bg-signal disabled:cursor-not-allowed disabled:bg-ink/30";

export default function SurvivalSimulator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [report, setReport] = useState<SurvivalReport | null>(null);
  const [shareStatus, setShareStatus] = useState("");
  const [manualShareText, setManualShareText] = useState("");
  const [isSharing, setIsSharing] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const questionRef = useRef<HTMLLegendElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const hasMountedRef = useRef(false);

  const question = SURVIVAL_QUESTIONS[step];
  const selectedOption = answers[question.id];
  const isLastQuestion = step === SURVIVAL_QUESTIONS.length - 1;
  const progress = ((step + 1) / SURVIVAL_QUESTIONS.length) * 100;

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (!report) {
      questionRef.current?.focus({ preventScroll: true });
    }
  }, [step, report]);

  useEffect(() => {
    if (!report) return;

    resultHeadingRef.current?.focus({ preventScroll: true });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [report]);

  function chooseOption(optionId: string) {
    setAnswers((current) => ({ ...current, [question.id]: optionId }));
  }

  function handleNext(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedOption) return;

    if (!isLastQuestion) {
      setStep((current) => current + 1);
      return;
    }

    if (!answersAreComplete(answers)) return;

    setReport(generateSurvivalReport(answers));
    setShareStatus("");
    setManualShareText("");
  }

  function resetTest() {
    setAnswers({});
    setStep(0);
    setReport(null);
    setShareStatus("");
    setManualShareText("");
    setIsSharing(false);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  async function handleShare() {
    if (!report || isSharing) return;

    setIsSharing(true);
    setShareStatus("Preparing your suffering for public consumption…");
    setManualShareText("");

    try {
      const { outcome, shareText } = await shareSurvivalReport(report);

      if (outcome === "shared") {
        setShareStatus("Shared. Your suffering is now public.");
      } else if (outcome === "copied") {
        setShareStatus(
          "Copied to clipboard. Send it to a founder who needs to suffer with you.",
        );
      } else if (outcome === "cancelled") {
        setShareStatus("Sharing cancelled. Your suffering remains private.");
      } else {
        setManualShareText(shareText);
        setShareStatus(
          "Automatic copying failed. Select the report text below and copy it manually.",
        );
      }
    } catch {
      setShareStatus("Something went wrong. The universe is unavailable right now.");
    } finally {
      setIsSharing(false);
    }
  }

  return (
    <section
      ref={sectionRef}
      id="survival"
      aria-labelledby="survival-title"
      className="scroll-mt-24 border-b border-rule bg-paper-deep/40 py-16 sm:py-20 lg:py-24"
    >
      <div className="shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
            <span className="text-signal">07</span>
            <span className="mx-2 text-rule">/</span>
            Flagship feature
          </p>
          <h2
            id="survival-title"
            className="mt-5 max-w-lg text-balance font-display text-[clamp(2.8rem,5.2vw,5.4rem)] font-extrabold leading-[0.9] tracking-[-0.06em]"
          >
            Will your startup survive?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Answer five uncomfortable questions. Receive one brutally honest
            assessment.
          </p>

          <div className="mt-8 max-w-sm border border-ink bg-paper">
            <div className="flex items-center justify-between border-b border-ink px-4 py-2.5">
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted">
                Assessment progress
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-signal">
                {report ? "Complete" : `${step + 1} / 5`}
              </span>
            </div>
            <ol className="divide-y divide-rule">
              {SURVIVAL_QUESTIONS.map((item, index) => {
                const complete = Boolean(report) || Boolean(answers[item.id]);
                const current = !report && index === step;

                return (
                  <li
                    key={item.id}
                    className={`flex items-center justify-between gap-3 px-4 py-3 ${
                      current ? "bg-paper-deep/60" : ""
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[8px] tracking-[0.1em] ${
                          current ? "text-signal" : "text-muted"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-xs ${
                          current ? "font-medium text-ink" : "text-muted"
                        }`}
                      >
                        {item.shortLabel}
                      </span>
                    </span>
                    {complete ? (
                      <Check
                        size={12}
                        strokeWidth={2}
                        aria-label="Answered"
                        className="text-signal"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 ${
                          current ? "bg-signal" : "border border-rule"
                        }`}
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>

          <p className="mt-4 max-w-sm font-mono text-[8px] uppercase leading-relaxed tracking-[0.13em] text-muted">
            1,024 possible outcomes. 0 scientifically valid. No sign-up, no AI, no
            data leaves your browser.
          </p>
        </div>

        <div>
          {report ? (
            <div className="border border-ink bg-paper">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink bg-ink px-4 py-3 text-paper">
                <h3
                  ref={resultHeadingRef}
                  id="survival-report-title"
                  tabIndex={-1}
                  className="font-mono text-[9px] uppercase tracking-[0.15em] text-paper/70 focus-visible:outline-none"
                >
                  Startup health report
                </h3>
                <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-paper/55">
                  Confidential-ish / Unverified
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-end">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                      Survival score
                    </p>
                    <p className="mt-1 flex items-baseline gap-1 font-display text-[clamp(5rem,11vw,8rem)] font-extrabold leading-none tracking-[-0.07em]">
                      {report.score}
                      <span className="font-mono text-sm font-normal tracking-normal text-muted">
                        /{report.maxScore}
                      </span>
                    </p>
                  </div>

                  <div className="sm:pb-2">
                    <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                      <span>0</span>
                      <span>100</span>
                    </div>
                    <div
                      className="mt-1 h-2 w-full bg-rule"
                      role="img"
                      aria-label={`Survival score ${report.score} out of ${report.maxScore}`}
                    >
                      <div
                        className="h-full bg-signal"
                        style={{ width: `${report.score}%` }}
                      />
                    </div>
                    <span className="mt-3 inline-block border border-signal/25 bg-signal-soft px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-signal">
                      {report.band.label}
                    </span>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {report.band.note}
                    </p>
                  </div>
                </div>

                <div className="mt-7 border-t border-ink pt-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                    Diagnosis
                  </p>
                  <p className="mt-2 text-balance font-display text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                    &ldquo;{report.diagnosis}&rdquo;
                  </p>
                </div>

                <div className="mt-6 grid gap-6 border-t border-rule pt-5 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                      Personalised observations
                    </p>
                    <ol className="mt-3 space-y-3">
                      {report.observations.map((observation, index) => (
                        <li key={observation} className="flex gap-3">
                          <span className="shrink-0 pt-0.5 font-mono text-[8px] tracking-[0.1em] text-signal">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm leading-relaxed text-ink/80">
                            {observation}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="border border-rule bg-paper-deep/45 p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                      Recommended next step
                    </p>
                    <p className="mt-2 font-display text-xl font-semibold leading-snug tracking-[-0.02em]">
                      {report.recommendation}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border border-ink bg-ink p-5 text-paper">
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-paper/50">
                    Spiritual intervention
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                    &ldquo;{report.spiritual}&rdquo;
                  </p>
                  <p className="mt-3 border-t border-paper/15 pt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-paper/55">
                    Escalated to: The Universe / No response SLA
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleShare}
                    disabled={isSharing}
                    className={`${primaryButtonClass} flex-1`}
                  >
                    <Share2 size={14} strokeWidth={1.9} aria-hidden="true" />
                    {isSharing ? "Sharing…" : "Share My Suffering"}
                  </button>
                  <button
                    type="button"
                    onClick={resetTest}
                    className="inline-flex flex-1 items-center justify-center gap-2 border border-ink px-4 py-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition hover:bg-paper-deep"
                  >
                    <RotateCcw size={14} strokeWidth={1.9} aria-hidden="true" />
                    Run the Test Again
                  </button>
                </div>

                <p
                  aria-live="polite"
                  className="mt-3 min-h-4 text-xs leading-relaxed text-muted"
                >
                  {shareStatus}
                </p>

                {manualShareText ? (
                  <div className="mt-2">
                    <label
                      htmlFor="manual-share-text"
                      className="font-mono text-[8px] uppercase tracking-[0.13em] text-muted"
                    >
                      Copy this report
                    </label>
                    <textarea
                      id="manual-share-text"
                      readOnly
                      value={manualShareText}
                      rows={5}
                      onFocus={(event) => event.currentTarget.select()}
                      className="mt-2 w-full resize-y border border-ink bg-paper px-3 py-2 font-mono text-xs leading-relaxed text-ink focus:border-signal"
                    />
                  </div>
                ) : null}

                <p className="mt-5 border-t border-rule pt-3 font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                  This score is entertainment, not a scientifically valid business
                  assessment. Please consult an accountant, a customer, or both.
                </p>
              </div>
            </div>
          ) : (
            <div className="border border-ink bg-paper">
              <div className="flex items-center justify-between border-b border-ink bg-ink px-4 py-3 text-paper">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-paper/70">
                  Startup health check
                </p>
                <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-paper/55">
                  Question {String(step + 1).padStart(2, "0")} / 05
                </p>
              </div>

              <div
                className="h-1 bg-rule"
                role="progressbar"
                aria-label="Question progress"
                aria-valuemin={1}
                aria-valuemax={5}
                aria-valuenow={step + 1}
              >
                <div
                  className="h-full bg-signal transition-[width] duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <form onSubmit={handleNext} className="p-5 sm:p-7">
                <div key={question.id} className="question-in">
                  <fieldset>
                    <legend
                      ref={questionRef}
                      tabIndex={-1}
                      className="text-balance font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-bold leading-[1.02] tracking-[-0.04em] focus-visible:outline-none"
                    >
                      {question.prompt}
                    </legend>

                    <div className="mt-6 space-y-2">
                      {question.options.map((option, index) => {
                        const selected = selectedOption === option.id;

                        return (
                          <label key={option.id} className="block cursor-pointer">
                            <input
                              type="radio"
                              name={question.id}
                              value={option.id}
                              checked={selected}
                              onChange={() => chooseOption(option.id)}
                              className="peer sr-only"
                            />
                            <span
                              className={`flex items-center gap-3 border px-3.5 py-3.5 transition sm:gap-4 sm:px-4 ${
                                selected
                                  ? "border-ink bg-paper-deep/70"
                                  : "border-rule bg-transparent hover:border-ink/35"
                              } peer-focus-visible:ring-2 peer-focus-visible:ring-signal peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-paper`}
                            >
                              <span
                                className={`grid h-6 w-6 shrink-0 place-items-center border font-mono text-[9px] ${
                                  selected
                                    ? "border-ink bg-ink text-paper"
                                    : "border-rule text-muted"
                                }`}
                                aria-hidden="true"
                              >
                                {String.fromCharCode(65 + index)}
                              </span>
                              <span className="text-sm font-medium leading-snug text-ink">
                                {option.label}
                              </span>
                              <span
                                className={`ml-auto grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                                  selected
                                    ? "border-signal bg-signal text-paper"
                                    : "border-rule"
                                }`}
                                aria-hidden="true"
                              >
                                {selected ? (
                                  <Check size={9} strokeWidth={3} />
                                ) : null}
                              </span>
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                </div>

                <div className="mt-7 flex flex-col-reverse gap-2 border-t border-rule pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.max(0, current - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center justify-center gap-2 border border-rule px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition hover:border-ink hover:text-ink disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowLeft size={13} strokeWidth={2} aria-hidden="true" />
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={!selectedOption}
                    className={primaryButtonClass}
                  >
                    {isLastQuestion ? "Generate my report" : "Continue"}
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </button>
                </div>

                <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                  Your answers stay in this tab. They are not stored or sent anywhere.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
