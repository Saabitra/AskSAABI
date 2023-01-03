module.exports = {
    _content: [
        './client/**/*.{html,js}',
        './server/*.{html,js}',
        '../node_modules/flowbite/**/*.js'
    ],

    plugins: [
        require('flowbite/plugin')
    ],

    theme: {
        extend: {
            fontFamily: {
                heading: ['Playfair Display'],
                chat: ['Poppins'],
                body: ['Seymour One'],
            },
        },

        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          },

    },
    get content() {
        return this._content;
    },
    set content(value) {
        this._content = value;
    },
    // ...
  }