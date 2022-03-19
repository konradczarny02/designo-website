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
    title: 'Graphic Design',
    desc: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
}

const GraphicDesign = () => {
    return (
        <DesignLayout data={data}>
            <Div />
        </DesignLayout>
    )
}

export default GraphicDesign