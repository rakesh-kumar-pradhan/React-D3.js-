import React, { Component } from 'react';
import { List } from 'antd';
import './view6.css';
import { Table } from 'reactstrap';

export default class View6 extends Component {

    selectUser = (user) => {
        console.log(user)
        this.props.changeSelectUser(user);
    }

    render() {
        const {data} = this.props;
        return (
            <div id='view6' className='pane'>
                <div className='header'>Account watchlist</div>
                <Table borderless>
                <thead>
    <tr>
      <th>
      Account
      </th>
      <th>
      This Month
      </th>
      <th>
      YTD
      </th>
    </tr>
  </thead>
  <tbody>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={user => <List.Item onClick = {() => this.selectUser(user)}>
                        <div>
                

    <tr>
      <td>
      {user.name}
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>

                        </div>
                    </List.Item>}
                />
                  </tbody>
                </Table>
            </div>
        )
    }
}