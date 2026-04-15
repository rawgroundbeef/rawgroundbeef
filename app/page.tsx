import ShaderBackground from "@/components/ShaderBackground";

export default function Home() {
  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      <div className="absolute inset-0 [&>canvas]:!h-full [&>canvas]:!w-full [&>div]:!h-full [&>div]:!w-full">
        <ShaderBackground />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="font-mono text-sm uppercase tracking-[0.3em] text-white/60">
          &ldquo;WORK IN PROGRESS&rdquo;
        </h1>
      </div>
    </div>
  );
}
