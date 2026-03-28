import Icon from "@/components/ui/icon";
import { CircleProgress, SectionTitle, IconName } from "@/components/ui/shared";

export function HealthTab() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="pt-2">
        <h1 className="font-display text-2xl font-bold text-white">Здоровье</h1>
        <p className="text-muted-foreground text-sm mt-1">Твой биологический паспорт</p>
      </div>

      <div className="flex items-center justify-around rounded-3xl p-6 glass-card">
        {[
          { label: "Движение", value: 74, color: "#39ff6a", num: "742", unit: "ккал" },
          { label: "Нагрузка", value: 60, color: "#63b3ff", num: "45", unit: "мин" },
          { label: "Стойкость", value: 88, color: "#ff9f40", num: "88", unit: "%" },
        ].map((ring) => (
          <div key={ring.label} className="flex flex-col items-center gap-2">
            <div className="relative">
              <CircleProgress value={ring.value} size={72} stroke={7} color={ring.color} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-sm font-bold text-white">{ring.num}</span>
                <span className="text-[10px] text-muted-foreground">{ring.unit}</span>
              </div>
            </div>
            <span className="text-[12px] text-muted-foreground">{ring.label}</span>
          </div>
        ))}
      </div>

      <div>
        <SectionTitle title="Сон" sub="Прошлая ночь" />
        <div className="rounded-2xl p-4 gradient-card-health glass-card">
          <div className="flex items-end justify-between mb-4">
            <div>
              <span className="font-display text-4xl font-bold text-white">7</span>
              <span className="text-[#39ff6a] text-xl">ч 12м</span>
            </div>
            <span className="text-[13px] px-3 py-1 rounded-full" style={{ background: "rgba(57,255,106,0.12)", color: "#39ff6a", border: "1px solid rgba(57,255,106,0.25)" }}>Хорошо</span>
          </div>
          <div className="flex gap-1 h-14 items-end">
            {[40, 65, 80, 90, 75, 85, 70, 60, 88, 92, 78, 50].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i > 8 ? "rgba(57,255,106,0.7)" : "rgba(57,255,106,0.2)" }} />
            ))}
          </div>
          <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
            <span>23:00</span><span>03:00</span><span>07:12</span>
          </div>
        </div>
      </div>

      <div>
        <SectionTitle title="Вода" sub="Цель: 2.5 л" />
        <div className="rounded-2xl p-4 glass-card">
          <div className="flex items-center justify-between mb-3">
            <span className="font-display text-3xl font-bold text-white">1.8 <span className="text-lg text-muted-foreground">/ 2.5 л</span></span>
            <span className="text-[13px] text-blue-300">72%</span>
          </div>
          <div className="h-3 rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "72%", background: "linear-gradient(90deg, #63b3ff, #39ff6a)", transition: "width 0.7s ease" }} />
          </div>
          <div className="flex gap-2 mt-4">
            {[200, 350, 500, 750].map((ml) => (
              <button key={ml} className="flex-1 py-2 rounded-xl text-[12px] font-body transition-all hover:scale-105 active:scale-95" style={{ background: "rgba(99,179,255,0.08)", border: "1px solid rgba(99,179,255,0.15)", color: "#63b3ff" }}>
                +{ml}мл
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <SectionTitle title="Тренировки" sub="Эта неделя" />
        <div className="grid grid-cols-7 gap-1.5">
          {["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map((d, i) => (
            <div key={d} className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] text-muted-foreground">{d}</span>
              <div className="w-full aspect-square rounded-xl flex items-center justify-center" style={{
                background: i < 5 ? "rgba(57,255,106,0.15)" : "rgba(255,255,255,0.04)",
                border: i < 5 ? "1px solid rgba(57,255,106,0.25)" : "1px solid rgba(255,255,255,0.06)"
              }}>
                {i < 5 && <Icon name="Check" size={12} className="text-[#39ff6a]" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FinanceTab() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="pt-2">
        <h1 className="font-display text-2xl font-bold text-white">Финансы</h1>
        <p className="text-muted-foreground text-sm mt-1">Твой финансовый центр</p>
      </div>

      <div className="rounded-3xl p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f1923 100%)", border: "1px solid rgba(99,179,255,0.2)" }}>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5" style={{ background: "radial-gradient(circle, #63b3ff 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <p className="text-muted-foreground text-xs uppercase tracking-widest">Общий баланс</p>
        <p className="font-display text-5xl font-bold text-white mt-2">₽84 200</p>
        <p className="text-green-400 text-sm mt-2">↑ +₽4,800 этот месяц</p>
        <div className="flex gap-3 mt-5">
          {[
            { label: "Доходы", value: "₽120k", color: "#39ff6a", icon: "ArrowDownLeft" },
            { label: "Расходы", value: "₽35.8k", color: "#ff6b6b", icon: "ArrowUpRight" },
            { label: "Сбережения", value: "₽12k", color: "#63b3ff", icon: "PiggyBank" },
          ].map((item) => (
            <div key={item.label} className="flex-1 rounded-2xl px-3 py-2.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Icon name={item.icon as IconName} size={13} style={{ color: item.color }} className="mb-1" />
              <p className="font-display text-sm font-bold text-white">{item.value}</p>
              <p className="text-[11px] text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle title="Расходы по категориям" />
        <div className="rounded-2xl p-4 glass-card space-y-3">
          {[
            { label: "Продукты", amount: "₽12,400", pct: 35, color: "#39ff6a" },
            { label: "Транспорт", amount: "₽8,200", pct: 23, color: "#63b3ff" },
            { label: "Развлечения", amount: "₽6,100", pct: 17, color: "#a855f7" },
            { label: "Кафе", amount: "₽5,300", pct: 15, color: "#ff9f40" },
            { label: "Прочее", amount: "₽3,800", pct: 10, color: "#ff6b6b" },
          ].map((cat) => (
            <div key={cat.label}>
              <div className="flex justify-between text-[13px] mb-1.5">
                <span className="text-white font-body">{cat.label}</span>
                <span className="text-muted-foreground">{cat.amount}</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${cat.pct}%`, background: cat.color, transition: "width 0.7s ease" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle title="Последние операции" />
        <div className="space-y-2">
          {[
            { icon: "ShoppingCart", name: "ВкусВилл", amount: "-₽1,240", time: "Сегодня 14:32", income: false },
            { icon: "Banknote", name: "Зарплата", amount: "+₽85,000", time: "Сегодня 09:00", income: true },
            { icon: "Coffee", name: "Starbucks", amount: "-₽380", time: "Вчера 18:15", income: false },
            { icon: "Car", name: "Яндекс Такси", amount: "-₽540", time: "Вчера 11:20", income: false },
          ].map((tx, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl px-4 py-3 glass-card-hover">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Icon name={tx.icon as IconName} size={16} className="text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-body">{tx.name}</p>
                <p className="text-[11px] text-muted-foreground">{tx.time}</p>
              </div>
              <span className={`font-display text-sm font-semibold ${tx.income ? "text-[#39ff6a]" : "text-white"}`}>{tx.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
