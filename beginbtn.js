AFRAME.registerComponent('playsound1', {
  
    init: function () {
      
      let audiosource = document.querySelector('#start1');
      

      let musicplay = () => {
      start1.setAttribute("visible", false);
      audiosource.components.sound.playSound()
      }
      
      this.el.addEventListener('click', musicplay,);

    }});
