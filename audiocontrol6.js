AFRAME.registerComponent('playsound5', {
  
    init: function () {
      
      let audiosource = document.querySelector('#start6');
      

      let musicplay = () => {
      audiosource.components.sound.playSound()
      }
      
      this.el.addEventListener('click', musicplay);

    }});