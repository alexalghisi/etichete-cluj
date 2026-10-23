import { FEATURES } from "@/lib/feature-flags";

export function PromoVideo() {
  if (!FEATURES.promoVideo) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6" aria-labelledby="promo-video-title">
      <h2 id="promo-video-title" className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Atelierul Etichett Prod
      </h2>
      <video
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full rounded-2xl"
        src="https://resource2.heygen.ai/video/transcode/583b2f41535d4e29ad599a4786eb3894/vea43af9721484f71af24199e77b5c9ee/1280x720_nocap.mp4"
        poster="https://resource2.heygen.ai/video/transcode/583b2f41535d4e29ad599a4786eb3894/vea43af9721484f71af24199e77b5c9ee/1920x1080_caption.jpeg"
        aria-label="Video de prezentare Etichett Prod"
      />
    </section>
  );
}