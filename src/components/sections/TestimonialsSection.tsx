import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Заказываю запчасти уже 3 года. Всегда оригинал, быстрая доставка и адекватные цены. Рекомендую!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Александр П.",
    role: "Владелец Toyota Camry",
  },
  {
    text: "Нужны были тормозные колодки на старую модель. Менеджер нашел за 10 минут, привезли на следующий день.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий С.",
    role: "Владелец Honda Accord",
  },
  {
    text: "Отличный магазин! Большой выбор масел, фильтров и расходников. Цены ниже, чем у конкурентов.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Мария К.",
    role: "Владелец Mazda CX-5",
  },
  {
    text: "Заказал детали для подвески. Всё пришло в упаковке, установилось без проблем. Качество на высоте!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Игорь В.",
    role: "Владелец BMW 5-series",
  },
  {
    text: "Поддержка работает четко. Помогли подобрать аналог дорогой детали, сэкономил 15 тысяч.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Елена Л.",
    role: "Владелец Kia Sportage",
  },
  {
    text: "Постоянно беру здесь аксессуары для авто. Удобный каталог, быстрое оформление, лучший магазин!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Андрей М.",
    role: "Владелец Ford Focus",
  },
  {
    text: "Требовалась редкая запчасть. Нашли за 2 дня и доставили. Профессионалы своего дела!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Светлана Р.",
    role: "Владелец Volkswagen Polo",
  },
  {
    text: "Удобный сайт, легко найти нужное. Цены приятно удивляют. Доставка точно в срок!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Олег Н.",
    role: "Владелец Hyundai Solaris",
  },
  {
    text: "Перешел сюда по совету друга. Не разочаровался — всё на высшем уровне. Буду заказывать ещё!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Виктория Ж.",
    role: "Владелец Nissan Qashqai",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["Bosch", "Brembo", "Castrol", "Mann Filter", "NGK", "Continental"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят пользователи
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Узнайте мнение наших клиентов о платформе.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Нам доверяют лидеры индустрии</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}