import React from 'react';
import Logo_compo from './logo_compo';
import QRcode from 'qrcode.react';

 class Qrcode extends React.Component{
 
        constructor(props){
          super(props);
          this.state = {
            
              table_id: ""
          }
       
      }

    componentDidMount(){
        this.setState({
          table_id:localStorage.getItem('table_id')
        })
  }
    render(){
        return(
            <div>
                <div className="container" align="center"><br />
                    <div className="row">
                        
                    <div className="col-lg-12">
                    <br /><br /><br />
                        <div className="media align-items-center">
                        <QRcode className="styleQR" size="250" value={"http://react-project-mobile.herokuapp.com/#/"+this.state.table_id}/>
               

                        <div className="media-body">
                        <Logo_compo />
                            <p /><h4>แสกน Qr Code <br />เพื่อสั่งอาหารร่วมกัน</h4><p />
                            <a className="w3-btn w3-dark-grey w3-large" href="#menu">&nbsp;&nbsp; ย้อนกลับ &nbsp;&nbsp;</a> 
                            {/* <a className="button button-hero button-shadow" href="/menu"> ทำรายการต่อ</a>  */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Qrcode;