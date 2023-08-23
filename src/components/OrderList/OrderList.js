import React, {useEffect}  from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getOrdersByUserId} from '../../redux/actions/orderActions'
import Loader from "../Loading/Loading"
import Error from "../Error/Error"
import Navbar from '../Navbar/Navbar'
import footer from '../About/About'
import Footer from '../Footer/Footer';
import "./OrderList.css"

const OrderList = () => {

    const getordersstate = useSelector((state) => state.getOrdersByUserIdReducer);

    const { orders, loading, error } = getordersstate;
    console.log(orders)

    const dispatch = useDispatch()

    useEffect(() => {
       
        dispatch(getOrdersByUserId())
     
  }, [])

  return (
      <div className='listhome'>
          
    <div className='containerListss'>
        <Navbar/>

        {loading && (<Loader />)}
            {error && (<Error error="Something wrong!" />)}
            <h2 className="usertitle">Liste des Tickets</h2>
            <table className="tbadmin table table-bodered ">
            <thead>
          <tr>
            <th>ID Ticket</th>
            <th>Email</th>
            <th>Nom Utlisateur</th>
            <th>Montant</th>
            <th>Date</th>
            <th>ID Transaction</th>
          </tr>
          </thead>

          <tbody>
              {orders && (orders.map(order=>{
                  return <tr>
                      <td>{order._id}</td>
                      <td>{order.email}</td>
                      <td style={{paddingLeft:"37px"}}>{order.nom}</td>
                      <td>{order.orderAmount} TND</td>
                      <td>{order.createdAt}</td>
                      <td>{order.transactionId}</td>
                      
                  </tr>
              }))}
          </tbody>
        
            </table>

            <Footer/>
        </div>
        </div>

  )
}

export default OrderList