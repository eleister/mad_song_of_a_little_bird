
AFRAME.registerComponent('playsound', {
  
    init: function () {
      
      let audiosource = document.querySelector('#start2');
      

      let musicplay = () => {
      audiosource.components.sound.playSound()
      }
      
      this.el.addEventListener('click', musicplay);

    }});


      