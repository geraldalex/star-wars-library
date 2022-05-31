const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components' : 'src/components',
        '@containers' : 'src/containers',
        '@constans' : 'src/constans',
        '@hok-helpers' : 'src/hok-helpers',
        '@services' : 'src/services',
        '@utils' : 'src/utils',
        '@styles' : 'src/styles',
    })(config)

    return config;
  }