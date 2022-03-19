import React from 'react'
import MainLayout from "src/components/layouts/MainLayout";
import DesignBanner from "src/components/organisms/DesignBanner/DesignBanner";

const DesignLayout = ({children, data: {title, desc}}) => {
    return (
        <MainLayout>
            <DesignBanner title={title} desc={desc} />
            {children}
        </MainLayout>
    )
}

export default DesignLayout