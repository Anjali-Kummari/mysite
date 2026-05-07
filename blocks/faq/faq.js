export default function decorate(block) {
  const items = [...block.children];

  items.forEach((item) => {
    const question = item.children[0];
    const answer = item.children[1];

    const text = question.textContent;

    answer.style.display = 'none';

    question.style.cursor = 'pointer';
    question.style.fontWeight = 'bold';
    question.textContent = `➕ ${text}`;

    question.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';

      items.forEach((i) => {
        const q = i.children[0];
        const a = i.children[1];

        a.style.display = 'none';
        q.textContent = `➕ ${q.textContent.replace(/^➕ |^➖ /, '')}`;
      });

      if (!isOpen) {
        answer.style.display = 'block';
        question.textContent = `➖ ${text}`;
      }
    });
  });
}
