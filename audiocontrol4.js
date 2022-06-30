AFRAME.registerComponent('playsound3', {
  
    init: function () {
      
      let audiosource = document.querySelector('#start4');
      

      let musicplay = () => {
      audiosource.components.sound.playSound()
      }
      
      this.el.addEventListener('click', musicplay);

    }});