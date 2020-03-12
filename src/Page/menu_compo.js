import React from 'react';

 class Menu_compo extends React.Component{
    render(){
        return(
            <div className="row">
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                                <h1>{this.props.data}</h1>
                                
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/qr code.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                                <a href="#qrcode">
                                <h4>Qr Code สั่งอาหาร</h4>
                                </a>
                                <p>แสกน Qr Code เพื่อสั่งอาหาร</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/menu.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                                <a href="#">
                                <h4>สั่งอาหาร</h4>
                                </a>
                                <p>กดที่ปุ่มนี้ เพื่อสั่งอาหารเพิ่ม</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/clipboard.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                                <a href="#menulist">
                                <h4>รายการที่สั่ง</h4>
                                </a>
                                <p>ตรวจสอบรายการที่สั่งจาก โทรศัพท์</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/baker.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                                <a href="#menulist3">
                                <h4>อาหารที่รอเสิร์ฟ</h4>
                                </a>
                                <p>ตรวจสอบรายการอาหาร ที่กำลังรอเสริฟ</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/payment-method.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                                <a href="#checkbill">
                                <h4>เช็คบิล</h4>
                                </a>
                                <p>ตรวจสอบยอดที่ต้องชำระและ<br />ทำแบบสอบถามเพื่อ 'รับส่วนลด'</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/pencil.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                               
                                <h4 data-toggle="modal" data-target="#myModal">แก้ไขจำนวนคน</h4>
                                {
                                /* Modal */
                                }
                                <div className="modal fade" id="myModal" role="dialog">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                    <h6 className="modal-title">กรุณาใส่รหัสพนักงาน</h6>
                                        <button type="button" className="close" data-dismiss="modal">
                                        ×
                                        </button>
                                        
                                    </div>
                                    <div className="modal-body">
                                        <input
                                        type="password"
                                        className="form-control"
                                        id="pwd"
                                        placeholder="Enter password"
                                        name="pwd"
                                        />
                                    </div>
                                    <div className="modal-footer">
                                    <a href="#homeedit"><button type="button" className="btn btn-default">
                                        submit
                                        </button></a>
                                    </div>
                                    </div>
                                </div>
                                </div>

                             
                                <p>กดที่ปุ่มนี้เพื่อ แก้ไขจำนวนคน</p>
                            </div>
                            </div>
                        </div>
                        </div>
        
        )
    }
}

export default Menu_compo;