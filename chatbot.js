const lactanciaFAQ = {
  "Las mujeres con senos pequeños producen menos leche que las de senos grandes.": "❌ Falso. El tamaño del pecho no influye en la cantidad de leche producida.",
  "Muchas madres no producen suficiente leche para alimentar bien a su bebé.": "🔍 En la mayoría de los casos, las madres sí producen suficiente leche. La percepción de insuficiencia suele estar basada en mitos.",
  "La lactancia materna es un proceso completamente natural que no requiere aprendizaje ni apoyo.": "❌ Falso. Aunque es natural, muchas madres necesitan apoyo y orientación para lograr una lactancia exitosa.",
  "Para producir leche materna de buena calidad, la madre debe tomar mucha leche o consumir alimentos específicos.": "❌ No hay alimentos mágicos. Una dieta equilibrada es suficiente para producir leche de calidad.",
  "Comer ciertos alimentos como limón o aguacate puede “cortar la leche”.": "❌ No hay evidencia científica que respalde esto. Son mitos culturales.",
  "Es normal que la lactancia siempre duela al principio.": "⚠️ No debería doler. El dolor persistente puede indicar un mal agarre o posición.",
  "La madre debe lavar los pezones antes de cada toma para evitar infecciones.": "🧼 No es necesario lavar antes de cada toma. Basta con una higiene diaria normal.",
  "Amamantar deforma los senos.": "❌ Falso. Los cambios en los senos se deben más al embarazo que a la lactancia.",
  "Si la madre está enferma o tiene gripe, no debe dar pecho a su bebé.": "✅ En la mayoría de los casos, puede seguir amamantando. La leche contiene anticuerpos que protegen al bebé.",
  "Si una madre toma medicamentos, siempre debe suspender la lactancia.": "❌ Depende del medicamento. Consulta con un profesional antes de suspender.",
  "La leche materna puede ser “aguada” o de mala calidad.": "❌ Falso. La leche materna cambia su composición según las necesidades del bebé.",
  "El calostro (la primera leche) es “sucio” o malo para el bebé.": "❌ Falso. El calostro es oro líquido: rico en anticuerpos y nutrientes.",
  "Después de los seis meses, la leche materna ya no tiene beneficios para el bebé.": "❌ Falso. La leche materna sigue siendo beneficiosa hasta los dos años o más.",
  "El bebé debe mamar cada tres horas exactas.": "⏱ No necesariamente. La lactancia a libre demanda es lo más recomendado.",
  "En cada toma, el bebé siempre debe alimentarse de ambos senos.": "🍼 No es obligatorio. Lo importante es que vacíe bien un seno antes de ofrecer el otro.",
  "Los bebés necesitan agua, té o jugo además de la leche materna durante los primeros seis meses.": "❌ Falso. La leche materna cubre todas las necesidades de hidratación.",
  "Si se ofrece fórmula al bebé, ya no se puede seguir amamantando.": "❌ Falso. Se puede combinar lactancia materna con fórmula si es necesario.",
  "El dolor persistente durante la lactancia es una señal de un mal agarre o posición incorrecta.": "✅ Correcto. Es importante revisar la técnica de amamantamiento.",
  "El tamaño del pecho no influye en la cantidad de leche producida.": "✅ Correcto. La capacidad de producción depende de la glándula mamaria, no del tamaño.",
  "La leche materna cambia su composición y color según las necesidades del bebé.": "✅ Así es. Se adapta a la edad y salud del bebé.",
  "Amamantar protege a la madre contra el cáncer de mama.": "✅ Correcto. La lactancia reduce el riesgo de varios tipos de cáncer.",
  "La leche del inicio de la toma es más ligera y sirve principalmente para hidratar al bebé.": "✅ Exacto. Luego viene la leche más rica en grasa.",
  "El bebé necesita vaciar completamente un seno antes de pasar al otro.": "✅ Sí. Así recibe todos los nutrientes de la toma.",
  "La leche materna sigue siendo beneficiosa hasta los dos años o más.": "✅ Correcto. La OMS recomienda lactancia hasta los 2 años o más.",
  "Los mitos y creencias culturales pueden afectar la confianza de las madres para amamantar.": "✅ Absolutamente. Es clave brindar información basada en evidencia.",
  "Si la madre está nerviosa o estresada, su leche “se seca” o “se daña”.": "⚠️ El estrés puede afectar la producción, pero no daña la leche. El apoyo emocional es fundamental."
};

document.getElementById("chatToggle").onclick = () => {
  document.getElementById("chatWindow").classList.toggle("hidden");
};

document.getElementById("userInput").onchange = (e) => {
  const question = e.target.value.trim();
  const response = lactanciaFAQ[question] || "🤔 No tengo una respuesta para eso aún. Intenta con otra pregunta.";
  document.getElementById("chatResponse").innerText = response;
  e.target.value = "";
};