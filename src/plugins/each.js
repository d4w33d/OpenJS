
(function(_) {

    _.each = function(items, closure)
    {
        if (items instanceof Array)
        {
            var i, len = items.length;
            for (i = 0; i < len; i++)
            {
                closure.call(_, items[i], i);
            }
            return _;
        }
        var n;
        for (n in items)
        {
            closure.call(_, items[n], n);
        }
        return _;
    };

}(openjs));
