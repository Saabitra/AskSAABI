module.exports = {
    _content: [
        './client/public/*.{html,js}',
        './server/*.{html,js}',
    ],
    get content() {
        return this._content;
    },
    set content(value) {
        this._content = value;
    },
    // ...
  }