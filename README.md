# Peaky Bucks Party

A small mobile-friendly React app for a Peaky Blinders themed bucks party in Adelaide. The goal is simple: send one hosted link to the group so everyone can check the schedule, map links, and key details from their phones.

## Run Locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Deploy To Vercel

1. Push this repo to GitHub.
2. Go to Vercel and create a new project from that GitHub repo.
3. Leave the default framework detection in place.
4. Deploy.

Vercel should detect this as a Create React App project automatically.

## What The App Includes

- A themed event header with date and location
- A collapsible schedule with Google Maps links
- A collapsible gambling guide
- A simple winner's tax reminder

## Notes

- This project now uses standard CSS for styling, which keeps deployment simpler.
- Friends do not need any setup once the app is deployed. They only need the hosted URL.
