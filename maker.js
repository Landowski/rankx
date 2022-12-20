//REMOVER ORIGEM INVÁLIDA NO ARQUIVO FINAL UGLYFICADO

// Cria a div container
let scope = this, container = document.createElement('div'), comprimento = '', tamanho = '', topo = '', direita = '', raio = '', fundo = '', cor_fonte = '', tamanho_fonte = ''
container.style.backgroundColor = 'transparent'

// Cria a div da badge e os CSS
let badgeDiv = document.createElement('div')
const allCSS = document.createElement('style')
   
// ================================= SE FOR DESKTOP =================================
if( !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

// Cria o iframe
container.innerHTML = `<iframe id="iframe-sininho" scrolling="no" frameborder="0" src="https://sininhoapp.bubbleapps.io/version-test/s/${id}" style="width: 400px; height: 1px; max-height: 412px !important; border: 0; border-radius: 5px; box-sizing: border-box; position: absolute !important; left: 0; top: 0; user-select: none; z-index: 999999999999999; box-shadow: 0 8px 16px rgb(0 0 0 / 18%); background-color: #FFF; pointer-events: none; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s; opacity: 0; transform: translateY(-15px)"></iframe>`

// Apensa o container
scope.document.body.appendChild(container)

// Seleciona os elementos por ID e classe; apensa a badge no botão
const iframe = document.querySelector('#iframe-sininho')
let botao = document.getElementById('botao-sininho')
botao.style.position = 'relative'
botao.style.display = 'inline-block'
botao.style.userSelect = 'none'
badgeDiv.classList.add('sininho-contador')

// Posição e tamanho do iframe
const fromLeft = botao.offsetLeft
const fromTop = botao.offsetTop
const iframeWidth  = 400

if (fromLeft + iframeWidth + 10 > (document.documentElement.clientWidth || window.innerWidth)) {
    console.log('COMPRIMENTO ULTRAPASSOU A DIREITA PELA VARIÁVEL IFRAMEWIDTH + 10PX.')
    iframe.style.left = '-' + (iframeWidth - botao.clientWidth) + 'px'
    botao.appendChild(iframe)
}
else {
    iframe.style.left = 0 + 'px'
    botao.appendChild(iframe)
    }

// [LISTENER] Remove o iframe se desativado ou começa tudo
window.addEventListener('message', (event) => {

    // Checa se a mensagem vem do Sininho, senão invalida
    if (event.origin != 'https://sininhoapp.bubbleapps.io') {
        console.log("Origem inválida.")
        return

    }

    if (event.data.iniciar) {
    console.log('Recebido sinal de fechar.')
    iframe.classList.remove('.sininho-mostrar')
    iframe.remove()
    }

    if (event.data.comp) {
        comprimento = event.data.comp
        }

    if (event.data.tam) {
        tamanho = event.data.tam
        }

    if (event.data.top) {
        topo = event.data.top
        }

    if (event.data.dir) {
        direita = event.data.dir
        }

    if (event.data.rai) {
        raio = event.data.rai
        }

    if (event.data.fund) {
        fundo = event.data.fund
        }

    if (event.data.corf) {
        cor_fonte = event.data.corf
        }

    if (event.data.tamf) {
        tamanho_fonte = event.data.tamf
        }

    if (event.data.numero) {
        botao.style.cursor = 'pointer'
        botao.appendChild(badgeDiv)
        allCSS.innerHTML = `
        .sininho-mostrar { opacity: 1 !important; transform: translateY(0) !important; pointer-events: auto !important; }
        .sininho-contador { position: absolute !important; display: flex; flex-direction: column; align-items: center; justify-content: center; width: ${comprimento}; height: ${tamanho}; top: ${topo} !important; right: ${direita} !important; border-radius: ${raio}; background-color: ${fundo}; color: ${cor_fonte}; font-family: Arial !important; font-size: ${tamanho_fonte}; font-weight: normal; line-height: 1; cursor: pointer; }
        #botao-sininho *:not(#iframe-sininho, .sininho-contador) { pointer-events: none !important; }
        `
        badgeDiv.innerHTML = event.data.numero
        scope.document.head.appendChild(allCSS)
    }
    
    if (event.data.altura) {
    const alturaRecebida = event.data.altura
    console.log('Altura pega do ID wrapper = ' + event.data.altura + ' pixels.')
        if (alturaRecebida >= 412) {
        iframe.style.height = '412px'
        }
    else if (alturaRecebida < 412) {
        iframe.style.height = alturaRecebida + 'px'
        }

    if (fromTop + alturaRecebida + 10 > (document.documentElement.clientHeight || window.innerHeight)) {
        console.log('ALTURA ULTRAPASSOU A TELA EMBAIXO PELA VARIÁVEL IFRAMEHEIGHT + 10PX.')
        iframe.style.top = (-alturaRecebida -10) + 'px'
        }
    else {
        iframe.style.top = botao.clientHeight + 10 + 'px'
        }

    }
    
    }, false)

// [LISTENER] Escuta o clique do mouse
window.addEventListener('click', function(event) {
if ((event.target === botao || event.target === badgeDiv) && !iframe.classList.contains('sininho-mostrar')) {
    iframe.classList.add('sininho-mostrar')
    badgeDiv.remove()
} else if (event.target != iframe && event.target.parentNode != iframe) {
    iframe.classList.remove('sininho-mostrar') }
})

}

// ================================= SENÃO É MOBILE =================================
else {

// Cria o iframe mobile
container.innerHTML = `<iframe id="iframe-sininho" scrolling="no" frameborder="0" src="https://sininhoapp.bubbleapps.io/version-test/m/${id}" style="width: 100%; height: 100%; box-sizing: border-box; position: fixed; top: 0%; left: 0%; user-select: none; z-index: 999999999999999; box-shadow: 0 8px 16px rgb(0 0 0 / 18%); background-color: #FFF; opacity: 0; pointer-events: none; transition: opacity 0.3s ease 0s"></iframe>`

// Apensa o container
scope.document.body.appendChild(container)

// Seleciona os elementos por ID e classe; apensa a badge no botão; apensa estilos no botão
const iframe = document.querySelector('#' + 'iframe-sininho')
const botao = document.getElementById('botao-sininho')
botao.style.position = 'relative'
botao.style.display = 'inline-block'
botao.style.userSelect = 'none'
badgeDiv.classList.add('sininho-contador')

// [LISTENER] Apensa o número de anúncios na badge e apensa o CSS da badge
window.addEventListener('message', (event) => {

    // Checa se a mensagem vem do Sininho, senão invalida
    if (event.origin != 'https://sininhoapp.bubbleapps.io') {
        console.log("Origem inválida.")
        return

    }

    if (event.data.comp) {
        comprimento = event.data.comp
        }

    if (event.data.tam) {
        tamanho = event.data.tam
        }

    if (event.data.top) {
        topo = event.data.top
        }

    if (event.data.dir) {
        direita = event.data.dir
        }

    if (event.data.rai) {
        raio = event.data.rai
        }

    if (event.data.fund) {
        fundo = event.data.fund
        }

    if (event.data.corf) {
        cor_fonte = event.data.corf
        }

    if (event.data.tamf) {
        tamanho_fonte = event.data.tamf
        }

    if (event.data.numero) {
        botao.style.cursor = 'pointer'
        botao.appendChild(badgeDiv)
        allCSS.innerHTML = `
        .sininho-mostrar { opacity: 1 !important; pointer-events: auto !important; }
        .sininho-contador { position: absolute !important; display: flex; flex-direction: column; align-items: center; justify-content: center; width: ${comprimento}; height: ${tamanho}; top: ${topo} !important; right: ${direita} !important; border-radius: ${raio}; background-color: ${fundo}; color: ${cor_fonte}; font-family: Arial !important; font-size: ${tamanho_fonte}; font-weight: normal; line-height: 1; cursor: pointer; }
        #botao-sininho *:not(#iframe-sininho, .sininho-contador) { pointer-events: none !important; }
        `
        badgeDiv.innerHTML = event.data.numero
        scope.document.head.appendChild(allCSS)
    }      
    }, false)

// [LISTENER] Escuta o clique do mouse
window.addEventListener('mousedown', function(event) {
    if ((event.target === botao || event.target === badgeDiv) && !iframe.classList.contains('sininho-mostrar')) {
        iframe.classList.add('sininho-mostrar')
        badgeDiv.remove()
    } else if (event.target != iframe && event.target.parentNode != iframe) {
        iframe.classList.remove('sininho-mostrar') }
    })

// [LISTENER] Remove o iframe se desativado
window.addEventListener('message', (event) => {

    if (event.data.iniciar) {
    iframe.classList.remove('sininho-mostrar')
    }
    
    }, false)

// Fim do ELSE inicial (Se é desktop ou não)
}

window.addEventListener("beforeunload", function (e) {
    return true
})