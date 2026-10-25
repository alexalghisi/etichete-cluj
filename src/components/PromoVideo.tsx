import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/lib/feature-flags";

export function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSoundButton, setShowSoundButton] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!FEATURES.promoVideo || !video) return;

    let active = true;
    const gestureEvents = ["pointerdown", "keydown", "touchend", "click"] as const;

    // Browsers allow sound as soon as the visitor has interacted once with the page
    // (any click/tap/key anywhere). Unmute automatically on that first interaction.
    const unmuteOnGesture = () => {
      removeGestureListeners();
      if (!active || !video.muted) return;
      video.muted = false;
      setShowSoundButton(false);
      video.play().catch(() => {
        video.muted = true;
        setShowSoundButton(true);
      });
    };
    const addGestureListeners = () => {
      gestureEvents.forEach((e) => document.addEventListener(e, unmuteOnGesture, { capture: true, passive: true }));
    };
    function removeGestureListeners() {
      gestureEvents.forEach((e) => document.removeEventListener(e, unmuteOnGesture, { capture: true }));
    }

    // Start automatically once in view: try with sound first,
    // fall back to muted playback if the browser blocks audible autoplay.
    const startPlayback = async () => {
      try {
        video.muted = false;
        await video.play();
        setShowSoundButton(false);
      } catch {
        if (!active) return;
        video.muted = true;
        setShowSoundButton(true);
        addGestureListeners();
        try {
          await video.play();
        } catch {
          // Native controls remain available if playback is still blocked.
        }
      }
    };

    // Only fetch and start the video once it scrolls into the viewport, then
    // pause/resume it automatically as it scrolls out of / back into view.
    let started = false;
    let autoPaused = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!entry) return;
        if (entry.isIntersecting) {
          if (!started) {
            started = true;
            void startPlayback();
          } else if (autoPaused) {
            autoPaused = false;
            video.play().catch(() => {});
          }
        } else if (started && !video.paused) {
          autoPaused = true;
          video.pause();
        }
      },
      { rootMargin: "0px", threshold: 0.1 },
    );
    observer.observe(video);
    // Fetch the poster image a little earlier, just before the video scrolls in.
    const posterObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          posterObserver.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    posterObserver.observe(video);

    return () => {
      active = false;
      observer.disconnect();
      posterObserver.disconnect();
      removeGestureListeners();
      video.pause();
    };
  }, []);

  if (!FEATURES.promoVideo) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6" aria-labelledby="promo-video-title">
      <h2 id="promo-video-title" className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Atelierul Etichett Prod
      </h2>
      <div
        className="relative"
        onPointerEnter={(event) => { if (event.pointerType === "mouse") setShowControls(true); }}
        onPointerLeave={(event) => { if (event.pointerType === "mouse") setShowControls(false); }}
        onPointerDown={(event) => { if (event.pointerType !== "mouse") setShowControls(true); }}
        onFocusCapture={() => setShowControls(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setShowControls(false);
        }}
      >
        <video
          ref={videoRef}
          controls={showControls}
          playsInline
          preload="none"
          loop
          tabIndex={0}
          onVolumeChange={() => setShowSoundButton(videoRef.current?.muted ?? false)}
          className="aspect-video w-full rounded-2xl"
          src="https://resource2.heygen.ai/video/transcode/1b6f8389d94c45019513b93a89f1d7e7/v88b5a97914fa4e0c9c92607357ac49cf/1280x720_nocap.mp4"
          poster={near ? "https://resource2.heygen.ai/video/transcode/1b6f8389d94c45019513b93a89f1d7e7/v88b5a97914fa4e0c9c92607357ac49cf/1920x1080_caption.jpeg" : undefined}
          aria-label="Video de prezentare Etichett Prod"
        />
        {showSoundButton && (
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="absolute right-3 top-3 shadow-sm"
            onClick={() => {
              const video = videoRef.current;
              if (!video) return;
              video.muted = false;
              setShowSoundButton(false);
            }}
          >
            🔊 Pornește sunetul
          </Button>
        )}
      </div>
    </section>
  );
}