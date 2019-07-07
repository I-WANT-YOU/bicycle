import React from 'react';
import { Row, Col } from 'antd';
import NavLeft from '../../components/navLeft';
import './admin.less';

function Admin() {
    return (
        <div className="admin">
            <Row>
                <Col span={4} className = 'nav-left'>
                    <NavLeft/>
                </Col>
                <Col span={20}>
                    <Row>
                        <Col span={24}>col-8</Col>
                        <Col span={24}>col-8</Col>
                        <Col span={24}>col-8</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
export default Admin;
