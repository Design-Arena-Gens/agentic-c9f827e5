import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agentic Platform ? Next-Gen No-Code Full-Stack',
  description:
    'Design, plan, and ship full-stack apps with AI-native, agent-guided workflows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-dvh bg-slate-950 text-white antialiased">
        {/* Background layers */}
        <div className="fixed inset-0 -z-30">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
          {/* aurora blobs */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full bg-cyan-500/15 blur-[120px] animate-pulseGlow" />
          <div className="pointer-events-none absolute top-1/3 -right-24 h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/10 blur-[120px] animate-pulseGlow" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-teal-400/10 blur-[100px] animate-pulseGlow" />
          {/* grain */}
          <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light [background-image:radial-gradient(transparent_0.5px,_#000_0.5px)] [background-size:6px_6px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
