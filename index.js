function show(questionNumber) {
    const answerParagraph = document.querySelectorAll('.question .p')[questionNumber - 1];

    if (answerParagraph.style.display === 'none') {
      answerParagraph.style.display = 'block';
    } else {
      answerParagraph.style.display = 'none';
    }
  }

