const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components' : 'src/components',
        '@ui' : 'src/components/UI',
        '@containers' : 'src/containers',
        '@constans' : 'src/constans',
        '@hok-helpers' : 'src/hok-helpers',
        '@services' : 'src/services',
        '@utils' : 'src/utils',
        '@styles' : 'src/styles',
        '@routes' : 'src/routes',
        '@static' : 'src/static',
        '@hooks' : 'src/hooks',
        '@store' : 'src/store',
    })(config)

    return config;
  }