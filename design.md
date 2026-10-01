# Warm-white gallery design refresh

Approved direction: user's warm-white gallery choice on 1 October 2026 (Asia/Bangkok).

## Visual direction

- Warm off-white canvas, near-black type, quiet neutral separators, white surfaces, and a restrained blue action accent.
- Light header/footer and a compact floating navigation group; keep the artwork-led carousel as the main composition.
- Consistent pill-shaped actions, language control, and media/category tabs, with a clear selected state and keyboard focus.
- Softer image-frame edges and shadows, smooth existing transform/opacity transitions, comfortable Thai tracking and line-height, and a stronger title/action hierarchy.
- Match card frame height to the loaded source artwork's aspect ratio. Keep the existing portrait/landscape width hierarchy, capped against the available stage height including hover enlargement, so original artwork fills its frame without extra cropping, large matte bands, or clipping on short screens.
- White detail and document surfaces with quiet rounded dialog shells, unobtrusive close controls, and unified media tabs. Artwork and page contents remain source-faithful.

## Implementation scope

Use the current static HTML/CSS structure and existing JavaScript controls. Refine styling and layout without adding navigation features or editing project data. Preserve the 16 projects, their order, titles, original image/video sources, mixed artwork proportions, hover excerpts, document-only views, category choice popups, gallery file order, and Thai/English controls.

## Validation

Review desktop, tablet, and phone views after the carousel transitions settle. Check title/CTA wrapping, card spacing and full artwork, readable contrast, 44-pixel touch actions, focus visibility, dialog/gallery/PDF scrolling, sticky controls, category/document switches, media playback, and reduced motion. Run the existing Node tests, then audit staged files, push GitHub main, verify the exact Railway commit and published styling, and repeat affected browser checks before reporting completion.
