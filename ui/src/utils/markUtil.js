export const convertSelectedToSlots = function (target, editor) {
  const allSlots = []
  let selectedIndex = 0

  target = getParentSpanNodeIfNeeded(target)
  console.log('---', target)

  const slt = window.getSelection()
  if (slt.toString() === '' || slt.rangeCount !== 1) return {}

  console.log('anchorNode', slt.anchorNode)
  console.log('anchorOffset', slt.anchorOffset)

  console.log('focusNode', slt.focusNode)
  console.log('focusOffset', slt.focusOffset)

  const range = slt.getRangeAt(0)
  console.log('range', range, range.toString())

  const startContainer = getParentSpanNodeIfNeeded(range.startContainer)
  const endContainer = getParentSpanNodeIfNeeded(range.endContainer)
  console.log('startContainer', startContainer, range.startOffset)
  console.log('endContainer', endContainer, range.endOffset)
  const isSame = startContainer === endContainer
  console.log('is same', isSame)

  let start = -1
  let end = -1
  for (let i = 0; i < editor.childNodes.length; i++) {
    const item1 = getParentSpanNodeIfNeeded(editor.childNodes[i])

    if (item1 === startContainer) {
      console.log('start')
      start = i
    }
    if (item1 === endContainer) {
      console.log('end')
      end = i
    }
  }

  const startText = startContainer.textContent
  const endText = endContainer.textContent

  let selectedText = ''
  for (let j = 0; j < editor.childNodes.length; j++) {
    const item2 = getParentSpanNodeIfNeeded(editor.childNodes[j])

    if (j < start || j > end) {
      const span1 = textToSpan(item2)
      allSlots.push(span1)
    } else if (j === start) {
      const startLeft1 = slt.anchorOffset
      const startRight1 = isSame ? slt.focusOffset : startContainer.textContent.length
      const leftSection1 = startText.substr(0, startLeft1)
      const rightSection1 = startText.substr(startLeft1, startRight1 - startLeft1)

      // create part1 as span
      if (leftSection1.length > 0) {
        const span2 = genSpan(leftSection1, item2)
        allSlots.push(span2)
      }
      // put part2 to cache
      if (isSame) {
        selectedText += startText.substr(startLeft1, startRight1 - startLeft1)
        const span3 = genSpan(selectedText, item2)
        allSlots.push(span3)

        const span4 = genSpan(startText.substr(startRight1), item2)
        allSlots.push(span4)
      } else {
        selectedText += rightSection1
      }
    } else if (j > start && j < end) {
      // put to cache
      selectedText += item2.textContent
    } else if (j === end && !isSame) { // already be done if selection in single node
      // const endLeft2 = 0
      const endRight2 = slt.focusOffset
      const leftSection2 = endText.substr(0, endRight2)
      const rightSection2 = endText.substr(endRight2)

      // put part1 to cache
      selectedText += leftSection2

      // create cache as span
      const span6 = genSpan(selectedText, item2)
      allSlots.push(span6)
      selectedIndex = allSlots.length - 1

      // create part2 as span
      if (rightSection2.length > 0) {
        const span5 = genSpan(rightSection2, item2)
        allSlots.push(span5)
      }
    }
  }

  const mp = { allSlots: allSlots, selectedIndex: selectedIndex }
  console.log(mp)
  return mp
}

export const genSent = function (allSlots, selectedIndex, slot) {
  const arr = []
  console.log('---', selectedIndex)

  allSlots.forEach((item3, index) => {
    const section = document.createElement('span')
    let dataType = item3.getAttribute('data-type')
    let dataValue = item3.getAttribute('data-value')

    if (index === selectedIndex) {
      dataType = slot.slotType
      dataValue = slot.value
    }

    // section.setAttribute('id', index)
    if (dataType && dataType != null) {
      section.setAttribute('data-type', dataType)
      addCls(section, dataType)
    }

    if (dataValue) section.setAttribute('data-value', dataValue.toString())
    else section.setAttribute('data-value', '')
    section.innerText = item3.innerText

    arr.push(section.outerHTML)
  })

  return arr.join('')
}

export const genSentSlots = function (editor) {
  const slots = []
  editor.childNodes.forEach((item4, index) => {
    const slotObj = {}

    slotObj.seq = index + 1

    slotObj.id = item4.id
    slotObj.text = item4.innerText

    if (item4.getAttribute) {
      slotObj.type = item4.getAttribute('data-type')
      slotObj.value = item4.getAttribute('data-value')
    }

    slots.push(slotObj)
  })

  return slots
}

export const getParentSpanNodeIfNeeded = function (elem) {
  console.log('getParentSpanNodeIfNeeded', elem)
  if (elem.parentNode && elem.parentNode.nodeName.toLowerCase() === 'span') {
    return elem.parentNode
  }
  return elem
}

export const genSpan = function (text, node) {
  console.log('genSpan')
  const span7 = document.createElement('span')
  span7.innerText = text

  if (node.getAttribute) {
    span7.setAttribute('data-type', node.getAttribute('data-type'))
    span7.setAttribute('data-value', node.getAttribute('data-value'))
  } else {
    alert('node.getAttribute')
  }

  return span7
}

export const textToSpan = function (node) {
  if (node.nodeName === '#text') {
    const span8 = document.createElement('span')
    span8.innerText = node.nodeValue
    return span8
  } else {
    return node
  }
}

export const addCls = function (element, value) {
  if (!element.className) {
    element.className = value
  } else {
    let newClassName = element.className
    newClassName += ' '
    newClassName += value
    element.className = newClassName
  }
}
