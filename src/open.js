
var openjs = {};

(function(_) {

    var opts = {};

    opts.verbose = false;

    var conflicted = null;

    _.init = function()
    {
        if (typeof $o != 'undefined')
        {
            conflicted = $o;
        }
        _.ready(function()
        {
            _._processScriptTags();
        });
    };

    _.opt = function(key, value)
    {
        if (key instanceof Object)
        {
            opts = _.extend(opts, key);
            return _;
        }
        if (typeof value != 'undefined')
        {
            opts[key] = value;
            return _;
        }
        return typeof opts[key] != 'undefined' ? opts[key] : null;
    };

    _._processScriptTags = function()
    {
        var els = _.dom.bytag('script');
        var i, len = els.length;
        for (i = 0; i < len; i++)
        {
            var src = _.dom.data(els[i], 'openjs');
            _.each(opts, function(value, key)
            {
                value = _.dom.data(els[i], 'openjs-' + key);
                if (value == 'yes' || value == 'no')
                {
                    _.opt(key, value == 'yes');
                    return;
                }
                _.opt(key, value);
            });
            if (src)
            {
                _.req.current('__init__');
                _.req([src], null, true);
            }
        }
    };

    _.noConflict = function()
    {
        if (conflicted === null && typeof $o != 'undefined')
        {
            delete $o;
            return;
        }
        $o = conflicted;
    };

    _.log = function(str, type, forceLogging)
    {
        if (typeof forceLogging == 'undefined')
        {
            forceLogging = false;
        }
        if ((!opts.verbose && !forceLogging) || typeof console == 'undefined')
        {
            return _;
        }
        if (typeof type == 'undefined' || type != 'warn' || type != 'error')
        {
            type = 'log';
        }
        str = '[openjs] ' + str;
        console[type](str);
        return _;
    };

}(openjs));

var $o = openjs;
