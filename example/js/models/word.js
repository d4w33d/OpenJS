
$o.req(['vendor:jquery'], function($) {
    var Word = function() {
        this.word = null;
        this.definition = null;
        this.source = null;
    };

    Word.prototype.setWord = function(word) {
        this.word = word;
    };

    Word.prototype.setDefinition = function(definition) {
        this.definition = definition;
    };

    Word.prototype.setSource = function(source) {
        this.source = source;
    };

    Word.prototype.getExplaination = function() {
        return this.word + ' means "' + this.definition + '" - Source: ' + this.source;
    };

    return Word;
});
