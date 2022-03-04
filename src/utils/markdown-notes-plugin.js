module.exports = function notesPlugin(md, options) {
  function createRule(md, options) {
    return function tokenizeNote(state) {
      let noteCheckRE = /(_Note_:\s.*)|(_Aside_:\s.*)|(_Note:_\s.*)/gm;

      let paraIsOpen = false;
      let lastParaIndex = null;

      state.tokens.forEach((token, index) => {
        //if type is blockquote_open
        if (token.type == "paragraph_open") {
          paraIsOpen = true;
          lastParaIndex = index;
        }
        if (token.type == "paragraph_close") {
          paraIsOpen = false;
        }
        //if blockquote is open, check content of inline tokens for exclamation
        if (paraIsOpen && token.type == "inline") {
          let tokenMatch = [...token.content.matchAll(noteCheckRE)];
          if (tokenMatch.length > 0) {
            state.tokens[lastParaIndex].attrSet("class", "note");
          }
        }
      });
    };
  }

  md.core.ruler.push("note", createRule(md, {}));
};
