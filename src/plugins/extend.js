
(function(_) {

    _.extend = function(obj, extendWith)
    {
        _.each(extendWith, function(value, key)
        {
            obj[key] = value;
        });
        return obj;
    };

}(openjs));
