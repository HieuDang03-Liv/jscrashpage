module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'javascript for beginners',
    },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-transformer-remark`,
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/tasks/`,
            },
        },
    ],
}
