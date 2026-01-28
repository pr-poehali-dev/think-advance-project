import Icon from "@/components/ui/icon"
import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6">Готовы к покупке?</h2>
        <p className="text-lg text-zinc-500 mb-10 text-balance">
          Присоединяйтесь к 15 000+ автовладельцев, которые доверяют нам свои автомобили. Начните покупки сегодня.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing">
            <LiquidCtaButton>Перейти в каталог</LiquidCtaButton>
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Связаться с нами</span>
            <Icon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}