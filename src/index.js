const baseUrl = 'https://platzi-avo.vercel.app'
const apiUrl = `${baseUrl}/api/avo`
const appNode = document.querySelector('#app')

window
    .fetch(apiUrl)
    .then(response => response.json())
    .then(responseJSON => {
        const allItems = []
        responseJSON.data.forEach((item) => {
            const img = document.createElement('img')
            img.src = `${baseUrl}${item.image}`
            const title = document.createElement('h2')
            title.textContent = item.name
            const price = document.createElement('div')
            price.textContent = item.price
            const container = document.createElement('div')
            container.append(img, title, price)

            allItems.push(container)
        })
        appNode.append(...allItems)
    })