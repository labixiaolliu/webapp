import faces from '@/assets/js/face'
const htmlEncode = (html) => {
  let temp = document.createElement('div')
  temp.textContent !== undefined ? (temp.textContent = html) : (temp.innerText = html)
  const output = temp.innerHTML
  temp = null
  return output
}
const excapeHtml = (content) => {
  if (!content) return ''
  // 解析表情
  let result = content
  let face = /\sface\[\W{1,}\]/g
  if (face.test(result)) {
    let group = result.match(face)
    group.map((item) => {
      // let key = item.substr(5, item.length - 5)
      let key = item.match(/\[\W{1,}\]/g)[0]
      result = result.replace(item, `<img src="${faces[key]}"/>`)
    })
  }
  // 解析图片
  let image = /\simg\[\S+\]/g
  if (image.test(result)) {
    let group = result.match(image)
    group.map((item) => {
      let value = item.substr(5, item.length - 6)
      result = result.replace(item, `<img src="${value}"/>`)
    })
  }
  // 解析链接
  let link = /\sa\(\S+\)\[\S+\]/g
  if (link.test(result)) {
    let group = result.match(link)
    group.map((item) => {
      let keyStr = item.match(/\(\S+\)/g)[0]
      let key = keyStr.substr(1, keyStr.length - 2)
      let valueStr = item.match(/\[\S+\]/g)[0]
      let value = valueStr.substr(1, valueStr.length - 2)
      result = result.replace(item, `<a href="${value}">${key}</a>`)
    })
  }
  // 解析引用
  result = result.replace(/\[quote\]/g, `<div class="layui-elem-quote">`)
  result = result.replace(/\[\/quote\]/g, `</div>`)
  // 解析代码
  const code = /(\[\/?pre(.+?)[^\]]*\])|\[[^\]]*\]/g
  if (code.test(result)) {
    let group = result.match(code)

    group.map((item) => {
      result = result.replace(item, htmlEncode(item))
    })
    result = result.replace(/\[pre\]/g, '<pre>')
    result = result.replace(/\[\/pre\]/g, '</pre>')
  }
  // 解析hr
  result = result.replace(/\[hr\]/g, '<hr>')
  // 回车换行的替换
  result = result.replace(/\r\n/g, '<br>')
  result = result.replace(/\n/g, '<br>')
  return result
}
export { excapeHtml }
