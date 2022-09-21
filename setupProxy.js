const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter", {
            target: "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter",
            changeOrigin: true
        })
    )
}