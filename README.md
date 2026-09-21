# SplatDetective
A geodetective-like wrapper for superspl.at.

## Userscript (recommended)
[splatdetective.user.js](splatdetective.user.js) is a [Tampermonkey](https://www.tampermonkey.net/)
script that runs directly on superspl.at and blurs the real title, description, and grid card-title
elements in place. Because it runs same-origin instead of overlaying a cross-origin iframe, scrolling
and clicking scenes/cards keeps working normally, and the blur can never drift out of place.

Install it by opening the raw file in a browser with Tampermonkey installed, or paste its contents into
a new Tampermonkey script. Use the **Reveal details** button it adds to the page to toggle the blur.

## Iframe wrapper (fallback)
If you can't install a userscript, open the GitHub Page instead and optionally pass a superspl.at URL
via query parameter:

- Overview: `...?url=https://superspl.at/`
- Scene: `...?url=https://superspl.at/scene/effee531`

SplatDetective keeps title/description areas blurred by default and provides a **Reveal details** toggle.
Since it can only overlay static blur boxes on top of a cross-origin page, it can't tell when
superspl.at's own content scrolls, so scrolling/clicking is intentionally blocked over the blurred areas
to keep the blur from drifting out of place.
