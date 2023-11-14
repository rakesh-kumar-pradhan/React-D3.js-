import React, { Component } from 'react';
import { List } from 'antd';
import './view6.css';
import { Table } from 'reactstrap';

export default class View6 extends Component {

    selectUser = (user) => {
        this.props.changeSelectUser(user);
    }

    render() {
        const {data} = this.props;
        return (
            <div id='view6' className='pane'>
                <div className='header'>Account watchlist</div>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={user => <List.Item onClick = {() => this.selectUser(user)}>
                        <div>
                            {user.name + ':' + user.age}
                        </div>
                        <Table>
                            <thead></thead>
                            <tr>
                            <th>Account</th>
                            <th>This Month</th>
                            <th>YTD</th>
                            </tr>
                        </Table>
                    </List.Item>}
                />
            </div>
        )
    }
}