
(function(_) {

    _.dom = {};

    _.dom.all = function(parent, closure)
    {
        var els = parent ? parent.getElementsByTagName('*') : document.all;
        if (closure instanceof Function)
        {
            _.each(els, closure);
        }
        return _;
    };

    _.dom.byid = function(id, parent)
    {
        parent = parent || document;
        return parent.getElementById('id');
    };

    _.dom.bytag = function(tagName, parent, returnsFirst)
    {
        parent = parent || document;
        if (typeof returnsFirst == 'undefined')
        {
            returnsFirst = false;
        }
        var els = parent.getElementsByTagName(tagName);
        return returnsFirst ? _.dom.first(els) : els;
    };

    _.dom.byclass = function(className, parent, tagName, returnsFirst)
    {
        var els = [];
        _.dom.all(function(el)
        {
            if (_.dom.hasclass(el, className))
            els.push(el);
        });
        return returnsFirst ? _.dom.first(els) : els;
    };

    _.dom.first = function(els)
    {
        return els.length ? els[0] : null;
    };

    _.dom.attr = function(el, name, value)
    {
        if (typeof value != 'undefined')
        {
            el.setAttribute(name, value);
            return _;
        }
        return el ? el.getAttribute(name) : null;
    };

    _.dom.data = function(el, name)
    {
        return _.dom.attr(el, 'data-' + name);
    };

    _.dom.cls = function(el)
    {
        var c = _.dom.attr(el, 'class');
        if (c === null)
        {
            return null;
        }
        var classes = [];
        _.each(str.split(' '), function(cl)
        {
            cl = _.trim(cl);
            if (!cl)
            {
                return;
            }
            classes.push(cl);
        });
        return classes;
    };

    _.dom.hasclass = function(el, className)
    {
        var cls = _.dom.classes(el);
        var i, len = cls.length;
        for (i = 0; i < len; i++)
        {
            if (className == cls[i])
            {
                return true;
            }
        }
        return false;
    };

    _.dom.create = function(tagName)
    {
        return document.createElement(tagName);
    };

    _.dom.bind = function(el, eventName, closure)
    {
        if (el.addEventListener)
        {
            el.addEventListener(eventName, closure, false);
        }
        else if (el.attachEvent)
        {
            el.attachEvent('on' + eventName, closure);
        }
    };

}(openjs));
