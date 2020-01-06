import React from 'react';

let textos1 = 'Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 ';
let textos2 = 'Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 ';
let textos3 = 'Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 Texto3 ';

class Servicios extends React.Component {
 
  constructor(){
    super();
    this.state = {
      open: '',
      class: '',
      texto: '',
      escondido: 'escondido'
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.esconder = this.esconder.bind(this);
    this.changeClass1 = this.changeClass1.bind(this);
    this.changeClass2 = this.changeClass2.bind(this);
    this.changeClass3 = this.changeClass3.bind(this);
  }
    changeClass1(){
      if (this.state.class !== 'texto1'){
        this.setState({class: 'text1'});
        this.setState({texto: textos1});
        this.open();
      }
    }

    changeClass2(){
      if (this.state.class !== 'texto2'){
        this.setState({class: 'text2'});
        this.setState({texto: textos2});
        this.open();
      }
    }

    changeClass3(){
      if (this.state.class !== 'texto3'){
        this.setState({class: 'text3'});
        this.setState({texto: textos3});
        this.open();
      }
    }

    open() {
      this.setState({open:true});
    }

    close() {
      this.esconder()
      this.setState({open:false});
    }

    esconder() {
      this.setState({escondido:'esconder'})
    }
    
    render(){
      return(
        <div class='container-fluid recuadro-servicios text-white'>
          <div class='row justify-content-center pt-5'>
            <div class='col-3 text-center '>
              SERVICIOS
            </div>
          </div>
          <div class='row pt-5 justify-content-center'>
            <div class='col-3'>
              <div class='icono-info mx-auto' onClick={this.changeClass1}>
                
              </div>
              <div class='mx-auto text-center '>
                Servicio 1
              </div>
            </div>
            <div class='col-3'>
              <div class='icono-info mx-auto' onClick={this.changeClass2}>
                
              </div>
              <div class='text-center '>
                Servicio 2
              </div>
            </div>
            <div class='col-3'>
              <div class='icono-info mx-auto' onClick={this.changeClass3}>
                
              </div>
              <div class='text-center '>
                Servicio 3
              </div>
            </div>

          </div>
          <div class='row justify-content-center pt-5'>
            <div class={this.state.open?'caja-texto text-center col-3':this.state.escondido} onClick={this.close}>
              <div class={this.state.open?'texto-servicios': 'esconder-texto'}>
                {this.state.texto}
              </div>
            </div>
          </div>
        </div>
      ); 
    } 
  }

export default Servicios;