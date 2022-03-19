import React from 'react'
import styled from "styled-components";
import DesignLayout from "src/components/layouts/DesignLayout";

const Div = styled.div`
  width: 90%;
  height: 1000px;
  background-color: aliceblue;
  margin: 0 auto;
`;

const data = {
    title: 'App Design',
    desc: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
}

const AppDesign = () => {
    return (
        <DesignLayout data={data}>
            <Div />
        </DesignLayout>
    )
}

export default AppDesign