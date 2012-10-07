
$o.req(['vendor:jquery', 'models/word'], function($, Word) {
    var mod = {};

    mod.run = function() {
        console.log('Welcome in this OpenJS example!');

        var w = new Word();
        w.setWord('Mûmakil');
        w.setDefinition('Animals from Harad resembling elephants');
        w.setSource('Wikipedia');
        console.log(w.getExplaination());
    };

    return mod;
});
