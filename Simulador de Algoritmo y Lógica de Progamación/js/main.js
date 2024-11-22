function checkAnswer(exerciseNumber) {
  const form = document.getElementById('quiz-form');
  const selectedOption = form.answer.value;
  const resultMessage = document.getElementById('result-message');
  
  if (!selectedOption) {
    resultMessage.textContent = "Por favor, selecciona una respuesta.";
    resultMessage.style.color = "orange";
    return;
  }

  const correctAnswers = {
    1: "d", 
    2: "d",  
    3: "b",
    4: "c",
    5: "c",
    6: "b",
    7: "a",
    8: "a",
    9: "c",
    10: "a",
    11: "c",
    12: "a",
    13: "a",
    14: "c",
    15: "d",
    16: "c",
    17: "a",
    18: "b",
    19: "a",
    20: "a",
    21: "c",
    22: "b",
    23: "a",
    24: "d",
    25: "c",
    26: "c",
    27: "d",
    28: "c",
    29: "b",
    30: "a",
    31: "a",
    32: "a",
    33: "c",
    34: "d",
    35: "a",
    36: "b",
    37: "b",
    38: "a",
    39: "b",
    40: "a",
    41: "a",
    42: "d",
    43: "a",
  };

  if (selectedOption === correctAnswers[exerciseNumber]) {
    resultMessage.textContent = "¡Correcto!";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "Respuesta incorrecta. Intenta nuevamente.";
    resultMessage.style.color = "red";
  }
}

  
    