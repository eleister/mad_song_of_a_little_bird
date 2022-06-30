AFRAME.registerComponent('playsound1', {
  
    init: function () {
      
      let audiosource = document.querySelector('#start1');
      

      let musicplay = () => {
      audiosource.components.sound.playSound()
      }
      
      this.el.addEventListener('click', musicplay);

    }});