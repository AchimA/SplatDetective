# SplatDetective
A geodetective-like wrapper for superspl.at.

## Userscript (recommended)
[splatdetective.user.js](splatdetective.user.js) is a [Tampermonkey](https://www.tampermonkey.net/)
script that runs directly on superspl.at and blurs the real title, description, and grid card-title
elements in place. Because it runs same-origin instead of overlaying a cross-origin iframe, scrolling
and clicking scenes/cards keeps working normally, and the blur can never drift out of place.

Install it by opening the raw file in a browser with Tampermonkey installed, or paste its contents into
a new Tampermonkey script. It adds two buttons to the page: **Shuffle**, which jumps to a random scene
linked from the current page, and **Reveal details** / **Hide details**, which toggles the blur.
