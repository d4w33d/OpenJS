
(function(_) {

    var opts = {};

    opts.plugins_dir = '';
    opts.special_dirs = {};

    var mods = {};
    var current = null;

    _.req = function(modules, closure, fullPath)
    {
        if (modules instanceof Function)
        {
            fullPath = closure;
            closure = modules;
            modules = [];
        }
        if (typeof fullPath == 'undefined')
        {
            fullPath = false;
        }
        var name = current;
        _.req.mods(modules, function(objects)
        {
            var value = true;
            if (closure instanceof Function)
            {
                value = closure.apply(_, objects);
            }
            mods[name] = value;
            if (mods[name] instanceof Object &&
                mods[name].init instanceof Function)
            {
                mods[name].init.call(mods[name]);
            }
        }, 0, fullPath);
        return _;
    };

    _.req.mods = function(modules, closure, i, fullPath)
    {
        if (typeof i == 'undefined')
        {
            i = 0;
        }
        if (typeof fullPath == 'undefined')
        {
            fullPath = false;
        }
        if (i > modules.length - 1)
        {
            var objects = [];
            _.each(modules, function(name)
            {
                objects.push(mods[name]);
            });
            closure.call(_, objects);
            return _;
        }

        var name = modules[i];

        if (typeof mods[name] != 'undefined')
        {
            _.req.mods(modules, closure, i + 1);
            return _;
        }

        var url = name + '.js';
        if (!fullPath && name.indexOf(':') > 0)
        {
            var parts = name.split(':');
            url = opts.special_dirs[parts[0]] + parts[1];
        }
        else if (!fullPath)
        {
            url = opts.plugins_dir + name;
        }
        current = name;
        _.import(url, function()
        {
            _.req.mods(modules, closure, i + 1);
        }, function()
        {
            console.error('Error loading module ' + url);
            _.req.mods(modules, closure, i + 1);
        });
        return _;
    };

    _.req.opt = function(options)
    {
        opts = _.extend(opts, options);
        return _;
    };

    _.req.current = function(name)
    {
        if (typeof name == 'undefined')
        {
            return current;
        }
        current = name;
    };

}(openjs));
