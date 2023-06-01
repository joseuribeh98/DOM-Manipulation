const baseUrl = 'https://platzi-avo.vercel.app'
const apiUrl = `${baseUrl}/api/avo`
const appNode = document.querySelector('#app')

appNode.className = 'mt-10  grid grid-cols-2 gap-2'

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)
    return newPrice
}

window
    .fetch(apiUrl)
    .then(response => response.json())
    .then(responseJSON => {
        const allItems = []
        responseJSON.data.forEach((item) => {
            const img = document.createElement('img')
            img.src = `${baseUrl}${item.image}`
            img.className = 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr.6'
            
            const title = document.createElement('h2')
            title.textContent = item.name
            title.className = 'text-lg'
            
            const price = document.createElement('div')
            price.textContent = formatPrice(item.price)
            price.className = 'text-gray-600'

            const priceAndTitle = document.createElement('div')
            priceAndTitle.className = "text-center md:text-left"
            priceAndTitle.append (title, price)
            
            const card = document.createElement('div')
            card.className = 'md: flex bg-white rounded-lg p-6 hover:bg-gray-300 space-x-2'
            card. append(img, priceAndTitle)

            const container = document.createElement('div')
            container.append(card)

            allItems.push(container)
        })
        appNode.append(...allItems)
    })