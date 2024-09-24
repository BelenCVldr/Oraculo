//alert("Hola mundo");

/*console.log("Hola consola");
document.write("Hola CH46");*/

let nombre = prompt("Ingresa tu nombre:");
let signo = prompt("Ingresa tu signo");
let infoExtra;

if (signo == "Aries") {
    infoExtra = "Los Aries son personas llenas de energía y entusiasmo por la vida. Aventureros por naturaleza, les encantan los retos, la libertad y las nuevas ideas";

} else if (signo == "Tauro") {
    infoExtra = "Un Tauro es una persona que tiene una gran fuerza de voluntad, es práctico y decidido en la toma de decisiones. Suelen ser personas estables y conservadoras";

} else if (signo == "Geminis") {
    infoExtra = "Geminis son carácter doble, complejo y contradictorio, empiezan con entusiasmo nuevas aventuras, pero tienden a aburrirse rápido por la falta de constancia.";

} else if (signo == "Cancer") {
    infoExtra = "Los Cáncer son personas complicadas de clasificar, si se atiende a su carácter. Los hay tímidos y aburridos , pero también brillantes y famosos .";

} else if (signo == "Leo") {
    infoExtra = "Es el signo más dominante del Zodiaco. Es creativo y extrovertido. Tienen ambición, fuerza, valentía y seguridad en sus capacidades. ";

} else if (signo == "Virgo") {
    infoExtra = "Los Virgo son observadores, pacientes y les cuesta hacer amigos por su carácter frío que muestran a veces.";

} else if (signo == "Libra") {
    infoExtra = "Libra tienen encanto, elegancia, buen gusto y son amables y pacíficos, por lo que no es raro que ante conflictos sean imparciales y muestren su rechazo a ellos.";

} else if (signo == "Escorpio") {
    infoExtra = "Escorpio es una persona tranquila que parece alejada de la realidad, aunque nunca dejan de observar todo a su alrededor con el ojo crítico.";

} else if (signo == "Sagitario") {
    infoExtra = "Sagitario entre sus mejores características están las de ser buenos organizadores y abarcar nuevos proyectos y aprender cosas nuevas";

} else if (signo == "Capricornio") {
    infoExtra = "Capricornio es estabilidad, seguridad y tranquilidad es lo que mejor los define . Son personas justas y exigentes con los demás.";

} else if (signo == "Acuario") {
    infoExtra = "Los Acuario tienen una personalidad fuerte y atractiva, pero hay dos tipos : los que son tímidos, sensibles y pacientes; y los que son exuberantes, vivos y frívolos.";

} else if (signo == "Piscis") {
    infoExtra = "Son tranquilos, amables y pacientes, son sensibles a los sentimientos de los demás y responden con simpatía al tacto y al sufrimiento, son queridos por el resto de los signos.";
}

let mensaje = nombre + " y tu signo es: " + signo +"\n" + infoExtra;
alert("Eres " + mensaje);