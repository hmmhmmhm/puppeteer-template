import {
    Logger,
    Puppeteer,
} from './utils'

const main = async () => {
    const browser = await Puppeteer.getBrowser({ isHeadless: true })
    if (browser) {
        const page = await browser.newPage()

        // * An example of crawling a page with CloudFlare applied.
        Logger.debug('🚧  Crawling in progress...')

        const url = 'https://namu.wiki/w/Cloudflare'
        await Puppeteer.goto(page, url)
        await page.screenshot({ path: 'example.png' })

        Logger.debug('🚧  Crawling is complete.')
        Logger.debug('🚧  Exit the Puppetier...')
        browser.close()
    }
}

main()