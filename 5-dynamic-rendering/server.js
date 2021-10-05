// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const isbot = require('isbot')
const static = require('node-static');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handleViaNext = app.getRequestHandler()
const handleViaCra = new(static.Server)(__dirname + '/build')

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)

        if (isbot(req.headers['user-agent'])) {
            handleViaNext(req, res, parsedUrl)
        } else {
            handleViaCra.serve(req, res);
        }
    }).listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
