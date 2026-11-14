# COMP 4513 Assignment 2

App                         (state: view, selectedId, aboutOpen)
├─ Header                   (logo, Home | Browse | About, cart badge)
├─ <main>, one view at a time:
│  ├─ HomeView              hero + a few featured ProductCards
│  ├─ BrowseView            (state: filters, sort, page)
│  │  ├─ FilterPanel        name, category, rating, price accordions
│  │  ├─ SortBar            sort select + Clear All
│  │  ├─ ProductCard (x N)  image/title link, price, add-to-cart
│  │  └─ Pagination
│  ├─ ProductView           breadcrumb, image + modal, info, qty + add
│  │  └─ ProductTabs        specs / reviews
│  └─ CartView              (state: shipping speed, destination)
│     ├─ CartItem (x N)     with delete confirmation
│     └─ OrderSummary       merchandise, shipping, tax, total, checkout
├─ Footer
├─ AboutDialog
└─ Toaster
