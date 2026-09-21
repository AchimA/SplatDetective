# SplatDetective
A geodetective-like wrapper for superspl.at.

## Usage
Open the GitHub Page and optionally pass a superspl.at URL via query parameter:

- Overview: `...?url=https://superspl.at/`
- Scene: `...?url=https://superspl.at/scene/effee531`

SplatDetective keeps title/description areas blurred by default and provides a **Reveal details** toggle.

## Userscript (recommended)
The iframe wrapper above can only overlay static blur boxes on top of superspl.at, since it's a
cross-origin page — it can't tell when the site's own content scrolls, so the blur can drift out of
place and interaction has to be blocked to prevent that. [splatdetective.user.js](splatdetective.user.js)
avoids this entirely by running directly on superspl.at (via [Tampermonkey](https://www.tampermonkey.net/))
and blurring the real title/description/card-title elements in place, leaving scrolling and clicking
fully intact.

Install it by opening the raw file in a browser with Tampermonkey installed, or paste its contents into
a new Tampermonkey script.
