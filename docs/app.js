const aboutMe = () => {
  document.getElementById('particles-js').style.display = 'none';
  document.getElementById('aboutMe').style.display = 'block';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

const projects = () => {
  document.getElementById('particles-js').style.display = 'none';
  document.getElementById('projects').style.display = 'block';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('aboutMe').style.display = 'none';
}

const contact = () => {
  document.getElementById('particles-js').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('aboutMe').style.display = 'none';
}

const home = () => {
  document.getElementById('particles-js').className = 'animated fadeInUp';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('aboutMe').style.display = 'none';
  //document.getElementById('particles-js').classList.remove('');
  
  document.getElementById('particles-js').style.display = 'block';
}