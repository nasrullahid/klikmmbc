module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter-nuxt-bulma',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700|Roboto:400,500&display=swap' },
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Global CSS
     */
    css: [
        { src: '~/assets/scss/app.scss', lang: 'scss' },
    ],
    /*
     ** Custom Modules
     */
    modules: [
        [
            'nuxt-fontawesome', {
                imports: [{
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas']
                    }, {
                        set: '@fortawesome/free-regular-svg-icons',
                        icons: ['far']
                    },
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab']
                    }
                ]
            }
        ],
        ['nuxt-facebook-pixel-module', {
            track: 'PageView',
            pixelId: '2453788511517781',
            disabled: false
        }],
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}