import {AnimatedSpan, Terminal, TypingAnimation} from "@/components/magicui/terminal";

const terminalData = {
    situation: {
        command: "$ situation",
        result: "> Deadline critique. Tech legacy. Stack bancale."
    },
    action: {
        command: "$ action",
        result: "> Audit, refacto ciblé, CI/CD robuste, infra stable."
    },
    outcome: {
        command: "$ outcome",
        result: "> Livraison à l’heure. Équipe libérée. Business sécurisé."
    },
    feedback: {
        command: "$ feedback",
        result: "> “Alexandre a sauvé notre sprint. Et notre budget.” – un CTO rassuré"
    },
    current_status: {
        command: "$ current_status",
        result: "✅ Disponible pour projets critiques."
    }
};

export default function HeroTerminal() {
    return (
        <Terminal className="h-96">
            <div className="space-y-3 font-mono text-sm leading-relaxed">
                <TypingAnimation duration={30}>{terminalData.situation.command}</TypingAnimation>
                <AnimatedSpan delay={400} className="terminal-result">{terminalData.situation.result}</AnimatedSpan>
                <TypingAnimation duration={30} delay={800}>{terminalData.action.command}</TypingAnimation>
                <AnimatedSpan delay={1200}>{terminalData.action.result}</AnimatedSpan>
                <TypingAnimation duration={30} delay={1800}>{terminalData.outcome.command}</TypingAnimation>
                <AnimatedSpan delay={2200} className="terminal-result">{terminalData.outcome.result}</AnimatedSpan>
                <TypingAnimation duration={30} delay={2600}>{terminalData.feedback.command}</TypingAnimation>
                <AnimatedSpan delay={3000} className="terminal-result">{terminalData.feedback.result}</AnimatedSpan>
                <TypingAnimation duration={30} delay={3400}>{terminalData.current_status.command}</TypingAnimation>
                <AnimatedSpan delay={3800} className="terminal-result">{terminalData.current_status.result}</AnimatedSpan>
            </div>
        </Terminal>
    )
}