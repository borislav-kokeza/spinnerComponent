var loadingScreen = function (widget) {
    return {
        renderLoadingScreen: function () {
            widget.loadingScreen = new Element("div", {"id": "loadingScreen"}).injectInside(widget.element);
            new Element("div", {"id": "spinner"}).injectInside(widget.loadingScreen);
        },

        showLoadingScreen: function () {
            var loadingScreenEl = document.getElementById('loadingScreen');
            if (loadingScreenEl)
                widget.loadingScreen.style.display = "block";
            else
                console.warn('Make sure "loadingScreen" component is rendered');
        },

        hideLoadingScreen: function () {
            var loadingScreenEl = document.getElementById('loadingScreen');
            if (loadingScreenEl)
                widget.loadingScreen.style.display = "none";
            else
                console.warn('Make sure "loadingScreen" component is rendered');
        },
    };
};

module.exports = loadingScreen;
