AFRAME.registerComponent('playsound2', {
  
    init: function () {
      
      let audiosource = document.querySelector('#start3');
      

      let musicplay = () => {
      audiosource.components.sound.playSound()
      }
      
      this.el.addEventListener('click', musicplay);

    }});