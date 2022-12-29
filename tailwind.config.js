module.exports = {
    _content: [
        './client/public/*.{html,js}',
        './server/*.{html,js}',
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