window.addEventListener("load",()=>{setTimeout(()=>document.getElementById("loader").classList.add("hide"),500)});
function sendBudget(){const service=document.getElementById("service").value;const name=document.getElementById("clientName").value.trim();const phone=document.getElementById("clientPhone").value.trim();const note=document.getElementById("clientNote").value.trim();let message="Olá, Engenheiro Christian! Vim pelo portal digital da Renderização e gostaria de solicitar um orçamento.";message+="%0A%0AServiço de interesse: "+encodeURIComponent(service);if(name){message+="%0ANome/empresa: "+encodeURIComponent(name)}if(phone){message+="%0ATelefone: "+encodeURIComponent(phone)}if(note){message+="%0ADescrição: "+encodeURIComponent(note)}window.open("https://wa.me/5542999060610?text="+message,"_blank")}
function selectService(service){document.getElementById("service").value=service;document.getElementById("orcamento").scrollIntoView({behavior:"smooth"});}
function filterServices(){const input=document.getElementById("serviceSearch").value.toLowerCase();document.querySelectorAll("#serviceList button").forEach(btn=>{btn.style.display=btn.textContent.toLowerCase().includes(input)?"block":"none"})}
function sharePortal(){const data={title:"Renderização Serviços de Engenharia",text:"Portal digital da Renderização Serviços de Engenharia",url:window.location.href};if(navigator.share){navigator.share(data)}else{navigator.clipboard.writeText(window.location.href);alert("Link copiado!")}}
function openModal(title){document.getElementById("modalTitle").textContent=title;document.getElementById("modal").classList.add("show")}
function closeModal(){document.getElementById("modal").classList.remove("show")}
const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible")}})},{threshold:.12});
document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));document.querySelectorAll("[data-count]").forEach(el=>{let target=parseInt(el.dataset.count);let current=0;let step=Math.max(1,Math.floor(target/45));let timer=setInterval(()=>{current+=step;if(current>=target){current=target;clearInterval(timer)}el.textContent=current+"+"},30)});let index=0;setInterval(()=>{const items=document.querySelectorAll(".testimonial");if(items.length){items[index].classList.remove("active");index=(index+1)%items.length;items[index].classList.add("active")}},3500)});


const serviceGalleries = {
  pavimentacao: {
    title: "Pavimentação e infraestrutura",
    desc: "Fotos de obras, execução, materiais, acompanhamento e controle técnico.",
    folder: "img/servicos/pavimentacao/",
    photos: ["foto01.jpg","foto02.jpg","foto03.jpg","foto04.jpg","foto05.jpg","foto06.jpg"]
  },
  pericias: {
    title: "Perícias e assistência técnica",
    desc: "Fotos e registros técnicos relacionados a perícias, avaliações e apoio técnico.",
    folder: "img/servicos/pericias/",
    photos: ["foto01.jpg","foto02.jpg","foto03.jpg","foto04.jpg","foto05.jpg","foto06.jpg"]
  },
  vistorias: {
    title: "Vistorias e inspeções",
    desc: "Fotos de vistorias, inspeções, patologias construtivas e registros técnicos.",
    folder: "img/servicos/vistorias/",
    photos: ["foto01.jpg","foto02.jpg","foto03.jpg","foto04.jpg","foto05.jpg","foto06.jpg"]
  },
  controle: {
    title: "Controle tecnológico",
    desc: "Fotos de ensaios, coletas, verificações em campo e apoio técnico para obras.",
    folder: "img/servicos/controle-tecnologico/",
    photos: ["foto01.jpg","foto02.jpg","foto03.jpg","foto04.jpg","foto05.jpg","foto06.jpg"]
  }
};

function openGallery(type){
  const gallery = serviceGalleries[type];
  if(!gallery) return;

  document.getElementById("galleryTitle").textContent = gallery.title;
  document.getElementById("galleryDesc").textContent = gallery.desc;

  const container = document.getElementById("galleryPhotos");
  container.innerHTML = "";

  gallery.photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = gallery.folder + photo;
    img.alt = gallery.title;
    img.onclick = () => openImageViewer(img.src);
    container.appendChild(img);
  });

  document.getElementById("galleryModal").classList.add("show");
}

function closeGallery(){
  document.getElementById("galleryModal").classList.remove("show");
}

function openImageViewer(src){
  document.getElementById("viewerImage").src = src;
  document.getElementById("imageViewer").classList.add("show");
}

function closeImageViewer(){
  document.getElementById("imageViewer").classList.remove("show");
}
