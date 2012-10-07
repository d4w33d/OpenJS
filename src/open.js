
var openjs = {};

(function(_) {

    _.conflicted = null;

    _.init = function()
    {
        if (typeof $o != 'undefined')
        {
            _.conflicted = $o;
        }
        _.ready(function()
        {
            _._loadScriptBootstrap();
        });
    };

    _._loadScriptBootstrap = function()
    {
        var els = _.dom.bytag('script');
        var i, len = els.length;
        for (i = 0; i < len; i++)
        {
            var src = _.dom.data(els[i], 'bootstrap');
            if (src)
            {
                _.req.current(src);
                _.req([src], null, true);
            }
        }
    };

    _.noConflict = function()
    {
        if (_.conflicted === null && typeof $o != 'undefined')
        {
            delete $o;
            return;
        }
        $o = _.conflicted;
    };

}(openjs));

var $o = openjs;
