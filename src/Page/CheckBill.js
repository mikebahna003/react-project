import React from 'react';
import Logo_compo from './logo_compo';

 class CheckBill extends React.Component{
    render(){
        return(
           
              <div>
                  <section className="section">
                    <div className="container" align="center">
                        <br />
                        <Logo_compo />
                        <br />
                        <br />
                        <div className="row">
                        <div className="container">
                        <h4 align="left"> &nbsp; วันที่ 06/01/2563 เวลา 15:45 น. ( เช็คบิล )</h4>
                            <table className="w3-table-all w3-centered">
                            <tbody>
                                <tr>
                                <th>
                                    <h4>รายการ</h4>
                                </th>
                                <th>
                                    <h4>จำนวน(คน)</h4>
                                </th>
                                <th>
                                    <h4>ราคาต่อคน</h4>
                                </th>
                                <th>
                                    <h4>ราคา</h4>
                                </th>
                                </tr>
                                <tr>
                                <td>
                                    <h4>ลูกค้า</h4>
                                </td>
                                <td>
                                    <h4>4</h4>
                                </td>
                                <td>
                                    <h4>199</h4>
                                </td>
                                <td>
                                    <h4>769.00</h4>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <h4 />
                                </td>
                                <td>
                                    <h4 />
                                </td>
                                <td>
                                    <h4 />
                                </td>
                                <td>
                                    <h4>
                                    ราคารวม{" "}
                                    <center>
                                        <div
                                        style={{
                                            border: "1px groove black",
                                            width: 97,
                                            height: "auto",
                                            textAlign: "right"
                                        }}
                                        >
                                        769.00{" "}
                                        </div>
                                    </center>
                                    </h4>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <a
                                    className="w3-btn w3-teal w3-round w3-small"
                                    href="/questionnaire"
                                    >
                                    ทำแบบสอบถาม (รับส่วนลด 5%)
                                    </a>
                                </td>
                                <td />
                                <td />
                                <td>
                                    <h>
                                    <a className="w3-btn w3-blue w3-round w3-small" href="/checkbillall">
                                        ต้องการชำระเงิน
                                    </a>&nbsp;
                                    </h>
                                    <a className="w3-btn w3-dark-grey w3-round w3-small" href="menu">
                                    ยกเลิก
                                    </a>
                                    &nbsp;
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <p>&nbsp;</p>
                        </div>
                        </div>
                    </div>
                    </section>;

              </div>
        
        )
    }
}

export default CheckBill;