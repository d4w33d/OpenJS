
(function(_) {

    _.map = function(items, closure, keepKeys)
    {
        if (typeof keepKeys == 'undefined')
        {
            keepKeys = false;
        }
        var mapped = items instanceof Array || !keepKeys ? [] : {};
        _.each(items, function(value, key)
        {
            value = closure.call(_, value, key);
            if (keepKeys)
            {
                mapped[key] = value;
                return;
            }
            mapped.push(value);
        });
        return mapped;
    };

}(openjs));
