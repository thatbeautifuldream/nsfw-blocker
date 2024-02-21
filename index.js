const blockedSites = [
  "pornhub",
  "xnxx",
  "xvideos",
  "xhamster",
  "redtube",
  "youporn",
];

if (blockedSites.some((site) => window.location.hostname.includes(site))) {
  window.stop();
}
