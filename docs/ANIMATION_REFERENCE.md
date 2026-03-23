# Sharing reference motion (e.g. Medidata) with the team

To match **[Medidata](https://www.medidata.com/en/)**-style motion (mega-menu, hover, scroll), the most useful things you can share are:

## 1. Short screen recordings (best)

- **What to capture:** hover top nav → mega-menu opens → move mouse across items → move off to close → scroll page (header blur/state).
- **Length:** 10–20 seconds per clip.
- **How to send:** export as **MP4** or **GIF** and add it under `assets/` in this repo, or attach the file in chat.

## 2. Slow-mo or frame-by-frame (optional)

- iPhone: screen record, then trim in Photos.
- macOS: **QuickTime → File → New Screen Recording**.

## 3. DevTools (for timing / easing)

1. Open the site in Chrome.
2. **Right-click the dropdown → Inspect**.
3. In **Elements**, select the panel node; in **Styles**, find `transition`, `animation`, `transform`, `opacity`.
4. Screenshot or copy values (e.g. `transition: opacity 240ms cubic-bezier(...)`).

## 4. Describe the feel in words

Examples that help implementation:

- “Menu fades in and moves down about **8px** in **~250ms**.”
- “No bounce; easing feels **soft out** (slow at the end).”
- “Nav items **don’t** change color aggressively; mostly **background** on hover.”

## What we optimize for here

- **Ease:** `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration).
- **Reduced motion:** `prefers-reduced-motion` respected in Tailwind (`motion-reduce:`).
- **No “pop”:** avoid large scale jumps; prefer opacity + small `translateY`.

If you add a recording to `assets/`, note the filename in a PR or issue so we can align timings to it.
