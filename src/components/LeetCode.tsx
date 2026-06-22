import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { ExternalLink, Flame, Calendar, Trophy, AlertCircle } from 'lucide-react';

const USERNAME = '_visheshh_';
const BASE = 'https://alfa-leetcode-api.onrender.com';

// ─── Types ────────────────────────────────────────────────────────────────────
interface ProfileData { ranking: number; }

interface SolvedData {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissionNum: { difficulty: string; count: number }[];
}

interface CalendarData {
  streak: number;
  totalActiveDays: number;
  activeYears: number[];
  submissionCalendar: string;
}

// ─── Animated Circular Progress ───────────────────────────────────────────────
function DonutChart({ solved, total }: { solved: number; total: number }) {
  const r = 52;
  const cx = 70;
  const cy = 70;
  const circumference = 2 * Math.PI * r;
  const pct = Math.min(solved / total, 1);
  const offset = circumference * (1 - pct);

  const [animated, setAnimated] = useState(false);
  const ref = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <svg width={140} height={140} viewBox="0 0 140 140">
        {/* Track */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth={10} />
        {/* Progress */}
        <circle
          ref={ref}
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="#f59e0b"
          strokeWidth={10}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animated ? offset : circumference}
          transform={`rotate(-90 ${cx} ${cy})`}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)' }}
        />
        {/* Inner text */}
        <text x={cx} y={cy - 6} textAnchor="middle" fontSize="22" fontWeight="800" fontFamily="Inter, sans-serif" fill="currentColor">
          {solved}
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="currentColor" opacity={0.4}>
          / {total}
        </text>
      </svg>
    </div>
  );
}

// ─── Animated Difficulty Bar ──────────────────────────────────────────────────
function DiffBar({ label, solved, total, color }: {
  label: string; solved: number; total: number; color: string;
}) {
  const pct = total > 0 ? Math.min((solved / total) * 100, 100) : 0;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight">{label}</span>
        <span className="font-mono text-xs opacity-50">{solved} / {total}</span>
      </div>
      <div className="h-[5px] rounded-full bg-black/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

// ─── 52-Week Heatmap ──────────────────────────────────────────────────────────
function Heatmap({ calendarStr }: { calendarStr: string }) {
  let calData: Record<string, number> = {};
  try { calData = JSON.parse(calendarStr); } catch { return null; }

  const WEEKS = 52;
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - (WEEKS * 7) + 1);

  const days: { count: number; date: Date }[] = [];
  for (let i = 0; i < WEEKS * 7; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const ts = String(Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 1000));
    days.push({ count: calData[ts] || 0, date: d });
  }

  const weeks: typeof days[] = [];
  for (let w = 0; w < WEEKS; w++) weeks.push(days.slice(w * 7, (w + 1) * 7));

  // Month label positions
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const monthLabels: { label: string; col: number }[] = [];
  weeks.forEach((week, wi) => {
    if (wi === 0 || week[0].date.getDate() <= 7) {
      const prev = monthLabels[monthLabels.length - 1];
      if (!prev || prev.label !== months[week[0].date.getMonth()]) {
        monthLabels.push({ label: months[week[0].date.getMonth()], col: wi });
      }
    }
  });

  const getColor = (count: number) => {
    if (count === 0) return '#e5e7eb';
    if (count === 1) return '#bbf7d0';
    if (count <= 3) return '#4ade80';
    if (count <= 6) return '#16a34a';
    return '#166534';
  };

  const startLabel = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });
  const endLabel = today.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-max">
          {/* Month labels */}
          <div className="flex gap-[3px] mb-1 pl-0">
            {weeks.map((_, wi) => {
              const ml = monthLabels.find(m => m.col === wi);
              return (
                <div key={wi} style={{ width: 13 }} className="font-mono text-[8px] text-center opacity-50 truncate">
                  {ml ? ml.label : ''}
                </div>
              );
            })}
          </div>
          {/* Grid */}
          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={`${day.date.toDateString()}: ${day.count} submission${day.count !== 1 ? 's' : ''}`}
                    style={{ backgroundColor: getColor(day.count), width: 13, height: 13, borderRadius: 3 }}
                    className="cursor-default hover:opacity-70 transition-opacity"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Date range */}
      <div className="flex justify-between mt-2">
        <span className="font-mono text-[9px] opacity-40">{startLabel}</span>
        <span className="font-mono text-[9px] opacity-40">{endLabel}</span>
      </div>
    </div>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────
function Skeleton() {
  return (
    <div className="animate-pulse border border-[var(--color-line)] bg-white p-8 space-y-6">
      <div className="flex gap-8">
        <div className="w-36 h-36 rounded-full bg-black/5 shrink-0" />
        <div className="flex-1 space-y-4 pt-4">
          <div className="h-4 bg-black/5 rounded w-1/2" />
          <div className="h-3 bg-black/5 rounded w-full" />
          <div className="h-3 bg-black/5 rounded w-full" />
          <div className="h-3 bg-black/5 rounded w-3/4" />
        </div>
      </div>
      <div className="h-32 bg-black/5 rounded" />
    </div>
  );
}

// ─── LeetCode Logo SVG ────────────────────────────────────────────────────────
function LCLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="#FFA116"/>
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LeetCode() {
  const [profile, setProfile]   = useState<ProfileData | null>(null);
  const [solved,  setSolved]    = useState<SolvedData  | null>(null);
  const [calendar,setCalendar]  = useState<CalendarData| null>(null);
  const [loading, setLoading]   = useState(true);
  const [error,   setError]     = useState(false);

  useEffect(() => {
    const go = async () => {
      try {
        const [pRes, sRes, cRes] = await Promise.all([
          fetch(`${BASE}/${USERNAME}`),
          fetch(`${BASE}/${USERNAME}/solved`),
          fetch(`${BASE}/${USERNAME}/calendar`),
        ]);
        if (!pRes.ok || !sRes.ok || !cRes.ok) throw new Error();
        const [p, s, c] = await Promise.all([pRes.json(), sRes.json(), cRes.json()]);
        setProfile(p); setSolved(s); setCalendar(c);
      } catch { setError(true); }
      finally  { setLoading(false); }
    };
    go();
  }, []);

  const totalQ   = 3958;
  const totalEasy  = solved?.totalSubmissionNum.find(d => d.difficulty === 'Easy')?.count   ?? 949;
  const totalMed   = solved?.totalSubmissionNum.find(d => d.difficulty === 'Medium')?.count ?? 2067;
  const totalHard  = solved?.totalSubmissionNum.find(d => d.difficulty === 'Hard')?.count   ?? 942;

  return (
    <motion.section
      id="leetcode"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 px-6 max-w-7xl mx-auto border-t border-[var(--color-line)]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">
            PROBLEM <br />
            <span className="text-blue-600">SOLVING.</span>
          </h2>
          <p className="text-lg opacity-70 leading-relaxed max-w-md">
            Live data from LeetCode — updated every page load. Consistency,
            difficulty spread, and 52 weeks of daily grind.
          </p>
        </div>
        <a
          href={`https://leetcode.com/u/${USERNAME}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold border border-[var(--color-line)] px-4 py-3 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-colors whitespace-nowrap"
        >
          View LeetCode <ExternalLink size={11} />
        </a>
      </div>

      {loading && <Skeleton />}

      {error && !loading && (
        <div className="border border-[var(--color-line)] p-12 flex flex-col items-center gap-4 text-center">
          <AlertCircle size={32} className="text-blue-600 opacity-50" />
          <p className="font-mono text-xs uppercase tracking-widest opacity-50">
            Could not load live data · API may be cold-starting
          </p>
          <a href={`https://leetcode.com/u/${USERNAME}/`} target="_blank" rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity">
            View profile directly →
          </a>
        </div>
      )}

      {!loading && !error && solved && calendar && profile && (
        <div className="border border-[var(--color-line)] bg-white overflow-hidden">
          {/* ── Card Header ── */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--color-line)]">
            <div className="flex items-center gap-3">
              <LCLogo size={26} />
              <div>
                <p className="font-bold text-lg tracking-tight">{USERNAME}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                  Active {calendar.activeYears.join(', ')}
                </p>
              </div>
            </div>
            <span className="font-mono text-sm font-bold opacity-50">
              #{profile.ranking.toLocaleString('en-IN')}
            </span>
          </div>

          {/* ── Stats Row ── */}
          <div className="grid grid-cols-3 border-b border-[var(--color-line)]">
            <div className="flex items-center gap-3 px-6 py-4 border-r border-[var(--color-line)]">
              <Flame size={16} className="text-orange-500 shrink-0" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Streak</p>
                <p className="font-bold text-xl tracking-tighter">{calendar.streak}<span className="text-xs font-mono opacity-40 ml-1">days</span></p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 border-r border-[var(--color-line)]">
              <Calendar size={16} className="text-blue-500 shrink-0" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Active Days</p>
                <p className="font-bold text-xl tracking-tighter">{calendar.totalActiveDays}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4">
              <Trophy size={16} className="text-yellow-500 shrink-0" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Global Rank</p>
                <p className="font-bold text-xl tracking-tighter">#{profile.ranking.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>

          {/* ── Main Card Body ── */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Donut chart */}
              <div className="flex flex-col items-center shrink-0">
                <DonutChart solved={solved.solvedProblem} total={totalQ} />
                <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mt-1">Solved</p>
              </div>

              {/* Difficulty bars */}
              <div className="flex-1 space-y-5 pt-2">
                <DiffBar label="Easy"   solved={solved.easySolved}   total={totalEasy} color="bg-green-500" />
                <DiffBar label="Medium" solved={solved.mediumSolved} total={totalMed}  color="bg-yellow-500" />
                <DiffBar label="Hard"   solved={solved.hardSolved}   total={totalHard} color="bg-red-500" />
              </div>
            </div>
          </div>

          {/* ── Heatmap ── */}
          <div className="px-8 pb-8 border-t border-[var(--color-line)] pt-6">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-5">
              Heatmap (Last 52 Weeks)
            </p>
            <Heatmap calendarStr={calendar.submissionCalendar} />
          </div>
        </div>
      )}
    </motion.section>
  );
}
