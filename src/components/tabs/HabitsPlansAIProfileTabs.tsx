import { useState } from "react";
import Icon from "@/components/ui/icon";
import { CircleProgress, StatusDot, SectionTitle, IconName } from "@/components/ui/shared";

export function HabitsTab() {
  const habits = [
    { name: "Медитация", emoji: "🧘", streak: 14, target: 20, done: true, color: "#a855f7" },
    { name: "Чтение", emoji: "📖", streak: 7, target: 30, done: true, color: "#39ff6a" },
    { name: "Бег", emoji: "🏃", streak: 5, target: 15, done: false, color: "#63b3ff" },
    { name: "Без сахара", emoji: "🍃", streak: 21, target: 30, done: true, color: "#ff9f40" },
    { name: "Холодный душ", emoji: "❄️", streak: 3, target: 10, done: false, color: "#38bdf8" },
    { name: "Дневник", emoji: "✍️", streak: 9, target: 21, done: true, color: "#f472b6" },
  ];

  const heatmap = Array.from({ length: 28 }, () => Math.random());

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="pt-2 flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-white">Привычки</h1>
          <p className="text-muted-foreground text-sm mt-1">Строй систему, не цели</p>
        </div>
        <button className="w-9 h-9 rounded-xl glass-card flex items-center justify-center hover:scale-105 transition-transform">
          <Icon name="Plus" size={18} className="text-[#39ff6a]" />
        </button>
      </div>

      <div className="rounded-2xl p-4 glass-card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-widest">Выполнено сегодня</p>
            <p className="font-display text-4xl font-bold text-white mt-1">4 <span className="text-xl text-muted-foreground">/ 6</span></p>
          </div>
          <CircleProgress value={67} size={64} stroke={6} color="#39ff6a" />
        </div>
        <div className="flex gap-4 mt-4 pt-4 border-t border-border">
          <div className="text-center flex-1">
            <p className="font-display text-xl font-bold text-[#39ff6a]">21</p>
            <p className="text-[11px] text-muted-foreground">Макс. серия</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center flex-1">
            <p className="font-display text-xl font-bold text-white">59</p>
            <p className="text-[11px] text-muted-foreground">Всего дней</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center flex-1">
            <p className="font-display text-xl font-bold text-amber-400">83%</p>
            <p className="text-[11px] text-muted-foreground">Успешность</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {habits.map((habit, i) => (
          <div key={i} className="rounded-2xl px-4 py-3.5 glass-card-hover">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{habit.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-white font-body">{habit.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-display font-bold" style={{ color: habit.color }}>🔥 {habit.streak}</span>
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${habit.done ? "" : "border-muted-foreground"}`} style={habit.done ? { background: habit.color, borderColor: habit.color } : {}}>
                      {habit.done && <Icon name="Check" size={10} className="text-black" />}
                    </div>
                  </div>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(habit.streak / habit.target) * 100}%`, background: habit.color, transition: "width 0.6s ease" }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <SectionTitle title="Активность за март" />
        <div className="grid grid-cols-7 gap-1">
          {heatmap.map((intensity, i) => (
            <div key={i} className="aspect-square rounded-md transition-all hover:scale-110" style={{
              background: intensity > 0.7 ? "rgba(57,255,106,0.7)" : intensity > 0.4 ? "rgba(57,255,106,0.3)" : "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.04)"
            }} />
          ))}
        </div>
        <div className="flex items-center justify-end gap-2 mt-2">
          <span className="text-[11px] text-muted-foreground">Меньше</span>
          {[0.04, 0.2, 0.4, 0.7].map((op, i) => (
            <div key={i} className="w-3 h-3 rounded-sm" style={{ background: `rgba(57,255,106,${op})` }} />
          ))}
          <span className="text-[11px] text-muted-foreground">Больше</span>
        </div>
      </div>
    </div>
  );
}

export function PlansTab() {
  const [selectedDay, setSelectedDay] = useState(28);
  const days = [
    { num: 25, day: "Пн" }, { num: 26, day: "Вт" }, { num: 27, day: "Ср" },
    { num: 28, day: "Чт" }, { num: 29, day: "Пт" }, { num: 30, day: "Сб" }, { num: 31, day: "Вс" },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="pt-2 flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-white">Планы</h1>
          <p className="text-muted-foreground text-sm mt-1">Март 2026</p>
        </div>
        <button className="w-9 h-9 rounded-xl glass-card flex items-center justify-center hover:scale-105 transition-transform">
          <Icon name="Plus" size={18} className="text-[#39ff6a]" />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
        {days.map((d) => (
          <button key={d.num} onClick={() => setSelectedDay(d.num)}
            className="flex-shrink-0 flex flex-col items-center gap-1.5 px-3.5 py-3 rounded-2xl transition-all"
            style={selectedDay === d.num ? {
              background: "linear-gradient(135deg, #39ff6a, #00d4aa)",
              boxShadow: "0 4px 20px rgba(57,255,106,0.3)"
            } : {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)"
            }}>
            <span className={`text-[11px] ${selectedDay === d.num ? "text-black" : "text-muted-foreground"}`}>{d.day}</span>
            <span className={`font-display text-lg font-bold ${selectedDay === d.num ? "text-black" : "text-white"}`}>{d.num}</span>
            {d.num === 28 && <div className={`w-1.5 h-1.5 rounded-full ${selectedDay === d.num ? "bg-black" : "bg-[#39ff6a]"}`} />}
          </button>
        ))}
      </div>

      <div>
        <SectionTitle title="28 марта, суббота" />
        <div className="space-y-2">
          {[
            { time: "09:00", title: "Тренировка — верхний отдел", tag: "Здоровье", color: "#39ff6a", duration: "45 мин" },
            { time: "11:30", title: "Ревью Q1 — финансы", tag: "Работа", color: "#63b3ff", duration: "1 ч" },
            { time: "14:00", title: "Встреча с командой", tag: "Работа", color: "#63b3ff", duration: "1.5 ч" },
            { time: "17:00", title: "Прогулка в парке", tag: "Отдых", color: "#a855f7", duration: "30 мин" },
            { time: "20:00", title: "Чтение — 30 страниц", tag: "Привычка", color: "#ff9f40", duration: "30 мин" },
          ].map((event, i) => (
            <div key={i} className="flex gap-3 items-stretch">
              <div className="flex flex-col items-end pt-1 w-10 flex-shrink-0">
                <span className="text-[11px] text-muted-foreground">{event.time}</span>
                <div className="w-px flex-1 mt-2" style={{ background: "rgba(255,255,255,0.08)" }} />
              </div>
              <div className="flex-1 rounded-2xl px-4 py-3 mb-1 glass-card-hover" style={{ borderLeft: `3px solid ${event.color}` }}>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white font-body">{event.title}</p>
                  <span className="text-[11px] text-muted-foreground">{event.duration}</span>
                </div>
                <span className="text-[11px] mt-1 inline-block px-2 py-0.5 rounded-full" style={{ background: `${event.color}18`, color: event.color }}>{event.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AITab() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="pt-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl gradient-neon flex items-center justify-center">
            <Icon name="Sparkles" size={18} className="text-black" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-white">AI-Инсайты</h1>
            <p className="text-[#39ff6a] text-[11px] flex items-center gap-1.5">
              <StatusDot color="neon" /> Обновлено 5 минут назад
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl p-5" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(57,255,106,0.06) 100%)", border: "1px solid rgba(168,85,247,0.3)" }}>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-2xl gradient-neon flex items-center justify-center flex-shrink-0">
            <Icon name="Brain" size={18} className="text-black" />
          </div>
          <div>
            <p className="text-[11px] text-purple-300 uppercase tracking-widest">Nexora AI</p>
            <p className="text-white font-body text-sm leading-relaxed mt-1">
              Анализ последних 7 дней показывает отличную динамику. Индекс здоровья вырос на <span className="text-[#39ff6a] font-semibold">+18%</span>, финансовая дисциплина на высшем уровне. Вижу 3 области для роста.
            </p>
          </div>
        </div>
      </div>

      <div>
        <SectionTitle title="Персональные рекомендации" />
        <div className="space-y-3">
          {[
            {
              icon: "Moon", color: "#63b3ff",
              gradient: "rgba(99,179,255,0.1)", borderColor: "rgba(99,179,255,0.2)",
              badge: "Сон", risk: null,
              title: "Оптимизируй фазу глубокого сна",
              desc: "Ты засыпаешь в среднем в 00:47. Переход на 23:15 добавит 40+ мин глубокого сна и повысит продуктивность на ~22%.",
              action: "Напомни в 22:45",
            },
            {
              icon: "TrendingDown", color: "#ff9f40",
              gradient: "rgba(255,159,64,0.1)", borderColor: "rgba(255,159,64,0.2)",
              badge: "Финансы", risk: "Средний риск",
              title: "Расходы на кафе выросли на 34%",
              desc: "За 2 недели ₽5,300 на кафе vs ₽3,950 в норме. Рекомендую лимит ₽4,500/мес.",
              action: "Установить лимит",
            },
            {
              icon: "Zap", color: "#39ff6a",
              gradient: "rgba(57,255,106,0.08)", borderColor: "rgba(57,255,106,0.2)",
              badge: "Привычки", risk: null,
              title: "Серия медитаций — рекорд близко",
              desc: "14 дней подряд! Ещё 7 дней и ты установишь личный рекорд. Это твоя самая сильная привычка.",
              action: "Поставить цель",
            },
            {
              icon: "AlertTriangle", color: "#ff6b6b",
              gradient: "rgba(255,107,107,0.08)", borderColor: "rgba(255,107,107,0.2)",
              badge: "Здоровье", risk: "Высокий риск",
              title: "Перегрузка — снизь интенсивность",
              desc: "HRV снизился на 18% за 3 дня. Рекомендую активный отдых сегодня вместо силовой тренировки.",
              action: "Скорректировать план",
            },
          ].map((card, i) => (
            <div key={i} className="rounded-2xl p-4" style={{ background: card.gradient, border: `1px solid ${card.borderColor}` }}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${card.color}18`, border: `1px solid ${card.color}25` }}>
                  <Icon name={card.icon as IconName} size={16} style={{ color: card.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: `${card.color}15`, color: card.color }}>{card.badge}</span>
                    {card.risk && <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: "rgba(255,107,107,0.1)", color: "#ff6b6b" }}>⚠ {card.risk}</span>}
                  </div>
                  <p className="text-sm font-display font-semibold text-white">{card.title}</p>
                  <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed font-body">{card.desc}</p>
                  <button className="mt-3 text-[12px] font-semibold px-3 py-1.5 rounded-xl transition-all hover:scale-105 active:scale-95" style={{ background: `${card.color}12`, color: card.color, border: `1px solid ${card.color}20` }}>
                    {card.action} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-4 glass-card">
        <p className="text-[12px] text-muted-foreground mb-3 uppercase tracking-widest">Спроси у Nexora</p>
        <div className="flex gap-2 flex-wrap mb-3">
          {["Как улучшить сон?", "Анализ расходов", "Составь план недели"].map((q) => (
            <button key={q} className="text-[12px] px-3 py-1.5 rounded-xl font-body transition-all hover:scale-105" style={{ background: "rgba(57,255,106,0.08)", border: "1px solid rgba(57,255,106,0.15)", color: "#39ff6a" }}>
              {q}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input className="flex-1 bg-secondary rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground outline-none border border-border focus:border-[#39ff6a] transition-colors font-body" placeholder="Задай вопрос AI..." />
          <button className="w-10 h-10 gradient-neon rounded-xl flex items-center justify-center hover:scale-105 transition-transform">
            <Icon name="Send" size={16} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProfileTab() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="pt-2 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-3xl gradient-neon flex items-center justify-center neon-glow">
            <span className="font-display text-3xl font-bold text-black">А</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-[#39ff6a] flex items-center justify-center">
            <Icon name="Check" size={12} className="text-black" />
          </div>
        </div>
        <h2 className="font-display text-2xl font-bold text-white">Алекс Иванов</h2>
        <p className="text-muted-foreground text-sm mt-1">alex@nexora.app</p>
        <div className="flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-full" style={{ background: "rgba(57,255,106,0.08)", border: "1px solid rgba(57,255,106,0.2)" }}>
          <StatusDot color="neon" />
          <span className="text-[12px] text-[#39ff6a] font-display">Premium · Активен</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Дней в Nexora", value: "47" },
          { label: "Привычек", value: "6" },
          { label: "Индекс", value: "87" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl p-4 glass-card text-center">
            <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-[11px] text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {[
        {
          title: "Персонализация",
          items: [
            { icon: "Target", label: "Цели и приоритеты", sub: "Настрой личные KPI" },
            { icon: "Bell", label: "Уведомления", sub: "Умные напоминания" },
            { icon: "Palette", label: "Внешний вид", sub: "Тема и акцент" },
          ]
        },
        {
          title: "Данные и синхронизация",
          items: [
            { icon: "Activity", label: "Apple Health / Google Fit", sub: "Подключено" },
            { icon: "CreditCard", label: "Банки", sub: "Тинькофф подключён" },
            { icon: "Download", label: "Экспорт данных", sub: "CSV / PDF" },
          ]
        },
      ].map((section) => (
        <div key={section.title}>
          <SectionTitle title={section.title} />
          <div className="space-y-1">
            {section.items.map((item, i) => (
              <button key={i} className="w-full flex items-center gap-3 rounded-2xl px-4 py-3.5 glass-card-hover text-left">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Icon name={item.icon as IconName} size={16} className="text-[#39ff6a]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-body">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground">{item.sub}</p>
                </div>
                <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
      ))}

      <button className="w-full rounded-2xl py-3.5 text-sm font-display font-semibold text-red-400 glass-card hover:bg-red-400/5 transition-all">
        Выйти из аккаунта
      </button>
    </div>
  );
}
