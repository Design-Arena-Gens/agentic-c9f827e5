"use client";

import { useState } from 'react';

const toggles = [
  { id: 'ai', label: 'AI native' },
  { id: 'agent', label: 'Agent guide' },
  { id: 'plan', label: 'Deep plan mode' },
] as const;

type ToggleId = (typeof toggles)[number]['id'];

export default function Page() {
  const [active, setActive] = useState<Record<ToggleId, boolean>>({
    ai: true,
    agent: false,
    plan: false,
  });

  return (
    <main className="relative mx-auto flex min-h-dvh w-full max-w-screen-2xl flex-col items-center">
      {/* Headline near top */}
      <section className="w-full px-6 pt-14 sm:pt-16 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="title-gradient text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            The next evolution of no?code, made AI?native
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300/80 sm:text-base">
            Ship full?stack apps with agent guidance, deep planning, and stunning quality by default.
          </p>
        </div>
      </section>

      {/* Big glass text area ~2 modules below */}
      <section className="relative mx-auto mt-12 w-full px-6 sm:mt-14 md:mt-16">
        <div className="mx-auto w-full sm:w-5/6 md:w-2/3">
          <div className="glass glow-ring relative rounded-2xl p-4 shadow-glow transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.3),0_40px_120px_rgba(34,211,238,0.15)]">
            {/* subtle top sheen */}
            <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            {/* aura highlight */}
            <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent blur-2xl opacity-50" />

            <div className="relative">
              <textarea
                aria-label="Project details"
                placeholder="Describe your full?stack app vision. Include data model, key flows, integrations, and any constraints."
                className="textarea-large h-[28vh] w-full resize-none rounded-xl border border-white/10 bg-white/5 p-5 text-[0.95rem] leading-relaxed text-slate-100 outline-none backdrop-blur-xl transition-shadow placeholder:text-slate-400/70 focus:shadow-[0_0_0_2px_rgba(34,211,238,0.45)]"
              />

              {/* Bottom pills */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
                {toggles.map(({ id, label }) => {
                  const isActive = !!active[id];
                  return (
                    <button
                      key={id}
                      onClick={() => setActive((prev) => ({ ...prev, [id]: !prev[id] }))}
                      className={`pill-toggle ${isActive ? 'pill-active' : ''}`}
                    >
                      <span
                        aria-hidden
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
                          isActive ? 'bg-cyan-300 shadow-[0_0_0_3px_rgba(34,211,238,0.25)]' : 'bg-slate-400/50'
                        }`}
                      />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* decorative floating cards for depth */}
        <div className="pointer-events-none absolute -left-2 top-2 hidden rotate-[-2deg] md:block">
          <div className="glass animate-float rounded-xl px-3 py-2 text-[11px] text-slate-200/90 shadow-lg">
            agent?guided
          </div>
        </div>
        <div className="pointer-events-none absolute -right-2 bottom-10 hidden rotate-2 md:block">
          <div className="glass animate-float rounded-xl px-3 py-2 text-[11px] text-slate-200/90 shadow-lg">
            plan deeply
          </div>
        </div>
      </section>

      {/* Footer subtle note */}
      <footer className="mt-16 mb-10 text-center text-xs text-slate-400/70">
        Built for velocity, safety, and craft.
      </footer>
    </main>
  );
}
