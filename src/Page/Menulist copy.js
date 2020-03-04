import React from 'react';
import ListOrder from './ListOrder';

class Menulist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            table_id: 1,
            food: "",
            order_id: ""

        }

    }

    componentDidMount() {
        let id = this.state.table_id;
        this.onPageChange(
            "http://localhost/project_shabu/index.php/OrderFood/getOrderfood?teble_id=" + id
        );

    }


    hello(){
        alert("click")
    }
    onPageChange(url) {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    data: result,
                    order_id: result.o_id
                });
                console.log("data:" + this.state.data);
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (

            <div>
                <button onClick={this.hello} className="btn btn-danger">click</button>
                <section className="section">
                    <div className="container" align="center">
                        <br />
                        <h7 className="hero-title">Table 1</h7>
                        <img src="assets/image/shabulogo.png" width={150} height={150} />
                        <div className="row">
                            <div className="container">
                                <h5 align="left"> &nbsp; วันที่ 06/01/2563 เวลา 15:45 น. ( รายการที่สั่ง )</h5>
                                <table className="w3-table-all w3-centered">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <h5>เลือก</h5>
                                            </th>
                                            <th>
                                                <h5>รายการที่สั่ง</h5>
                                            </th>
                                            <th>
                                                <h5>จำนวน(ถาด)</h5>
                                            </th>
                                            <th>
                                                <h5>ลบ</h5>
                                            </th>
                                        </tr>


                                        <ListOrder />


                                        <tr>
                                            <td align="right">&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td colSpan={2}>
                                                <h>
                                                    <a
                                                        className="w3-btn w3-blue w3-round w3-small"
                                                        href="/menulist2"
                                                    >
                                                        ยืนยันการสั่งาหาร
                                </a>&nbsp;
                                </h>
                                                <a className="w3-btn w3-dark-grey w3-round w3-small" href="/menulist">
                                                    ยกเลิกการเลือกทั้งหมด
                                </a>&nbsp;
                                <a className="w3-btn w3-dark-grey w3-round w3-small" href="/menulistcancel">
                                                    ยกเลิกรายการสั่งทั้งหมด
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
                </section>

            </div>

        )
    }
}

export default Menulist;


