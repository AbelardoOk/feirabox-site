import Image from "next/image";

type PhoneMockupProps = {
  /** Caminho da mídia da tela (ex.: /images/mockups/tela-1.png). Troque por GIF/vídeo quando tiver o material real. */
  src: string;
  alt: string;
  /** Opcional: se informado, renderiza <video> com a imagem como poster. Pronto para GIF/MP4 reais. */
  videoSrc?: string;
  priority?: boolean;
  className?: string;
  /** Largura da moldura (padrão mobile-first). Ex.: "w-[190px]" para o destaque no hero desktop. */
  widthClassName?: string;
};

/**
 * Moldura de celular em CSS puro — Fase 2.
 * Para trocar o conteúdo: substitua `src` (png/webp), ou passe `videoSrc` (mp4/webm/gif).
 * Dimensões reais do arquivo placeholder: 540x1170 (proporção ~9:19.5).
 */
export function PhoneMockup({ src, alt, videoSrc, priority = false, className = "", widthClassName = "w-[160px] sm:w-[180px]" }: PhoneMockupProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`${widthClassName} shrink-0 rounded-[2.2rem] bg-inverse-surface p-2 shadow-[0_12px_32px_rgba(0,0,0,0.25)] ${className}`.trim()}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.7rem] bg-surface">
        {/* Ilha dinâmica / notch */}
        <div aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-inverse-surface" />
        {videoSrc ? (
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={src}
            autoPlay
            muted
            loop
            playsInline
            aria-label={alt}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={540}
            height={1170}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes="(max-width: 768px) 160px, 180px"
            className="h-full w-full object-cover"
          />
        )}
        {/* Indicador home */}
        <div aria-hidden="true" className="absolute bottom-1.5 left-1/2 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-inverse-surface/60" />
      </div>
    </div>
  );
}
