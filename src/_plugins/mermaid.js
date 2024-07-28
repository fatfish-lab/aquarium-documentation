export default function mermaid(md) {
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

  md.renderer.rules.mermaid = (tokens, idx) => {
    return tokens[idx].content;
  };
}

export function init(theme = 'light') {
  const config = {
    startOnLoad: true,
    theme: 'base',
    securityLevel: 'strict',
    themeVariables: {
      darkMode: theme == 'dark',
      contrast: '#707070',
      primaryColor: '#eee',
      background: '#fff',
      mainBkg: '#707070',
      lineColor: '#22b8cf',
      border1: '#22b8cf',
      critical: '#ff6b6b',
      done: '#51cf66',
      arrowheadColor: '#22b8cf',
      noteBkgColor: '#fcc419',
      fontFamily: 'var(--font-family)',
    }
  }
  mermaid.initialize(config);
  // mermaid.init(config, document.querySelectorAll('.mermaid'))
}