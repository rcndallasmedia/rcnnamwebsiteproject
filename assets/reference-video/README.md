# Reference frames (from your screen recording)

PNG stills were extracted from `Screen Recording 2026-03-23 at 6.46.14 PM.mov` (Medidata homepage) for design alignment.

Regenerate (requires `ffmpeg`):

```bash
F=~/Downloads/Screen\ Recording\ 2026-03-23\ at\ 6.46.14*.mov
mkdir -p assets/reference-video
ffmpeg -y -i "$F" -vf "fps=1/5" -q:v 3 "assets/reference-video/medidata-ref-%03d.png"
```

You can delete these PNGs anytime to save space; they are optional for the build.
