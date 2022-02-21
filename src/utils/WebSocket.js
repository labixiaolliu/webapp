import store from '../store/index'
class WebSocketClient {
  constructor(options) {
    const defaultConfig = {
      protal: 'ws',
      url: '127.0.0.1',
      port: 3001,
      timeInterval: 5 * 1000
    }
    const finalConfig = { ...defaultConfig, ...options }
    this.ws = null
    this.protal = finalConfig.protal
    this.url = finalConfig.url
    this.port = finalConfig.port
    this.timeInterval = finalConfig.timeInterval
    this.options = { ...finalConfig } || {}
    this.handle = null
  }

  init() {
    this.ws = new WebSocket(`${this.protal}://${this.url}:${this.port}`)
    this.ws.onopen = () => this.onOpen()
    this.ws.onmessage = (msg) => this.onMessage(msg)
    this.ws.onclose = () => this.onclose()
    this.ws.onerror = () => this.onError()
  }
  send(msg) {
    this.ws.send(msg)
  }
  onOpen() {
    console.log('TCL: Data -> store', 'WebSocket 链接打开')
    // 这里注意，this为this.ws
    this.send(
      JSON.stringify({
        event: 'auth',
        message: 'Bearer ' + store.state.token
      })
    )
  }
  onMessage(event) {
    // 接受服务端消息
    var obj = JSON.parse(event.data)
    switch (obj.event) {
      case 'noauth':
        //鉴权失败
        console.log('TCL: Data -> store', '鉴权失败')
        break
      case 'heartbeat':
        this.ws.send(
          JSON.stringify({
            event: 'heartbeat',
            message: 'pong'
          })
        )
        this.checkHeart()
        break
      case '':
        break
      default:
        // 分发消息
        store.dispatch(obj.event, obj)
    }
  }
  onclose() {
    console.log('TCL: Data -> store', '关闭WebSocket')
    this.ws.close()
  }
  onError() {
    console.log('TCL: Data -> store', 'WebSocket 出错')
    setTimeout(() => {
      this.init()
    }, 500)
  }
  checkHeart() {
    clearTimeout(this.handle)
    this.handle = setTimeout(() => {
      console.log('TCL: Data -> store', 'pong failed')
      this.onclose()
      this.onError()
    }, this.timeInterval + 1000)
  }
}

export default WebSocketClient
