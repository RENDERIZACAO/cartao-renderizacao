function sendBudget(){
  const service = document.getElementById("service").value;
  const name = document.getElementById("clientName").value.trim();
  let message = "Olá, Engenheiro Christian! Vim pelo cartão digital da Renderização e gostaria de solicitar um orçamento.";
  message += "%0A%0AServiço de interesse: " + encodeURIComponent(service);
  if(name){ message += "%0ANome/empresa: " + encodeURIComponent(name); }
  window.open("https://wa.me/5542999060610?text=" + message, "_blank");
}
