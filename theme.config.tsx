import React from 'react'
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs'
import Link from 'next/link'
import { useRouter } from 'next/router'


const config: DocsThemeConfig = {
  banner: {
    key: '1.0-alpha-release',
    text: (
      <div>
        🎉 ezePing 1.0 alpha is released.{' '}
        <Link
          href="/"
          target='blank'
        >
          Read more →
        </Link>
      </div>
    )
  },
  logo: <span>ezePing Documentation</span>,
  head: function useHead() {
    const config = useConfig()
    const { route } = useRouter()
    const isDefault = route === '/' || !config.title
    const image =
      'https://docs.ezeping.com/' +
      (isDefault ? 'ezeping-banner.png' : `/og?title=${config.title}`)

    const description =
      config.frontMatter.description ||
      'SaaS Monitoring made easy.'
    const title = config.title + (route === '/' ? '' : ' - ezePing')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="www.ezeping.com" />
        <meta name="twitter:url" content="https://www.ezeping.com" />
        <meta name="apple-mobile-web-app-title" content="ezePing" />
        <link rel="icon" href="/favicon.ico" type="image/ico" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
      </>
    )
  },
  project: {
    link: 'https://github.com/sanjayio/ezeping-docs',
  },
  chat: {
    link: 'https://discord.gg/TwpxS4v3',
  },
  docsRepositoryBase: 'https://github.com/sanjayio/ezeping-docs',
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} ezePing. All Rights Reserved. 
        </p>
      </div>
    )
  }
}

export default config
