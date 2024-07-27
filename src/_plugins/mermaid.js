export default function mermaid(md) {
  // Ajouter une règle personnalisée après que toutes les règles de base ont été enregistrées
  md.core.ruler.push('mermaid', function (state) {
    const tokens = state.tokens;
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type === 'fence' && tokens[i].info.trim() === 'mermaid') {
        const token = tokens[i];
        token.type = 'mermaid';
        token.tag = '';
        token.nesting = 0;
        token.children = [];
        token.content = `<div class="mermaid">${token.content}</div>`;
      }
    }
  });

  // Modifier le rendu des blocs de code mermaid
  md.renderer.rules.mermaid = (tokens, idx) => {
    return tokens[idx].content;

  };
}