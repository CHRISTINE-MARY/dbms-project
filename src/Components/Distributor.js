import React, { Component } from 'react';
import logo from '../images/image0.png';
import axios from 'axios';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    // Fetch orders from the backend when the component mounts
    this.fetchOrders();
  }

  fetchOrders = () => {
    axios.get('http://localhost:5000/api/orders') // Adjust the URL if needed
      .then(response => {
        this.setState({ orders: response.data });
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  };

  handleStatusChange = (orderId, status) => {
    this.setState({
      orders: this.state.orders.map(order =>
        order.id === orderId ? { ...order, status } : order
      ),
    });
  };

  render() {
    const { orders } = this.state;

    return (
      <div className="dashboard">
        <header className="flex justify-between items-center p-5 bg-light-yellow">
          <div className="logo w-40 h-40">
            <img src={logo} alt="Logo" />
          </div>
          <nav>
            <a href="/orders" className="mx-4">Pending Orders</a>
            <a href="/profile">Profile</a>
          </nav>
        </header>

        <div className="container mt-10 p-5">
          <h2 className="text-2xl font-bold mb-4">Pending Orders</h2>

          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-item p-4 mb-4 bg-white rounded shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>

                  <div className="order-info">
                    <h3 className="text-lg font-bold">{order.productName}</h3>
                    <p>Quantity: {order.quantity}</p>
                    <p>Delivery Person: {order.deliveryPerson}</p>
                    <p>Address: {order.address}</p>
                  </div>
                </div>

                <div className="order-status flex items-center">
                  <label className="mr-4">
                    <input
                      type="checkbox"
                      checked={order.status === 'out-for-delivery'}
                      onChange={() => this.handleStatusChange(order.id, 'out-for-delivery')}
                    />
                    Out for delivery
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={order.status === 'delivered'}
                      onChange={() => this.handleStatusChange(order.id, 'delivered')}
                    />
                    Delivered
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
