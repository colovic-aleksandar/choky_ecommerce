import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
    localePrefix: 'always',
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
    alternateLinks: false,
});

