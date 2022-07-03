import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export default function Seo(props) {

    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = props.description || data.site.siteMetadata.description
                const metaTitle = props.title || data.site.siteMetadata.title
                const metaAuthor = props.author || data.site.siteMetadata.author
                const metaUrl = props.url || data.site.siteMetadata.url
                const metaKeywords = props.keywords || ["Freelance", "Developer", "UI Designer", "Photo", "Video "]
                return (
                    <Helmet
                        title={metaTitle}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: metaTitle,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                property: `url`,
                                content: metaUrl,
                            },
                            {
                                property: `og:author`,
                                content: metaAuthor,
                            },
                            {
                                property: `keywords`,
                                content: metaKeywords,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords.join(`, `)
                            } : []
                        )
                        }
                    />
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                keywords
            }
        }
    }
`
