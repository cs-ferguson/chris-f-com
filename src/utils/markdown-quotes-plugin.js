const Token = require("markdown-it/lib/token");

module.exports = function quotesPlugin(md, options) {
  // renderer for quotations
  md.renderer.rules.quotation_content = function (
    tokens,
    idx,
    options,
    env,
    self
  ) {
    let content = tokens[idx].content;
    //replace exclamation for pullquotes
    let replacePullquoteRE = /^!\s/gm;
    content = content.replace(replacePullquoteRE, "");
    //remove citation
    let replaceCitationRE = /---\s.*$/gm;
    content = content.replace(replaceCitationRE, "");

    return `${content}`;
  };

  // render for citations
  md.renderer.rules.citation = (tokens, idx /*, options, env */) => {
    let token = tokens[idx];
    return `<cite>${token.content}</cite>`;
  };

  /*
  CITATION STUFF
  */
  // check and modify tokens for citation - creating new citation token type
  function createRule(md, options) {
    return function tokenizeQuotation(state) {
      /*
      Needs to setup tokens for all quote functions:
      Pull quotes:
      - Add pullquote class to blockquote_open
      - Change token type of inline to quotation_content so it can be rendered to:
        - Remove exclamation mark 
        - Remove citation text
      - Check for citations
      - Insert Citation Token
      */

      let pullquoteCheckRE = /!\s(.*\r?)/gm;
      let citationCheckRE = /---\s(.*)$/gm;

      let blockquoteIsOpen = false;
      let lastBlockquoteIndex = null;

      state.tokens.forEach((token, index) => {
        //if type is blockquote_open
        if (token.type == "blockquote_open") {
          blockquoteIsOpen = true;
          lastBlockquoteIndex = index;
        }
        if (token.type == "blockquote_close") {
          blockquoteIsOpen = false;
        }
        //if blockquote is open, check content of inline tokens for exclamation
        if (blockquoteIsOpen && token.type == "inline") {
          // change type to target for render
          token.type = "quotation_content";
          // check for pullquote content
          let tokenMatch = [...token.content.matchAll(pullquoteCheckRE)];
          if (tokenMatch.length > 0) {
            console.log(state.tokens[lastBlockquoteIndex].attrPush);
            state.tokens[lastBlockquoteIndex].attrSet("class", "pullquote");
          }
          //check for citation
          let citationMatch = [...token.content.matchAll(citationCheckRE)];
          if (citationMatch.length > 0) {
            let citationToken = new Token("citation", "", 1);
            citationToken.content = ` - ${citationMatch[0][1]}`;
            state.tokens.splice(index + 2, 0, citationToken); // << this needs to be changed for insert before blockquote close tag!!!!
          }
        }
      });
    };
  }

  md.core.ruler.push("quotation", createRule(md, {}));
};
