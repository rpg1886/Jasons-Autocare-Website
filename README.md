# Jason's Premium Autocare Detailing

A responsive, single-page website for Jason's Premium Autocare Detailing in Mexico, Pampanga. The site is built with semantic HTML, CSS, and a small vanilla JavaScript file; no framework, build step, or package installation is required.

## Run locally

Open `index.html` in a browser, or serve the repository root with any static web server. The supplied logo and vehicle photos are in `Images/`.

## Booking and deployment

The booking form is configured as a Netlify form (`name="booking"` and `data-netlify="true"`) and submits to `thanks.html`. Deploy the repository root to Netlify and enable form submissions to receive booking requests. Submitting locally or on a host without Netlify Forms will not deliver requests to the business.

The site uses the generic Messenger URL `https://m.me/` because a business-specific Messenger handle was not provided. Add the verified shop Messenger URL and phone/Viber number before launch if direct-to-business messaging and calling are required. Pricing is quoted per vehicle rather than invented; confirm actual package inclusions and prices with the shop before publishing fixed rates. Opening hours are intentionally omitted because verified hours were not supplied; visits are listed as by appointment.

The map and Google Fonts are loaded from Google when online. The map iframe is lazy-loaded.