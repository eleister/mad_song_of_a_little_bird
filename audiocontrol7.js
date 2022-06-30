AFRAME.registerComponent('playsound6', {
  
    init: function () {
      
      let audiosource = document.querySelector('#start7');
      

      let musicplay = () => {
      audiosource.components.sound.playSound()
      }
      
      this.el.addEventListener('click', musicplay);

    }});