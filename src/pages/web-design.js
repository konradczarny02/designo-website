import React from 'react'
import DesignLayout from "src/components/layouts/DesignLayout";
import styled from "styled-components";

const Div = styled.div`
  width: 90%;
  height: 1000px;
  background-color: aliceblue;
  margin: 0 auto;
`;

const data = {
    title: 'Web Design',
    desc: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
}

const WebDesign = () => {
    return (
        <DesignLayout data={data}>
            <Div />
        </DesignLayout>
    )
}

export default WebDesign