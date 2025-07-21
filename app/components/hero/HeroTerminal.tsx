import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { useIntl } from "react-intl";

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

export default function HeroTerminal() {
  const intl = useIntl();
  return (
    <Terminal className="h-96 w-full">
      <div className="space-y-3 font-mono text-sm leading-relaxed">
        <TypingAnimation duration={TYPING_DURATION}>
          {intl.formatMessage({
            id: "terminal.situation.command",
            defaultMessage: "$ situation",
          })}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.SITUATION_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {intl.formatMessage({
            id: "terminal.situation.result",
            defaultMessage: "> Deadline critique. Tech legacy. Stack bancale.",
          })}
        </AnimatedSpan>
        <TypingAnimation
          duration={TYPING_DURATION}
          delay={ANIMATION_DELAYS.ACTION_COMMAND}
        >
          {intl.formatMessage({
            id: "terminal.action.command",
            defaultMessage: "$ action",
          })}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.ACTION_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {intl.formatMessage({
            id: "terminal.action.result",
            defaultMessage:
              "> Audit, refacto ciblé, CI/CD robuste, infra stable.",
          })}
        </AnimatedSpan>
        <TypingAnimation
          duration={TYPING_DURATION}
          delay={ANIMATION_DELAYS.OUTCOME_COMMAND}
        >
          {intl.formatMessage({
            id: "terminal.outcome.command",
            defaultMessage: "$ outcome",
          })}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.OUTCOME_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {intl.formatMessage({
            id: "terminal.outcome.result",
            defaultMessage:
              "> Livraison à l'heure. Équipe libérée. Business sécurisé.",
          })}
        </AnimatedSpan>
        <TypingAnimation
          duration={TYPING_DURATION}
          delay={ANIMATION_DELAYS.FEEDBACK_COMMAND}
        >
          {intl.formatMessage({
            id: "terminal.feedback.command",
            defaultMessage: "$ feedback",
          })}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.FEEDBACK_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {intl.formatMessage({
            id: "terminal.feedback.result",
            defaultMessage:
              '> "Alexandre a sauvé notre sprint. Et notre budget." – un CTO rassuré',
          })}
        </AnimatedSpan>
        <TypingAnimation
          duration={TYPING_DURATION}
          delay={ANIMATION_DELAYS.STATUS_COMMAND}
        >
          {intl.formatMessage({
            id: "terminal.current_status.command",
            defaultMessage: "$ current_status",
          })}
        </TypingAnimation>
        <AnimatedSpan
          delay={ANIMATION_DELAYS.STATUS_RESULT}
          className="terminal-result motion-safe:animate-fade-in"
        >
          {intl.formatMessage({
            id: "terminal.current_status.result",
            defaultMessage: "✅ Disponible pour projets critiques.",
          })}
        </AnimatedSpan>
      </div>
    </Terminal>
  );
}
