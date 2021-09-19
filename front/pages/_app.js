import React from 'react';
import PropTypes from "prop-types";
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from "../store/configureStore";

// _app.js는 pages들의 공통 부분이다.
const NodeBird = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    );
};

NodeBird.propTypes =
    {
        Component: PropTypes.elementType.isRequired,
    }

export default wrapper.withRedux(NodeBird);