const path = require("path");
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: `Designo`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-root-import",
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /icons/
                }
            }
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: process.env.API_KEY,
            }
        },
        {
            resolve: 'gatsby-plugin-react-leaflet',
            options: {
                linkStyles: true
            }
        }
    ]
};