export default function card(md) {
  md.core.ruler.push('card', function (state) {
    const tokens = state.tokens;
    for (let i = 0; i < tokens.length; i++) {
      console.log(tokens[i].type, tokens[i].info);
      if (tokens[i].type === 'fence' && tokens[i].info.trim() === 'card') {
        const token = tokens[i];
        token.type = 'card';
        token.tag = '';
        token.nesting = 0;
        token.children = [];
        token.content = `<div class="card">${token.content}</div>`;
      }
    }
  });

  md.renderer.rules.card = (tokens, idx) => {
    return tokens[idx].content;
  };
}