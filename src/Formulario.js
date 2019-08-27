import React, { Component } from 'react';


class Formulario extends Component {

    constructor(props) {
      super(props);

      this.stateInicial = {
        origem: "",
        destino: "",
        tempo: "",
        plano: "",
        comfm: "",
        semfm: "",
        msgerro: ""
      }

      this.state = this.stateInicial;
      this.calculoFaleMais = this.calculoFaleMais.bind(this);
      this.logicaCalculo = this.logicaCalculo.bind(this);
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { origem, destino, plano, tempo } = this.state;

      if((origem==='')||(destino==='')||(plano==='')||(tempo==='')){
        this.setState({ msgerro: "Um ou mais campos precisam ser preenchidos" })
      }else{
        Promise.all([
          this.logicaCalculo()
        ]).then( () => {
          this.props.escutadorDeSubmit(this.state);
          this.setState(this.stateInicial);
        }).catch(erro => console.log(erro));
      }
    }

    //função para os cálculos dos custos das ligações
    calculoFaleMais(valorMin, plano, minutos){
      let comfm1 = 0;
      let semfm1 = 0;
      semfm1 = (((valorMin*minutos)).toFixed(2)).toString();
      this.setState({ semfm: "R$ "+semfm1 });
      
      if( plano==='FaleMais 30'){
      
        if(minutos<=30){
          comfm1 = 'R$ 0.00';
          this.setState({ comfm: comfm1 });
        }else{
          comfm1 = (((minutos-30)*valorMin*1.1).toFixed(2)).toString();
          this.setState({ comfm: "R$ "+comfm1 });
        }
      }

      if( plano==='FaleMais 60'){
      
        if(minutos<=60){
          comfm1 = 'R$ 0.00';
          this.setState({ comfm: comfm1 });
        }else{
          comfm1 = (((minutos-60)*valorMin*1.1).toFixed(2)).toString();
          this.setState({ comfm: "R$ "+comfm1 });
        }
      }


      if( plano==='FaleMais 120'){
      
        if(minutos<=120){
          comfm1 = 'R$ 0.00';
          this.setState({ comfm: comfm1 });
        }else{
          comfm1 = (((minutos-120)*valorMin*1.1).toFixed(2)).toString();
          this.setState({ comfm: "R$ "+comfm1 });
        }
      }
    }

    logicaCalculo(){
      const { origem, destino, tempo, plano } = this.state;
      const minutos = Number(tempo);
      var valorMin = 0;

      //Se a ligação for de 011 para 016 ou de 018 para 011

      if( (origem==='011' && destino==='016')||(origem==='018' && destino==='011')){
        valorMin = 1.9;
        this.calculoFaleMais(valorMin, plano, minutos);
      }else if( (origem==='016' && destino==='011')){
        valorMin = 2.9;
        this.calculoFaleMais(valorMin, plano, minutos);
      }else if( (origem==='011' && destino==='017')){
        valorMin = 1.7;
        this.calculoFaleMais(valorMin, plano, minutos);
      }else if( (origem==='017' && destino==='011')){
        valorMin = 2.7;
        this.calculoFaleMais(valorMin, plano, minutos);
      }else if( (origem==='011' && destino==='018')){
        valorMin = 0.9;
        this.calculoFaleMais(valorMin, plano, minutos);
      }else{
        this.setState({ 
          comfm: '-',
          semfm: '-'
         });
      }
    }

    escutadorDeInput = event => {
      const { name, value } = event.target;

      this.setState({
        [name]: value
      });
    }

    render() {
      const { origem, destino, plano, tempo, msgerro } = this.state;
        return (
          <form>
            <div className="container">
              <div className="input-field col s12">
                <select className="browser-default" name="origem" value={origem} onChange={this.escutadorDeInput}>
                  <option value="">Origem</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                </select>
              </div>

              <div className="input-field col s12">
                <select className="browser-default" name="destino" value={destino} onChange={this.escutadorDeInput}>
                  <option value="" >Destino</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                </select>
                
              </div>

              <div className="input-field col s4">
                <input placeholder="Tempo" className="validate" name="tempo" type="text" value={tempo} onChange={this.escutadorDeInput}/>
              </div>

              <div className="input-field col s12">
                <select className="browser-default" value={plano} name="plano"
                onChange={this.escutadorDeInput}>
                  <option value="" >Plano</option>
                  <option value="FaleMais 30">FaleMais 30</option>
                  <option value="FaleMais 60">FaleMais 60</option>
                  <option value="FaleMais 120">FaleMais 120</option>
                </select>
              </div>
              <button className="waves-effect waves-light btn indigo lighten-2" onClick={this.handleSubmit} type="submit">
                Calcular
              </button>
              <p className="erro1">{msgerro}</p>
            </div>
          </form>
        );
    }
}
export default Formulario