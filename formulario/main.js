const preguntas = [
  {
    contexto: "El tamaño de los senos no determina la capacidad de producción de leche.",
    texto: "Las mujeres con senos pequeños producen menos leche que las de senos grandes."
  },
  {
    contexto: "La mayoría de las madres pueden producir suficiente leche si reciben apoyo adecuado.",
    texto: "Muchas madres no producen suficiente leche para alimentar bien a su bebé."
  },
  {
    contexto: "Aunque es natural, la lactancia requiere aprendizaje, práctica y apoyo.",
    texto: "La lactancia materna es un proceso completamente natural que no requiere aprendizaje ni apoyo."
  },
  {
    contexto: "La calidad de la leche materna no depende de consumir leche o alimentos específicos.",
    texto: "Para producir leche materna de buena calidad, la madre debe tomar mucha leche o consumir alimentos específicos."
  },
  {
    contexto: "No hay evidencia científica que respalde que ciertos alimentos corten la leche.",
    texto: "Comer ciertos alimentos como limón o aguacate puede “cortar la leche”."
  },
  {
    contexto: "El dolor no es normal en la lactancia; puede indicar un problema de agarre.",
    texto: "Es normal que la lactancia siempre duela al principio."
  },
  {
    contexto: "No es necesario lavar los pezones antes de cada toma; puede irritar la piel.",
    texto: "La madre debe lavar los pezones antes de cada toma para evitar infecciones."
  },
  {
    contexto: "La forma de los senos cambia por factores hormonales y genéticos, no por amamantar.",
    texto: "Amamantar deforma los senos."
  },
  {
    contexto: "La lactancia puede continuar incluso si la madre tiene gripe, con precauciones.",
    texto: "Si la madre está enferma o tiene gripe, no debe dar pecho a su bebé."
  },
  {
    contexto: "No todos los medicamentos requieren suspender la lactancia; muchos son compatibles.",
    texto: "Si una madre toma medicamentos, siempre debe suspender la lactancia."
  },
  {
    contexto: "La leche materna puede parecer aguada, pero está perfectamente diseñada para el bebé.",
    texto: "La leche materna puede ser “aguada” o de mala calidad."
  },
  {
    contexto: "El calostro es altamente nutritivo y esencial para el recién nacido.",
    texto: "El calostro (la primera leche) es “sucio” o malo para el bebé."
  },
  {
    contexto: "La leche materna sigue teniendo beneficios después de los seis meses.",
    texto: "Después de los seis meses, la leche materna ya no tiene beneficios para el bebé."
  },
  {
    contexto: "Los bebés deben mamar a demanda, no con horarios estrictos.",
    texto: "El bebé debe mamar cada tres horas exactas."
  },
  {
    contexto: "No siempre es necesario ofrecer ambos senos en cada toma.",
    texto: "En cada toma, el bebé siempre debe alimentarse de ambos senos."
  },
  {
    contexto: "Durante los primeros seis meses, la leche materna cubre todas las necesidades del bebé.",
    texto: "Los bebés necesitan agua, té o jugo además de la leche materna durante los primeros seis meses."
  },
  {
    contexto: "La lactancia puede continuar aunque se haya ofrecido fórmula.",
    texto: "Si se ofrece fórmula al bebé, ya no se puede seguir amamantando."
  },
  {
    contexto: "El dolor persistente suele indicar un mal agarre o posición incorrecta.",
    texto: "El dolor persistente durante la lactancia es una señal de un mal agarre o posición incorrecta."
  },
  {
    contexto: "El tamaño del pecho no influye en la cantidad de leche producida.",
    texto: "El tamaño del pecho no influye en la cantidad de leche producida."
  },
  {
    contexto: "La leche materna se adapta a las necesidades del bebé en cada etapa.",
    texto: "La leche materna cambia su composición y color según las necesidades del bebé."
  },
  {
    contexto: "Amamantar reduce el riesgo de cáncer de mama en la madre.",
    texto: "Amamantar protege a la madre contra el cáncer de mama."
  },
  {
    contexto: "La leche del inicio hidrata, y la del final nutre más.",
    texto: "La leche del inicio de la toma es más ligera y sirve principalmente para hidratar al bebé."
  },
  {
    contexto: "Es importante que el bebé vacíe un seno antes de pasar al otro.",
    texto: "El bebé necesita vaciar completamente un seno antes de pasar al otro."
  },
  {
    contexto: "La leche materna sigue siendo beneficiosa hasta los dos años o más.",
    texto: "La leche materna sigue siendo beneficiosa hasta los dos años o más."
  },
  {
    contexto: "Los mitos y creencias pueden afectar la confianza de las madres.",
    texto: "Los mitos y creencias culturales pueden afectar la confianza de las madres para amamantar."
  },
  {
    contexto: "El estrés puede afectar la producción, pero no daña la leche.",
    texto: "Si la madre está nerviosa o estresada, su leche “se seca” o “se daña”."
  }
];

const respuestasCorrectas = [
  "Falso", "Falso", "Falso", "Falso", "Falso", "Falso", "Falso", "Falso", "Falso", "Falso",
  "Falso", "Falso", "Falso", "Falso", "Falso", "Falso", "Falso", "Verdadero", "Verdadero", "Verdadero",
  "Verdadero", "Verdadero", "Verdadero", "Verdadero", "Verdadero", "Falso"
];

const opciones = ["Verdadero", "Falso", "No estoy segura", "Nunca lo había escuchado"];
const contenedor = document.getElementById("preguntasAccordion");

preguntas.forEach((pregunta, index) => {
  const item = document.createElement("div");
  item.className = "accordion-item mb-3";
  item.innerHTML = `
    <h2 class="accordion-header" id="heading${index}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
        ${index + 1}. ${pregunta.texto}
      </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#preguntasAccordion">
      <div class="accordion-body">
        <p class="text-muted fst-italic mb-2">${pregunta.contexto}</p>
        ${opciones.map((opcion, i) => `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="pregunta${index}" id="pregunta${index}_op${i}" value="${opcion}" required>
            <label class="form-check-label" for="pregunta${index}_op${i}">${opcion}</label>
          </div>
        `).join("")}
      </div>
    </div>
  `;
  contenedor.appendChild(item);
});

function mostrarFeedback() {
  preguntas.forEach((_, index) => {
    const seleccion = document.querySelector(`input[name="pregunta${index}"]:checked`);
    const contenedor = document.querySelector(`#collapse${index} .accordion-body`);
    const mensajePrevio = contenedor.querySelector(".feedback");
    if (mensajePrevio) mensajePrevio.remove();

    if (seleccion) {
      const esCorrecta = seleccion.value === respuestasCorrectas[index];
      const mensaje = document.createElement("div");
      mensaje.className = `feedback mt-2 p-2 rounded ${esCorrecta ? "bg-success text-white" : "bg-danger text-white"}`;
      mensaje.innerText = esCorrecta
        ? `✅ ¡Correcto! Esta afirmación es ${seleccion.value.toLowerCase()}.`
        : `❌ Incorrecto. La respuesta correcta es: ${respuestasCorrectas[index]}.`;
      contenedor.appendChild(mensaje);
    }
  });
}

document.getElementById("lactanciaForm").addEventListener("submit", function(e) {
  e.preventDefault();
  mostrarFeedback();
  window.scrollTo({ top: 0, behavior: "smooth" });
});