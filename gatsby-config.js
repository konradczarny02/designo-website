const path = require("path");
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
    ]
};