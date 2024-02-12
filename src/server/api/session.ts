export default defineEventHandler(async (event) => {
  if (event.headers.get('cr-session') !== null) {
    const session = await useSession(event, {
      name: 'session',
      password: 'z8A22NpgFlfLBqrVCYCEpYaN5FxWDKVw',
      cookie: {
          maxAge: 300,
          httpOnly: false
      }
    });
    return session;
  }
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
})
