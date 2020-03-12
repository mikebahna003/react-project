const api = (props) => {

    let path = "https://apishabu.myseshabu.com/";
    switch(props){
       //ดึงประเภทของอาหารทั้งหมด
       case 'getAllCategory' : return path+"food/getAllCategory";
       //ดึงอาหารโดยเลือกจาก id ประเภทของอาหาร
       case 'getFoodByCategoryID' : return path+"food/getFoodByCategoryID";
       //ตรวจสอบ username และ password เพื่อเข้าสู่ระบบ
       case 'checklogin' : return path+"login/checklogin";

       /*------------------- PUM ----------------------*/
       case 'getOrderfoodbytableStatus1' : return  path+"order/getOrderfoodbytableStatus1";
       case 'getOrderfoodbytableStatus2' : return  path+"order/getOrderfoodbytableStatus2";
       case 'getOrderfood' : return path+"order/getOrderfood";
       case 'getCheckOrder' : return path+"order/getCheckOrder";
       case 'openbill' : return path+"bill/openbill";
       case 'getAllTable' : return path+"table/getAllTable";
       case 'getOrderGroup' : return path+"order/getOrderGroup";
       case 'setOrderList' : return path+"order/setOrderList";
       case 'getBillByID' : return path+"bill/getBillByID";
       case 'changeStatusBill1' : return path+"bill/changeStatusBill1";


        default : return "";
    }
}


export default api;

