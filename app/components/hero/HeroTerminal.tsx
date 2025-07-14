import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

// Animation delay constants for better maintainability
const ANIMATION_DELAYS = {
  SITUATION_RESULT: 400,
  ACTION_COMMAND: 800,
  ACTION_RESULT: 1200,
  OUTCOME_COMMAND: 1600,
  OUTCOME_RESULT: 2000,
  FEEDBACK_COMMAND: 2400,
  FEEDBACK_RESULT: 2800,
  STATUS_COMMAND: 3200,
  STATUS_RESULT: 3600,
} as const;

// Animation duration constant
const TYPING_DURATION = 30;

const terminalData = {
  situation: {
    command: "$ situation",
    result: "> Deadline critique. Tech legacy. Stack bancale.",
  },
  action: {
    command: "$ action",
    result: "> Audit, refacto ciblé, CI/CD robuste, infra stable.",
  },
  outcome: {
    command: "$ outcome",
    result: "> Livraison à l'heure. Équipe libérée. Business sécurisé.",
  },
  feedback: {
    command: "$ feedback",
    result:
      '> "Alexandre a sauvé notre sprint. Et notre budget." – un CTO rassuré',
  },
  current_status: {
    command: "$ current_status",
    result: "✅ Disponible pour projets critiques.",
  },
};

export default function HeroTerminal() {
  return (
    <Terminal className="h-96 w-full">
      <div className="space-y-3 font-mono text-sm leading-relaxed">
        <TypingAnimation duration={TYPING_DURATION}>
          {terminalData.situation.command}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.SITUATION_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {terminalData.situation.result}
        </AnimatedSpan>
        <TypingAnimation
          duration={TYPING_DURATION}
          delay={ANIMATION_DELAYS.ACTION_COMMAND}
        >
          {terminalData.action.command}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.ACTION_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {terminalData.action.result}
        </AnimatedSpan>
        <TypingAnimation
          duration={TYPING_DURATION}
          delay={ANIMATION_DELAYS.OUTCOME_COMMAND}
        >
          {terminalData.outcome.command}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.OUTCOME_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {terminalData.outcome.result}
        </AnimatedSpan>
        <TypingAnimation
          duration={TYPING_DURATION}
          delay={ANIMATION_DELAYS.FEEDBACK_COMMAND}
        >
          {terminalData.feedback.command}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.FEEDBACK_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {terminalData.feedback.result}
        </AnimatedSpan>
        <TypingAnimation
          duration={TYPING_DURATION}
          delay={ANIMATION_DELAYS.STATUS_COMMAND}
        >
          {terminalData.current_status.command}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.STATUS_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {terminalData.current_status.result}
        </AnimatedSpan>
      </div>
    </Terminal>
  );
}
