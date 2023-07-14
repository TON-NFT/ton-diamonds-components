import copy_to_clipboard from 'copy-to-clipboard'

export function copy(text) {
  copy_to_clipboard(text)
}

export function openInNewTab(url) {
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style = 'display: none'
  a.href = url
  a.target = '_blank'
  a.click()
  document.body.removeChild(a)
}

export function handleFocusOut(item) {
  console.log('hfhfhfhfh');
  item = false
}
