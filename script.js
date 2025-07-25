/* ✅ Scroll to Reveal 样式统一 */
.scroll-hint {
  font-size: 1rem;
  color: white;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s ease forwards;
  animation-delay: 3.6s; /* 要比前一句晚 */
  margin-top: 1em;
  z-index: 0; /* 确保处于底层 */
}

/* ✅ 缩小 reveal-section 的文字 */
.small-text {
  font-size: 1.3rem;
}

/* ✅ followup 渐显动效 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s ease forwards;
  animation-delay: 0.5s;
}

.fade-in-delay {
  animation-delay: 1.5s;
}

/* ✅ 如果你希望 Scroll to Reveal 在白底上是黑色： */
.followup-text.scroll-hint {
  color: #111;
}
