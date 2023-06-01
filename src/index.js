const url = 'https://platzi-avo.vercel.app/api/avo'

window
    .fetch(url)
    .then(response => response.json())
    .then(responseJSON => {
        const allItems = []
        responseJSON.data.forEach((item) => {
            const img = document.createElement('img')
            const title = document.createElement('h2')
            const price = document.createElement('div')
            
            const container = document.createElement('div')
            container.append(img, title, price)

            allItems.push(container)
        })
        document.body.append(...allItems)
    })