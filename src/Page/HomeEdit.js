import React from 'react';

 class HomeEdit extends React.Component{
    render(){
        return(
        <div>
        
        <div className="hero-center">
          <div className="container" align="center">
            <h3 className="hero-title">Table 1</h3>
            <img src="assets/image/shabulogo.png" width={300} height={250} /><br /><br />
            <h4>
            <button type="button" className="btn-go-prev">
                  &lt;
                </button>&nbsp;
                <select name="ele_select" id="ele_select" value="4">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={5}>6</option>
                  <option value={5}>7</option>
                  <option value={5}>8</option>
                </select>&nbsp;
                <button type="button" className="btn-go-next">
                  &gt;
                </button>
                <br /><br />
            </h4>
            <a className="w3-btn w3-blue w3-round w3-large" href="/menu">
              &nbsp;&nbsp; ยืนยัน &nbsp;&nbsp;
              </a>&nbsp;&nbsp;
              <a className="w3-btn w3-dark-grey w3-round w3-large" href="/menu">
              &nbsp; ยกเลิก &nbsp;
              </a>    
          </div>      
        </div>
      </div>
        )
    }
}

export default HomeEdit;