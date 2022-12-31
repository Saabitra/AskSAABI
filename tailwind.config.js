module.exports = {
    _content: [
        './client/public/*.{html,js}',
        './server/*.{html,js}',
        '../../node_modules/flowbite/**/*.js'
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
    },
    get content() {
        return this._content;
    },
    set content(value) {
        this._content = value;
    },
    // ...
  }