
(function(_) {

    _.trim = function(str, ch, leftOrRight)
    {
        if (typeof leftOrRight == 'undefined')
        {
            leftOrRight = 'both';
        }
        if (leftOrRight == 'left' || leftOrRight == 'both')
        {
            str = _.ltrim(str, ch);
        }
        if (leftOrRight == 'right' || leftOrRight == 'both')
        {
            str = _.rtrim(str, ch);
        }
        return str;
    };

    _.rtrim = function(str, ch)
    {
        if (typeof ch == 'undefined')
        {
            ch = ' ';
        }
        while (str && str.charAt(str.length - 1) == ch)
        {
            str = str.substr(0, str.length - 1);
        }
        return str;
    };

    _.ltrim = function(str, ch)
    {
        if (typeof ch == 'undefined')
        {
            ch = ' ';
        }
        while (str && str.charAt(0) == ch)
        {
            str = str.substr(1, str.length - 1);
        }
        return str;
    };

    _.endswith = function(str, part)
    {
        var slen = str.length, plen = part.length;
        if (slen < plen)
        {
            return false;
        }
        return str.substr(slen - plen, plen) === part;
    };

    _.startswith = function(str, part)
    {
        var slen = str.length, plen = part.length;
        if (slen < plen)
        {
            return false;
        }
        return str.substr(0, plen) === part;
    };

}(openjs));
