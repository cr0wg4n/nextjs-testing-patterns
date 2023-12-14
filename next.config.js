/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: { 
      properties: process.env.NODE_ENV === 'production' ? 
        ['^data-testid$', '^data-cy$'] : 
        []
    }
  }
}

module.exports = nextConfig
