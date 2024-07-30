export default function card(md) {
  md.core.ruler.push('card', function (state) {
    const tokens = state.tokens;
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type === 'fence' && tokens[i].info.trim() === 'card') {
        const token = tokens[i];
        const lines = token.content.split('\n');
        token.type = 'card';
        token.tag = '';
        token.nesting = 0;
        token.children = [];
        token.title = lines[0];
        token.content = lines.slice(1).join('\n');
      }
    }
  });

  md.renderer.rules.card = (tokens, idx) => {
    const token = tokens[idx];
    return `<article class="card">
      <h4 class="card-title">${token.title}</h4>
      <p class="card-content">${token.content}</p>
    </article>`
  };
}