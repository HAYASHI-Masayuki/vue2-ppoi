type ElementType = string

type AttributesType = Record<string, string[] | string>

type NodeType = (() => string)

type TextNodeType = string

type NodesType = (NodeType | TextNodeType)[]

const h = (element: ElementType, _attributes: AttributesType = {}, nodes: NodesType = []): NodeType => {
  return () => {
    let html = `<${element}>`

    // TODO: 属性の処理もする

    html += nodes.map(node => {
      if (typeof node === 'string') {
        return node
      } else {
        return node()
      }
    })

    html += `</${element}>`

    return html
  }
}

const generate = h('a', { href: 'https://example.com/' }, [
  h('b', null, ['リンク'])
])

document.getElementsByTagName('div')[0].innerHTML = generate()
