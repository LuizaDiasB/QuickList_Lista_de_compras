const inputItem = document.getElementById('inputItem');
const btnAddItem = document.getElementById('btnAddItem');
const listaItens = document.getElementById('listaItens');

const avisoRemocao = document.querySelector('.oculta-aviso')
const btnFecharAviso = document.getElementById('btnFecharAviso')

inputItem.addEventListener('input', () => {
  inputItem.value
})

btnAddItem.addEventListener('click', (event)=> {
  event.preventDefault()

  const textoItem = inputItem.value.trim()

  if(textoItem === '') {
    alert('Digite um item para adicionar na lista.')

    inputItem.focus()
    return
  }

  const li = document.createElement('li')

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  li.append(checkbox)

  const textSpan = document.createElement('span')
  textSpan.textContent = textoItem
  textSpan.classList.add('textSpan')
  li.append(textSpan)

  const btnDeletarItem = document.createElement('img')
  btnDeletarItem.src = 'assets/delete-icon.svg'
  btnDeletarItem.alt = 'Deletar item'
  btnDeletarItem.classList.add('btnDeletarItem')

  btnDeletarItem.addEventListener('click', () => {
    li.remove()
    avisoRemocao.style.display = 'block'
  })

  li.append(btnDeletarItem)

  listaItens.append(li)

  inputItem.value = ''
  inputItem.focus()
})

btnFecharAviso.addEventListener('click', () => {
  avisoRemocao.style.display = 'none'
})
