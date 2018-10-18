const aboutMe = () => {
  document.getElementById('portada').style.display = 'none';
  document.getElementById('aboutMe').style.display = 'block';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

const projects = () => {
  document.getElementById('portada').style.display = 'none';
  document.getElementById('projects').style.display = 'block';
  document.getElementById('aboutMe').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

const home = () => {
  document.getElementById('portada').style.display = 'block';
  document.getElementById('portada').className = 'animated fadeIn slow';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('aboutMe').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  //document.getElementById('particles-js').classList.remove('');
}

const contact = () => {
  document.getElementById('portada').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('aboutMe').style.display = 'none';
}