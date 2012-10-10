
(function(_) {

    _.import = function(src, success, error, fileType)
    {
        if (typeof fileType == 'undefined')
        {
            fileType = _.endswith(src, '.css') ? 'css' : 'js';
        }
        var node;
        if (fileType == 'css')
        {
            node = _.dom.create('link');
            _.dom.attr(node, 'rel', 'stylesheet');
            _.dom.attr(node, 'type', 'text/css');
            _.dom.attr(node, 'href', src);
        }
        else
        {
            node = _.dom.create('script');
            _.dom.attr(node, 'type', 'text/javascript');
            _.dom.attr(node, 'src', src);
        }
        _.log('.import: importing <' + src + '>');
        _.dom.bind(node, 'load', function()
        {
            _.log('.import: success importing <' + src + '>');
            if (success instanceof Function)
            {
                success.call(_, node, src);
            }
        });
        _.dom.bind(node, 'error', function()
        {
            _.log('.import: error importing <' + src + '>', 'error');
            if (error instanceof Function)
            {
                error.call(_, node, src);
            }
        });
        _.dom.bytag('head', null, true).appendChild(node);
        return _;
    };

}(openjs));
