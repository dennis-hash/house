type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, light = false, center = true }: Props) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`text-sm font-bold tracking-widest uppercase ${light ? "text-brand-300" : "text-brand-600"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}
