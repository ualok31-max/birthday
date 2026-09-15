const CONFIG = {
  boyfriendName: "Sunshine",
  girlfriendName: "Sofiya",
  birthdayDate: "2026-09-16T00:00:00",
  musicPath: "./assets/music/birthday.mp3",
  loveLetter: `Happy Birthday, Anurag.

I don't know if words will ever be enough to explain how special you are to me.

Thank you for every smile, every conversation, every little moment and every memory.

You have become such a beautiful part of my life.

Today is your birthday, but I feel lucky because I get to celebrate you.

I hope this new year of your life brings you everything you deserve.

Keep smiling, keep being you, and never forget how special you are to me.

With all my love,
Sofiya ❤️`,
  finalMessage: `Happy Birthday, Anurag Singh ❤️

You are one of the most special people in my life.
I hope your birthday is as beautiful and special as you are.

With all my love,
Sofiya ❤️`,
};

const STORY_TEXT = {
  beginning:
    "Somewhere between ordinary days and unforgettable memories, love quietly grows into something beautiful. And somehow, you became the kind of person who makes my heart feel home. That is what makes us special, Anurag — not just the big moments, but the way you make everything feel softer, brighter, and more meaningful.",
  timeline: [
    {
      title: "First meeting",
      text: "A moment that felt simple at first, but somehow stayed with me longer than I expected.",
    },
    {
      title: "First conversation",
      text: "The kind of conversation that made time disappear and left me smiling for hours.",
    },
    {
      title: "First memory",
      text: "A small memory that felt bigger than it should have, because it was the beginning of something meaningful.",
    },
    {
      title: "That special moment",
      text: "The moment I realized you were no longer just someone special in my life — you were someone I deeply cared for.",
    },
  ],
  specialLine1: "Some people enter your life quietly...",
  specialLine2: "and somehow become your favorite part of it.",
  specialReveal: "That's what you became to me, Anurag. ❤️",
  loves: [
    "Your Smile ❤️",
    "The Way You Make Me Laugh",
    "Your Kindness",
    "Your Presence",
    "Your Support",
    "The Little Things You Do",
    "The Way You Make Ordinary Days Special",
    "The Way You Make Me Feel Seen",
  ],
  littleThings: [
    "That one conversation I'll never forget.",
    "That moment that still makes me smile.",
    "Our random conversations.",
    "Our silly moments.",
    "The memories only we understand.",
    "The way being around you feels easy and warm.",
    "The little details that mean more than they should.",
    "The comfort of knowing you're part of my life.",
  ],
};

const PHOTOS = [
  {
    src: "./1.jpeg",
    title: "Our First Memory",
    caption: "A moment I always want to remember.",
  },
  {
    src: "./2.jpeg",
    title: "A Beautiful Day",
    caption: "Every time I see this, it feels like home.",
  },
  {
    src: "./3.jpeg",
    title: "Us",
    caption: "Some moments become part of my heart forever.",
  },
  {
    src: "./4.jpeg",
    title: "A Tender Moment",
    caption: "This one still makes me smile.",
  },
  {
    src: "./5.jpeg",
    title: "Warm And Golden",
    caption: "The kind of memory I never want to lose.",
  },
  {
    src: "./6.jpeg",
    title: "Forever In My Mind",
    caption: "A smile that means more than words.",
  },
  {
    src: "./7.jpeg",
    title: "A Love Story",
    caption: "Some memories feel like they were made just for us.",
  },
  {
    src: "./8.jpeg",
    title: "Our Favorite Chapter",
    caption: "The kind of memory I want to keep forever.",
  },
  {
    src: "./9.jpeg",
    title: "Our Forever",
    caption: "A little piece of happiness I will always treasure.",
  },
];

const state = {
  musicUnlocked: false,
  musicPlaying: false,
  lightboxIndex: 0,
  confettiStarted: false,
};

const openingButton = document.querySelector(".start-story");
const storyScrollButtons = document.querySelectorAll(".story-scroll");
const musicToggle = document.getElementById("music-toggle");
const musicAudio = document.getElementById("birthday-music");
const beginningText = document.getElementById("beginning-text");
const timelineList = document.getElementById("timeline-list");
const memoryCards = document.getElementById("memory-cards");
const photoGallery = document.getElementById("photo-gallery");
const loveGrid = document.getElementById("love-grid");
const littleGrid = document.getElementById("little-grid");
const loveLetter = document.getElementById("love-letter");
const countdownDisplay = document.getElementById("countdown-display");
const specialReveal = document.getElementById("special-reveal");
const specialLine1 = document.getElementById("special-line-1");
const specialLine2 = document.getElementById("special-line-2");
const finalMessage = document.getElementById("final-message");
const surpriseButton = document.getElementById("surprise-button");
const surpriseReveal = document.getElementById("surprise-reveal");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const confettiCanvas = document.getElementById("confetti-canvas");

function updateConfigText() {
  const nameElements = document.querySelectorAll(".boyfriend-name, .girlfriend-name");
  nameElements.forEach((element) => {
    element.textContent = element.classList.contains("boyfriend-name")
      ? CONFIG.boyfriendName
      : CONFIG.girlfriendName;
  });

  document.title = `For The One I Love | ${CONFIG.boyfriendName}`;

  const heroTitle = document.querySelector(".hero h2");
  if (heroTitle) {
    heroTitle.textContent = `Happy Birthday, ${CONFIG.boyfriendName}`;
  }

  const openingHeading = document.querySelector(".opening-content h2");
  if (openingHeading) {
    openingHeading.textContent = `Happy Birthday, ${CONFIG.boyfriendName} ❤️`;
  }

  const signature = document.querySelector(".signature");
  if (signature) {
    signature.textContent = `From ${CONFIG.girlfriendName} ❤️`;
  }

  const surpriseHeading = document.querySelector("#surprise-reveal h3");
  if (surpriseHeading) {
    surpriseHeading.textContent = `Happy Birthday, ${CONFIG.boyfriendName} ❤️`;
  }

  const surpriseText = document.querySelector("#surprise-reveal p");
  if (surpriseText) {
    surpriseText.innerHTML = `With all my love,<br />${CONFIG.girlfriendName} ❤️`;
  }
}

function setupStoryContent() {
  beginningText.textContent = STORY_TEXT.beginning;
  specialLine1.textContent = STORY_TEXT.specialLine1;
  specialLine2.textContent = STORY_TEXT.specialLine2;
  specialReveal.textContent = STORY_TEXT.specialReveal;

  timelineList.innerHTML = STORY_TEXT.timeline
    .map(
      (entry) => `
        <article class="timeline-item">
          <h3>${entry.title}</h3>
          <p>${entry.text}</p>
        </article>
      `
    )
    .join("");

  loveGrid.innerHTML = STORY_TEXT.loves
    .map(
      (item) => `
        <article class="love-card reveal-on-scroll">
          <div>
            <h3>${item}</h3>
          </div>
        </article>
      `
    )
    .join("");

  littleGrid.innerHTML = STORY_TEXT.littleThings
    .map(
      (item) => `
        <article class="little-card reveal-on-scroll">
          <div>
            <h3>${item}</h3>
          </div>
        </article>
      `
    )
    .join("");

  loveLetter.textContent = CONFIG.loveLetter;
  finalMessage.textContent = CONFIG.finalMessage;

  if (memoryCards) {
    renderMemoryCards();
  }
  renderGallery();
  observeRevealElements();
}

function renderMemoryCards() {
  const validPhotos = PHOTOS.filter((photo) => photo && photo.src);

  memoryCards.innerHTML = validPhotos
    .map(
      (photo, index) => `
        <article class="memory-card reveal-on-scroll" data-index="${index}">
          <img src="${photo.src}" alt="${photo.title}" loading="lazy" onerror="this.closest('.memory-card').style.display='none';" />
          <div class="memory-content">
            <h3>${photo.title}</h3>
            <p>${photo.caption}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  const validPhotos = PHOTOS.filter((photo) => photo && photo.src);
  const repeatedPhotos = [...validPhotos, ...validPhotos];

  photoGallery.innerHTML = `
    <div class="photo-marquee">
      <div class="photo-track">
        ${repeatedPhotos
          .map(
            (photo, index) => `
              <button class="gallery-item reveal-on-scroll" type="button" data-index="${index % validPhotos.length}" aria-label="Open photo: ${photo.title}">
                <img src="${photo.src}" alt="${photo.title}" loading="lazy" onerror="this.closest('.gallery-item').style.display='none';" />
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  document.querySelectorAll(".gallery-item").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      openLightbox(index);
    });
  });
}

function observeRevealElements() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function typewriter(element, text, speed = 22) {
  if (!element) return;
  let index = 0;
  element.textContent = "";
  const tick = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index += 1;
      setTimeout(tick, speed);
    }
  };
  tick();
}

function startMusic() {
  if (!musicAudio) return;

  const audio = musicAudio;
  audio.src = CONFIG.musicPath;
  audio.load();

  const attemptPlay = () => {
    audio.volume = 0.08;
    const playPromise = audio.play();

    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => {
          state.musicPlaying = true;
          musicToggle.classList.add("playing");
          musicToggle.classList.remove("muted");
          fadeVolume(audio, 0.08, 0.6, 1800);
        })
        .catch(() => {
          state.musicPlaying = false;
          musicToggle.classList.remove("playing");
          musicToggle.classList.add("muted");
          musicToggle.querySelector(".music-label").textContent = "Play music";
        });
    }
  };

  audio.onerror = () => {
    state.musicPlaying = false;
    musicToggle.classList.add("muted");
    musicToggle.querySelector(".music-label").textContent = "Music unavailable";
  };

  if (state.musicUnlocked) {
    attemptPlay();
    return;
  }

  state.musicUnlocked = true;
  attemptPlay();
}

function fadeVolume(audio, from, to, duration) {
  if (!audio) return;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = from + (to - from) * progress;
    audio.volume = value;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

function toggleMusic() {
  if (!musicAudio) return;

  if (state.musicPlaying) {
    musicAudio.pause();
    state.musicPlaying = false;
    musicToggle.classList.remove("playing");
    musicToggle.querySelector(".music-label").textContent = "Play music";
    return;
  }

  if (!state.musicUnlocked) {
    state.musicUnlocked = true;
  }

  startMusic();
}

function createHearts() {
  const container = document.getElementById("floating-hearts");
  if (!container) return;

  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = "❤";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = "-30px";
  heart.style.opacity = (Math.random() * 0.7 + 0.2).toString();
  heart.style.fontSize = `${Math.random() * 16 + 16}px`;
  heart.style.transform = `translate3d(0, 0, 0) rotate(${Math.random() * 25 - 12}deg)`;
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  for (let i = 0; i < 12; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${Math.random() * 5 + 4}px`;
    particle.style.height = particle.style.width;
    particle.style.background = Math.random() > 0.5 ? "rgba(255, 123, 200, 0.8)" : "rgba(161, 123, 255, 0.8)";
    particle.style.opacity = (Math.random() * 0.6 + 0.2).toString();
    particle.style.animationDelay = `${Math.random() * 1.6}s`;
    container.appendChild(particle);
  }

  setTimeout(() => {
    container.innerHTML = "";
  }, 2200);
}

function createBalloon() {
  const container = document.getElementById("balloons-layer");
  if (!container) return;

  const balloon = document.createElement("span");
  const colors = ["#ff5e9d", "#ffb3c7", "#a78bfa", "#ffd166", "#7dd3fc", "#f9a8d4"];
  const left = Math.random() * 100;
  const drift = (Math.random() * 80 - 40).toFixed(1);

  balloon.className = "balloon";
  balloon.style.left = `${left}%`;
  balloon.style.bottom = "-60px";
  balloon.style.background = `linear-gradient(180deg, ${colors[Math.floor(Math.random() * colors.length)]}, rgba(255,255,255,0.18))`;
  balloon.style.setProperty("--drift-x", `${drift}px`);
  balloon.style.transform = "translate3d(0, 0, 0)";
  container.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 12000);
}

function startAmbientEffects() {
  if (window.__birthdayAmbientStarted) return;
  window.__birthdayAmbientStarted = true;

  setInterval(() => {
    createHearts();
    createParticles();
  }, 1100);

  setInterval(() => {
    createBalloon();
  }, 900);
}

function startStory() {
  document.body.classList.add("story-started");
  startMusic();
  startAmbientEffects();
  document.getElementById("beginning").scrollIntoView({ behavior: "smooth", block: "start" });
  createParticles();

  for (let i = 0; i < 18; i += 1) {
    setTimeout(createHearts, i * 180);
  }
}

function updateCountdown() {
  const target = new Date(CONFIG.birthdayDate);
  const now = new Date();
  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    countdownDisplay.innerHTML = `
      <div class="time-box" style="grid-column: 1 / -1;">
        <strong>Happy Birthday, Anurag! ❤️</strong>
        <span>Celebrate</span>
      </div>
    `;
    if (!state.confettiStarted) {
      launchCelebration();
      state.confettiStarted = true;
    }
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  countdownDisplay.innerHTML = `
    <div class="time-box">
      <strong>${days}</strong>
      <span>Days</span>
    </div>
    <div class="time-box">
      <strong>${hours}</strong>
      <span>Hours</span>
    </div>
    <div class="time-box">
      <strong>${minutes}</strong>
      <span>Minutes</span>
    </div>
    <div class="time-box">
      <strong>${seconds}</strong>
      <span>Seconds</span>
    </div>
  `;
}

function launchCelebration() {
  for (let i = 0; i < 90; i += 1) {
    setTimeout(createHearts, i * 80);
  }
  startConfetti();
  const surpriseSection = document.getElementById("surprise");
  if (surpriseSection) {
    surpriseSection.classList.add("celebrating");
  }
}

function startConfetti() {
  const ctx = confettiCanvas.getContext("2d");
  const pieces = [];

  for (let i = 0; i < 160; i += 1) {
    pieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      size: Math.random() * 5 + 4,
      color: ["#ff7aa5", "#ffd166", "#c9a7ff", "#ebf0ff"][Math.floor(Math.random() * 4)],
      velocityY: Math.random() * 2 + 1.2,
      velocityX: Math.random() * 3 - 1.5,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.2,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    pieces.forEach((piece) => {
      piece.x += piece.velocityX;
      piece.y += piece.velocityY;
      piece.rotation += piece.spin;
      if (piece.y > confettiCanvas.height) {
        piece.y = -10;
        piece.x = Math.random() * confettiCanvas.width;
      }
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rotation);
      ctx.fillStyle = piece.color;
      ctx.fillRect(0, 0, piece.size, piece.size * 1.7);
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }

  const resize = () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  };

  resize();
  window.addEventListener("resize", resize);
  draw();
}

function revealSurprise() {
  surpriseReveal.classList.add("visible");
  const glow = document.querySelector(".background-glow");
  if (glow) {
    glow.style.filter = "blur(90px)";
    glow.style.opacity = "0.7";
  }
  createParticles();
  for (let i = 0; i < 35; i += 1) {
    setTimeout(createHearts, i * 120);
  }
  launchCelebration();
}

function openLightbox(index) {
  const photos = PHOTOS.filter((photo) => photo && photo.src);
  if (!photos.length) return;

  state.lightboxIndex = index;
  const currentPhoto = photos[index];
  if (!currentPhoto) return;

  lightboxImage.src = currentPhoto.src;
  lightboxImage.alt = currentPhoto.title;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

function updateLightbox(direction) {
  const photos = PHOTOS.filter((photo) => photo && photo.src);
  if (!photos.length) return;

  state.lightboxIndex = (state.lightboxIndex + direction + photos.length) % photos.length;
  const nextPhoto = photos[state.lightboxIndex];
  lightboxImage.src = nextPhoto.src;
  lightboxImage.alt = nextPhoto.title;
}

function initializeGalleryKeyboard() {
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      updateLightbox(1);
    }

    if (event.key === "ArrowLeft") {
      updateLightbox(-1);
    }
  });
}

function setupEvents() {
  openingButton.addEventListener("click", () => {
    startStory();
  });

  storyScrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("beginning").scrollIntoView({ behavior: "smooth", block: "start" });
      startMusic();
    });
  });

  musicToggle.addEventListener("click", toggleMusic);
  surpriseButton.addEventListener("click", revealSurprise);

  document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  document.querySelector(".lightbox-backdrop").addEventListener("click", closeLightbox);
  document.querySelector(".nav-prev").addEventListener("click", () => updateLightbox(-1));
  document.querySelector(".nav-next").addEventListener("click", () => updateLightbox(1));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((element) => revealObserver.observe(element));
}

function initializeTypewriter() {
  const intro = document.getElementById("beginning-text");
  if (intro) {
    typewriter(intro, STORY_TEXT.beginning, 24);
  }
}

function init() {
  updateConfigText();
  setupStoryContent();
  initializeTypewriter();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  setupEvents();
  initializeGalleryKeyboard();
  startAmbientEffects();

  musicToggle.classList.remove("playing");
  musicToggle.querySelector(".music-label").textContent = "Music";

  musicAudio.setAttribute("src", CONFIG.musicPath);
  musicAudio.load();
  musicAudio.onerror = () => {
    state.musicPlaying = false;
    musicToggle.classList.add("muted");
    musicToggle.querySelector(".music-label").textContent = "Music unavailable";
  };
}

window.addEventListener("DOMContentLoaded", init);
