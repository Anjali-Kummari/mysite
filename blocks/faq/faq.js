export default function decorate(block) {
  const items = Array.from(block.children);

  items.forEach((item) => {
    const question = item.children[0];
    const answer = item.children[1];

    answer.style.display = 'none';

    const originalText = question.textContent;

    question.style.cursor = 'pointer';
    question.style.fontWeight = 'bold';
    question.textContent = `➕ ${originalText}`;

    question.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';

      items.forEach((entry) => {
        const q = entry.children[0];
        const a = entry.children[1];

        a.style.display = 'none';

        const cleanText = q.textContent
          .replace('➕ ', '')
          .replace('➖ ', '');

        q.textContent = `➕ ${cleanText}`;
      });

      if (!isOpen) {
        answer.style.display = 'block';
        question.textContent = `➖ ${originalText}`;
      }
    });
  });
}
