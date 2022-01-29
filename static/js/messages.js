let loc = window.location
let wsStart = 'ws://'

if (loc.protocol === 'https') {
    wsStart = 'wss://'
}

let endpoint = wsStart + loc.host + loc.pathname

var socket = new WebSocket(endpoint)

socket.onopen = async function ({e:Event}) {
    console.log('open', e)
}
socket.onmessage = async function ({e:Event}) {
    console.log('message', e)
}
socket.onerror = async function ({e:Event}) {
    console.log('error', e)
}
socket.onclose = async function ({e:Event}) {
    console.log('close', e)
}