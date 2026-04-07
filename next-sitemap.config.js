/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://apollonconstruction.be',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  alternateRefs: [
    { href: 'https://apollonconstruction.be/fr', hreflang: 'fr' },
    { href: 'https://apollonconstruction.be/nl', hreflang: 'nl' },
    { href: 'https://apollonconstruction.be/en', hreflang: 'en' },
  ],
  exclude: ['/api/*'],
}
