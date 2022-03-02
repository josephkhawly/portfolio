import { bookmarks } from "./bookmarks"

const setProperty = (key: string, value: string) => {
    if (value === '') return 'usage: name [newname]'

    localStorage.setItem(key, value)
    return `Set ${key} to ${value}.`
}

const local = (args: string) => {
    if (args.length === 0) return 'usage: local [port] [flag]'

    const [port, flag] = args.trim().split(' ')
    let url = `http://localhost:${port}000`

    if (flag === '-a') url += '/admin'
    else if (flag === '-p') url += '/api'

    window.location.href = url
    return url
}

const actions: any = {
    echo: (input: string) => input,
    user: (name: string) => setProperty('userName', name),
    machine: (str: string) => setProperty('userMachine', str),
    local,
}

export const handle = (text: string) => {
    const [command, ...args] = text.trim().split(' ')
    if (actions[command]) {
        const executor = actions[command]
        const output = executor(args.join(' '))
        return output
    } else { // check for URL
        let url

        // subreddit or reddit user
        if (text.slice(0, 3) === '/r/' || text.slice(0, 3) === '/u/') url = `https://www.reddit.com${text}`

        // 4chan board
        if (text[0] === '/' && (text[text.length - 1] === '/' || text.length < 5)) url = `https://boards.4chan.org/${text.substr(1)}`

        // bookmarks
        Object.keys(bookmarks).forEach(function (key) {
            if (bookmarks[key][text]) url = bookmarks[key][text]
        })

        if (url) {
            const modifier = url.substring(url.length - 3)
            if (modifier === '-t') { // Open in new tab
                url = url.slice(0, url.length - 3) //remove " -t"
                window.open(url, '_blank')
            } else {
                window.location.href = url
                return `Loading ${url}...`
            }
        }
    }

    return `Command '${command}' not found. Type 'ls' for all commands.`
}