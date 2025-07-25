// === Canvas particles ===
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
const particles = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
    this.angle = Math.random() * Math.PI * 2;
    this.speed = 1 + Math.random() * 1.5;
  }

  update() {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 300) {
      this.angle = Math.atan2(dy, dx);
      this.speed = 1.8;
    } else {
      this.speed = 0.8;
    }

    this.history.push({ x: this.x, y: this.y });
    if (this.history.length > 50) this.history.shift();

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.angle += (Math.random() - 0.5) * 0.2;
  }

  draw(ctx) {
    ctx.beginPath();
    for (let i = 0; i < this.history.length - 1; i++) {
      ctx.moveTo(this.history[i].x, this.history[i].y);
      ctx.lineTo(this.history[i + 1].x, this.history[i + 1].y);
    }
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 0.7;
    ctx.stroke();
  }
}

for (let i = 0; i < 60; i++) {
  particles.push(
    new Particle(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    )
  );
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.update();
    p.draw(ctx);
  });

  requestAnimationFrame(animate);
}
animate();

// === Reveal on scroll ===
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  },
  {
    threshold: 0.5,
  }
);

document.querySelectorAll(".reveal-section, .followup-section").forEach(section => {
  observer.observe(section);
});
