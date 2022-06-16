<template>
  <div id="app">
    <NavBar />
    <div class="cuerpo">
      <div class="contenido">
        <div class="jugador">  
          <p class="titulo">JUGADOR 1</p>  
          <b-img src="https://www.kindpng.com/picc/m/212-2122689_rock-paper-scissors-random-rock-paper-scissors-png.png" id="imagen" class="imagen"></b-img>
          <div class="contenedor-botones">
            <b-button-group  class="botones">     
              <b-button v-for="accion of acciones" v-bind:key="accion" @click="mostrarImagen(accion), resultadoComputadora()">{{accion.nombre}}</b-button>
            </b-button-group>
          </div>
        </div>
          <div class="computadora">  
            <p class="titulo">COMPUTADORA</p>  
            <b-img src="https://www.kindpng.com/picc/m/212-2122689_rock-paper-scissors-random-rock-paper-scissors-png.png" id="imagenCPU" class="imagen"></b-img>
          </div>          
      </div>      
      <p class="resultado" v-if="accionUsuario!==0 && accionCPU!==0" v-text="determinarGanador()" id="result"></p>

      <b-container class="tabla">
        <b-row class="titulos">
          <b-col>Victorias</b-col>
          <b-col>Derrotas</b-col>
          <b-col>Empates</b-col>
        </b-row>
        <b-row class="resultados"> 
            <b-col v-text="Math.trunc(victorias/100)"></b-col>
            <b-col v-text="Math.trunc(derrotas/100)"></b-col>
            <b-col v-text="Math.trunc(empates/100)"></b-col>
        </b-row>
      </b-container>
    </div>    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  data() {return{ 
    acciones:[{id:1, nombre:"piedra"},
              {id:2, nombre:"papel"},
              {id:3, nombre:"tijeras"}] ,

    accionUsuario:null,
    accionCPU: null,
    victorias: 0,
    derrotas:0,
    empates:0          
  }
    
  },
  name: 'App',
  components: {
    NavBar
  },
  methods:{
    mostrarImagen(accion){
      if(accion.nombre==="piedra"){
        document.getElementById("imagen").setAttribute("src",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreo2pk8ccBK5Sr68nN_zHMSMYy4EMmuqQmjO5RPu2zXPZIMqUXtzw7SYQ-RRHfrmvJ3U&usqp=CAU')
      }
      if(accion.nombre==="papel"){
        document.getElementById("imagen").setAttribute("src",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV99ddM7Uk0kbCyCX0qdz6ivTfl2R3mZLGv_F36YK6nV3DxPENFECO-a_HHThDGltkZ5Q&usqp=CAU')
      }
      if(accion.nombre==="tijeras"){
        document.getElementById("imagen").setAttribute("src",'https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png')        
      }
      this.accionUsuario=accion;
    },
    resultadoComputadora(){
      var rand = ~~(Math.random()*this.acciones.length);
      var accionComputadora = this.acciones[rand];
      if(accionComputadora.nombre==="piedra"){
        document.getElementById("imagenCPU").setAttribute("src",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreo2pk8ccBK5Sr68nN_zHMSMYy4EMmuqQmjO5RPu2zXPZIMqUXtzw7SYQ-RRHfrmvJ3U&usqp=CAU')
      }
      if(accionComputadora.nombre==="papel"){
        document.getElementById("imagenCPU").setAttribute("src",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV99ddM7Uk0kbCyCX0qdz6ivTfl2R3mZLGv_F36YK6nV3DxPENFECO-a_HHThDGltkZ5Q&usqp=CAU')
      }
      if(accionComputadora.nombre==="tijeras"){
        document.getElementById("imagenCPU").setAttribute("src",'https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png')        
      }
      this.accionCPU=accionComputadora;
    },
    determinarGanador(){

      if(this.accionUsuario!==null && this.accionUsuario.nombre==="piedra" && this.accionCPU.nombre==="tijeras"){
        this.victorias++;      
        document.getElementById("result").setAttribute("class","resultado ganador");
        return "HAS GANADO!!";
      }
      if(this.accionUsuario!==null && this.accionUsuario.nombre==="papel" && this.accionCPU.nombre==="piedra"){
        this.victorias++;        
        document.getElementById("result").setAttribute("class","resultado ganador");
        return "HAS GANADO!!";
      }
      if(this.accionUsuario!==null && this.accionUsuario.nombre==="tijeras" && this.accionCPU.nombre==="papel"){
        this.victorias++;        
        document.getElementById("result").setAttribute("class","resultado ganador");
        return "HAS GANADO!!";
      }

      if(this.accionUsuario!==null && this.accionUsuario.nombre==="piedra" && this.accionCPU.nombre==="papel"){
        this.derrotas++;        
        document.getElementById("result").setAttribute("class","resultado perdedor");
        return "HAS PERDIDO";
      }
      if(this.accionUsuario!==null && this.accionUsuario.nombre==="papel" && this.accionCPU.nombre==="tijeras"){
        this.derrotas++;        
        document.getElementById("result").setAttribute("class","resultado perdedor");
        return "HAS PERDIDO";
      }
      if(this.accionUsuario!==null && this.accionUsuario.nombre==="tijeras" && this.accionCPU.nombre==="piedra"){
        this.derrotas++;        
        document.getElementById("result").setAttribute("class","resultado perdedor");
        return "HAS PERDIDO";
      }

      if(this.accionUsuario!==null && this.accionUsuario.nombre===this.accionCPU.nombre){
        document.getElementById("result").setAttribute("class","resultado empatado");
        this.empates++;
        return "EMPATE";
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  zoom: 150%;
}

.jugador{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  align-items: center;
}

.computadora{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.titulo{
  color: aliceblue;
  background-color: brown;
  padding: 5px;
  border: 2px solid brown;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #000000;}

.imagen{
  color: white;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 5px;
}

.contenedor-botones{
  margin-: 0px;
  margin-top: 10px;
  width: 300px;
}

.botones{
  margin: 0px;
  max-width: 300px;
}

.cuerpo{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contenido{
  width: 600px;
  display: flex;
}

.resultado{
  margin-top: 20px;
  width: 200px;
  color: aliceblue;
  font-size: 20px;
  padding: 20px;
}

.ganador{   
  background-color: green;  
  border: 2px solid green;
  border-radius: 5px;
}

.perdedor{
  background-color: red;  
  border: 2px solid red;
  border-radius: 5px;
}

.empatado{
  background-color: blue;  
  border: 2px solid blue;
  border-radius: 5px;
}

.tabla{
  width: 400px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px; 
  
}

.titulos{  
  width: 400px;
  background-color:bisque;  
}

.resultados{
  width: 400px;
}

.cuerpo{
  background-color: #FCFAE2;
  min-height: calc(100vh - 116px);
}
</style>
