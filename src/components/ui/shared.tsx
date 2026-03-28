import Icon from "@/components/ui/icon";

export type IconName = Parameters<typeof Icon>[0]["name"];
export type Tab = "home" | "health" | "finance" | "habits" | "plans" | "ai" | "profile";

export const NAV_ITEMS = [
  { id: "home", icon: "LayoutDashboard", label: "Главная" },
  { id: "health", icon: "Heart", label: "Здоровье" },
  { id: "finance", icon: "TrendingUp", label: "Финансы" },
  { id: "habits", icon: "Zap", label: "Привычки" },
  { id: "plans", icon: "CalendarDays", label: "Планы" },
  { id: "ai", icon: "Sparkles", label: "AI" },
  { id: "profile", icon: "User", label: "Профиль" },
] as const;

export function CircleProgress({ value, size = 64, stroke = 5, color = "#39ff6a" }: { value: number; size?: number; stroke?: number; color?: string }) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width={size} height={size} className="ring-progress">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />
    </svg>
  );
}

export function StatusDot({ color = "neon" }: { color?: "neon" | "amber" | "red" | "blue" }) {
  const colors: Record<string, string> = {
    neon: "bg-[#39ff6a]",
    amber: "bg-amber-400",
    red: "bg-red-400",
    blue: "bg-blue-400",
  };
  return <span className={`inline-block w-2 h-2 rounded-full ${colors[color]} pulse-neon`} />;
}

export function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-display text-xl font-bold text-white">{title}</h2>
      {sub && <p className="text-[13px] text-muted-foreground mt-0.5">{sub}</p>}
    </div>
  );
}
