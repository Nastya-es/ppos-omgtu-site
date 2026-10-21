/* ═══════════════════════════════════════════════════
   Logo Component — ППОС ОмГТУ
   Использует файл /public/logo.svg (росток с 5 листьями)
   Строго по брендбуку: без теней, градиентов, искажений
   ═══════════════════════════════════════════════════ */

interface LogoProps {
  /** Размер иконки в пикселях */
  size?: number;
  /** Показывать текст рядом */
  showText?: boolean;
  /** Инвертировать для тёмного фона */
  inverted?: boolean;
  /** Дополнительный className */
  className?: string;
}

export default function Logo({
  size = 40,
  showText = false,
  inverted = false,
  className = '',
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Логотип из файла /public/logo.svg */}
      <img
        src="/logo.png"
        alt="ППОС ОмГТУ"
        width={size}
        height={size}
        className={`block ${inverted ? 'brightness-0 invert' : ''}`}
        style={{ width: size, height: size }}
      />

      {/* Текст */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`text-base font-bold tracking-tight ${
              inverted ? 'text-white' : 'text-[#1A1A1A]'
            }`}
          >
            ППОС
          </span>
          <span
            className={`text-[11px] font-medium tracking-wide ${
              inverted ? 'text-white/60' : 'text-[#1A1A1A]/50'
            }`}
          >
            ОмГТУ
          </span>
        </div>
      )}
    </div>
  );
}