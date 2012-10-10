
(function(_) {

    _.empty = function(obj)
    {
        var n;
        for (n in obj)
        {
            return false;
        }
        return true;
    };

}(openjs));
