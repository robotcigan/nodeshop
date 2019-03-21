const config = {
  session: {
    secret: 'someOfThem',
    key: 'sid',
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: null
    }
  }
}

module.exports = config;