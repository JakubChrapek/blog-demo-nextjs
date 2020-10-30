
import {motion} from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Kuba Chrapek'
export const siteTitle = 'Next.js example'

const Layout = ({children, home}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal website demo using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src="/images/kuba-profile.jpg"
              width="140px"
              height="140px"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <motion.h1 
              className={utilStyles.heading2Xl}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 4,
                  scale: 0.9
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: 0.2
                  }
                }
              }}

            >
              {name}
            </motion.h1>
          </>
        ) : (
          <>
            <Link href="/">
              <motion.a whileHover={{
                  y: 2, cursor: 'pointer'}}>
                <Image
                  src="/images/kuba-profile.jpg"
                  width="120px"
                  height="120px"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </motion.a>
            </Link>
            <motion.h2 
              className={utilStyles.headingLg}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 4,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2
                  }
                }
              }}

            >
              <Link href="/">
                <a>{name}</a>
              </Link>
            </motion.h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout
