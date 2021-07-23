import React from 'react';
import { Layout, Button } from 'antd';
import {LeftOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import "antd/dist/antd.css";
import { Link, useHistory } from 'react-router-dom';
const { Header, Footer, Content } = Layout;


const BaseLayout = ({ title, children }) => {
    const history = useHistory();
    const StyledContent = styled.div`
	background: #fff;
	padding: 24px;
	min-height: 280px;
`;

    return (
        <Layout className="layout" theme="light">
            <Header ghost={true} style={{ color: "white", "font-size": "1.2rem" }}>
            <div>
                    {history.location.pathname !== "/" && (
                        <Link to="/">
                            <Button shape="circle" icon={<LeftOutlined/>}
                                    style={{
                                        color: 'white',
                                        background: 'black',
                                        border: '0px',
                                    }}
                            />
                        </Link>
                    )}
                    < span> {title} </span>
                </div>
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <StyledContent>{children}</StyledContent>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Ecommerce API
            </Footer>
        </Layout>
    )

}

export default BaseLayout;