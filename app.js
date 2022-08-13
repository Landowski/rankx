// BEM-VINDO
const greetingMessage = () => {
  let h = new Date().getHours()
  if (h <= 5) return 'Boa madrugada'
  if (h < 12) return 'Bom dia'
  if (h < 18) return 'Boa tarde'
  return 'Boa noite'
}

// DATA
const date = document.querySelector('.date')
let now = new Date()
date.innerText = dateBuilder(now)
const ola = document.querySelector('.ola')
ola.innerText = `${greetingMessage()}, Marcelo.`

// DECLARAÇÃO OPEN WEATHER MAP API
const api = {
  key: "a533eaf28a8e4d6c9ddd1a086e89ca42",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt_br",
  units: "metric"
}

// DECLARAÇÕES LAT/LONG SAP, CWB E SP
const latSAP = "-23.29425"
const longSAP = "-50.07659"
const latCWB = "-25.43864"
const longCWB = "-49.27539"
const latSP = "-23.5489"
const longSP = "-46.6388"

// DECLARAÇÕES SELETORES DE CIDADE, ÍCONE, TEMPERATURA E TEMPO
const citySAP = document.querySelector('.cidade')
const container_imgSAP = document.querySelector('.icone')
const temp_numberSAP = document.querySelector('.temperatura')
const weather_tSAP = document.querySelector('.tempo')

const cityCWB = document.querySelector('.cidade-cwb')
const container_imgCWB = document.querySelector('.icone-cwb')
const temp_numberCWB = document.querySelector('.temperatura-cwb')
const weather_tCWB = document.querySelector('.tempo-cwb')

const citySP = document.querySelector('.cidade-sp')
const container_imgSP = document.querySelector('.icone-sp')
const temp_numberSP = document.querySelector('.temperatura-sp')
const weather_tSP = document.querySelector('.tempo-sp')

// FETCH TODAS AS CIDADES
fetch(`${api.base}weather?lat=${latSAP}&lon=${longSAP}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
.then(response => {
    if (!response.ok) {
        throw new Error(`http error: status ${response.status}`)
    }
    return response.json();
})
.catch(error => {
    alert(error.message)
})
.then(response => {
    displayResultsSAP(response)
})

fetch(`${api.base}weather?lat=${latCWB}&lon=${longCWB}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
.then(response => {
    if (!response.ok) {
        throw new Error(`http error: status ${response.status}`)
    }
    return response.json();
})
.catch(error => {
    alert(error.message)
})
.then(response => {
    displayResultsCWB(response)
})

fetch(`${api.base}weather?lat=${latSP}&lon=${longSP}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
.then(response => {
    if (!response.ok) {
        throw new Error(`http error: status ${response.status}`)
    }
    return response.json();
})
.catch(error => {
    alert(error.message)
})
.then(response => {
    displayResultsSP(response)
})

// FUNCTIONS
function displayResultsSAP(weather) {

  citySAP.innerText = weather.name

  let iconName = weather.weather[0].icon
  container_imgSAP.src = `assets/icons/${iconName}.png`

  temp_numberSAP.innerHTML = Math.round(weather.main.temp) + '°'

  weather_tempo = weather.weather[0].description
  weather_tSAP.innerText = weather_tempo.charAt(0).toUpperCase() + weather_tempo.slice(1)
}

function displayResultsCWB(weather) {

  cityCWB.innerText = weather.name

  let iconName = weather.weather[0].icon
  container_imgCWB.src = `assets/icons/${iconName}.png`

  temp_numberCWB.innerHTML = Math.round(weather.main.temp) + '°'

  weather_tempo = weather.weather[0].description
  weather_tCWB.innerText = weather_tempo.charAt(0).toUpperCase() + weather_tempo.slice(1)
}

function displayResultsSP(weather) {

  citySP.innerText = weather.name

  let iconName = weather.weather[0].icon
  container_imgSP.src = `assets/icons/${iconName}.png`

  temp_numberSP.innerHTML = Math.round(weather.main.temp) + '°'

  weather_tempo = weather.weather[0].description
  weather_tSP.innerText = weather_tempo.charAt(0).toUpperCase() + weather_tempo.slice(1)
}

// CRIA DATA E HORA DE HOJE
function dateBuilder(d) {
  let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  let day = days[d.getDay()]
  let date = d.getDate()
  let month = months[d.getMonth()]
  let year = d.getFullYear()

  return `${day}, ${date} de ${month} de ${year}`
}

// FETCH NEWS
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://veja.abril.com.br/ultimas-noticias/feed/')}`)
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {
            const items = data.querySelectorAll("item")
            let html = ``
            html += `<div class="feeds">`
            items.forEach(el => {
                html += `
            <a href="${el.querySelector("link").innerHTML}" target="_blank">${el.querySelector("title").innerHTML}
            </a>
      `
            })
            html += `</div>`
            document.getElementById('content').insertAdjacentHTML("beforeend", html)
            console.log(data)
        })


const parser = new DOMParser()
const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
console.log(doc3.body.firstChild.textContent)

/*
.then(response => {
	if (response.ok) return response.json()
	throw new Error('Network response was not ok.')
})
.then(data => console.log(data.contents))

const items = data.querySelectorAll("item")
let html = ``
items.forEach(el => {
  html += `
    <article>
    <a href="${el.querySelector("link").innerHTML}" target="_blank">
    ${el.querySelector("title").innerHTML}
    </a>
    <br>
    ${el.querySelector("description").innerHTML}
    </article>
    `
    })
    document.body.insertAdjacentHTML("beforeend", html)
  */

// PEGA OS VALORES DAS MOEDAS
const urlDolar = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
const urlBitcoin = 'https://economia.awesomeapi.com.br/json/last/BTC-USD'
const USD = document.querySelector('.dolar')
const BTC = document.querySelector('.bitcoin')

fetch(urlDolar)
.then(response => {
    if (!response.ok) {
        throw new Error(`http error: status ${response.status}`)
    }
    return response.json();
})
.catch(error => {
    alert(error.message)
})
.then(response => {
    displayResultsUSD(response)
})

fetch(urlBitcoin)
.then(response => {
    if (!response.ok) {
        throw new Error(`http error: status ${response.status}`)
    }
    return response.json();
})
.catch(error => {
    alert(error.message)
})
.then(response => {
    displayResultsBTC(response)
})

function displayResultsUSD(dolar) {
  let usdFormat = Number(dolar.USDBRL.ask)
  USD.innerText = `Dólar: R$ ${usdFormat.toFixed(2)}`
}

function displayResultsBTC(bitcoin) {
  let btcFormat = Number(bitcoin.BTCUSD.ask)
  BTC.innerText = `Bitcoin: US$ ${btcFormat}`
}