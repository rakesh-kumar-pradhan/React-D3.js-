import React from 'react';
import "./style.css";

const AccountTable=({data})=>{



    return  (
          <div className='container'>
          <table>
          <thead>
          <tr>
          <th>Acount</th>
          <th>This Month</th>
          <th>YTD</th>
          </tr>
          </thead>
          <tr>
            <td>Sales</td>
            <td>1,194.58</td>
            <td>11,418.29</td>
          </tr>

          <tr>
            <td>Advertising</td>
            <td>6,879.02</td>
            <td>9,271.36</td>
          </tr>

          <tr>
            <td>Inventory</td>
            <td>4,692.26</td>
            <td>9,768.09</td>
          </tr>

          <tr>
            <td>Entertainment</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>Product</td>
            <td>4,652.10</td>
            <td>2,529.90</td>
          </tr>
          </table>

          </div>

    )

}
export default AccountTable;

