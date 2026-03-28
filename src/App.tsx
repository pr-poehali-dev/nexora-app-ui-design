import { useState } from "react";
import Icon from "@/components/ui/icon";
import { CircleProgress, StatusDot, SectionTitle, NAV_ITEMS, Tab, IconName } from "@/components/ui/shared";
import { HealthTab, FinanceTab } from "@/components/tabs/HealthFinanceTabs";
import { HabitsTab, PlansTab, AITab, ProfileTab } from "@/components/tabs/HabitsPlansAIProfileTabs";

function HomeTab() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-start justify-between pt-2">
        <div>
          <p className="text-muted-foreground text-sm font-body">Суббота, 28 марта</p>
          <h1 className="font-display text-2xl font-bold text-white mt-1">Привет, Алекс 👋</h1>
          <p className="text-[13px] text-[#39ff6a] mt-1 flex items-center gap-1.5">
            <StatusDot color="neon" />
            AI анализирует твой день
          </p>
        </div>
        <div className="w-11 h-11 rounded-2xl glass-card flex items-center justify-center">
          <Icon name="Bell" size={18} className="text-muted-foreground" />
        </div>
      </div>

      {/* Score card */}
      <div className="relative rounded-3xl p-5 overflow-hidden" style={{
        background: "linear-gradient(135deg, rgba(57,255,106,0.12) 0%, rgba(0,212,170,0.06) 50%, rgba(8,11,15,0.8) 100%)",
        border: "1px solid rgba(57,255,106,0.2)"
      }}>
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10 rounded-full" style={{ background: "radial-gradient(circle, #39ff6a 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-xs font-body uppercase tracking-widest">Индекс дня</p>
            <div className="flex items-end gap-2 mt-2">
              <span className="font-display text-6xl font-bold text-white">87</span>
              <span className="text-[#39ff6a] text-lg mb-2">/100</span>
            </div>
            <p className="text-[13px] text-muted-foreground mt-1">↑ +5 по сравнению со вчера</p>
          </div>
          <CircleProgress value={87} size={80} stroke={6} />
        </div>
        <div className="flex gap-3 mt-4">
          {[
            { label: "Сон", value: "7.2ч", icon: "Moon" },
            { label: "Шаги", value: "8.4k", icon: "Footprints" },
            { label: "Вода", value: "1.8л", icon: "Droplets" },
          ].map((item) => (
            <div key={item.label} className="flex-1 rounded-2xl px-3 py-2.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Icon name={item.icon as IconName} size={14} className="text-[#39ff6a] mb-1" />
              <p className="font-display text-sm font-semibold text-white">{item.value}</p>
              <p className="text-[11px] text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-card-hover rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(99,179,255,0.12)", border: "1px solid rgba(99,179,255,0.2)" }}>
              <Icon name="Wallet" size={15} className="text-blue-300" />
            </div>
            <span className="text-[11px] text-green-400">+12%</span>
          </div>
          <p className="font-display text-2xl font-bold text-white">₽84,200</p>
          <p className="text-[12px] text-muted-foreground mt-1">Баланс</p>
        </div>
        <div className="glass-card-hover rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,165,57,0.12)", border: "1px solid rgba(255,165,57,0.2)" }}>
              <Icon name="Zap" size={15} className="text-amber-300" />
            </div>
            <span className="text-[11px] text-[#39ff6a]">6/7</span>
          </div>
          <p className="font-display text-2xl font-bold text-white">6 серий</p>
          <p className="text-[12px] text-muted-foreground mt-1">Привычки</p>
        </div>
      </div>

      {/* AI Insight preview */}
      <div className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(57,255,106,0.06) 100%)", border: "1px solid rgba(168,85,247,0.25)" }}>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl gradient-neon flex items-center justify-center flex-shrink-0">
            <Icon name="Sparkles" size={15} className="text-black" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-purple-300 uppercase tracking-widest mb-1">AI Инсайт</p>
            <p className="text-sm text-white font-body leading-relaxed">Твой сон улучшился на 18% за неделю. Продолжай ложиться до 23:00 — это твой ключ к высокой продуктивности.</p>
          </div>
        </div>
      </div>

      {/* Today tasks */}
      <div>
        <SectionTitle title="Сегодня" sub="3 задачи на день" />
        <div className="space-y-2">
          {[
            { done: true, text: "Утренняя медитация 10 мин", tag: "Привычка" },
            { done: false, text: "Отчёт за Q1 → команда", tag: "Работа" },
            { done: false, text: "Тренировка — верхний отдел", tag: "Здоровье" },
          ].map((task, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl px-4 py-3 glass-card-hover">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${task.done ? "bg-[#39ff6a] border-[#39ff6a]" : "border-muted-foreground"}`}>
                {task.done && <Icon name="Check" size={10} className="text-black" />}
              </div>
              <span className={`flex-1 text-sm font-body ${task.done ? "line-through text-muted-foreground" : "text-white"}`}>{task.text}</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>{task.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home": return <HomeTab />;
      case "health": return <HealthTab />;
      case "finance": return <FinanceTab />;
      case "habits": return <HabitsTab />;
      case "plans": return <PlansTab />;
      case "ai": return <AITab />;
      case "profile": return <ProfileTab />;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{
      background: "radial-gradient(ellipse at 20% 0%, rgba(57,255,106,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(99,179,255,0.04) 0%, transparent 50%), #080b0f"
    }}>
      <div className="relative w-full max-w-[430px] min-h-screen md:min-h-0 md:h-[812px] md:rounded-[44px] overflow-hidden flex flex-col" style={{
        background: "#080b0f",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 40px 120px rgba(0,0,0,0.8), 0 0 60px rgba(57,255,106,0.04)"
      }}>
        {/* Top glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(57,255,106,0.5), transparent)" }} />

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2 flex-shrink-0 z-10">
          <span className="text-[12px] font-display font-semibold text-white">9:41</span>
          <div className="flex items-center gap-1.5">
            <Icon name="Signal" size={14} className="text-white" />
            <Icon name="Wifi" size={14} className="text-white" />
            <Icon name="Battery" size={14} className="text-white" />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto scrollbar-none px-5 pb-4">
          {renderContent()}
        </div>

        {/* Bottom Nav */}
        <div className="flex-shrink-0 px-3 pb-6 pt-2 z-10">
          <div className="rounded-2xl px-1 py-2 flex items-center justify-around" style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(24px)"
          }}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as Tab)}
                  className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-200"
                  style={isActive ? { background: "rgba(57,255,106,0.1)" } : {}}
                >
                  <Icon
                    name={item.icon as IconName}
                    size={19}
                    style={{
                      color: isActive ? "#39ff6a" : "rgba(255,255,255,0.32)",
                      filter: isActive ? "drop-shadow(0 0 6px rgba(57,255,106,0.7))" : "none",
                      transition: "all 0.2s ease"
                    }}
                  />
                  <span className="text-[9px] font-display font-semibold" style={{ color: isActive ? "#39ff6a" : "rgba(255,255,255,0.28)" }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
