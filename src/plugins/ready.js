
(function(_) {

    _.ready = function(closure)
    {
        var check = function()
        {
            return _.dom.bytag('head', null, true) &&
                _.dom.bytag('body', null, true);
        };
        setTimeout(function()
        {
            if (check())
            {
                closure.call(_);
                return;
            }
            _.ready(closure);
        }, 50);
        return _;
    };

}(openjs));
