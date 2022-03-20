import React from 'react'
import DesignLayout from "src/components/layouts/DesignLayout";
import DesignLinks from "src/components/organisms/DesignLinks/DesignLinks";

const data = {
    title: 'Web Design',
    desc: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
}

const links = [
    {
        title: 'APP DESIGN',
        description: 'VIEW PROJECTS',
        path: '/app-design',
    },
    {
        title: 'GRAPHIC DESIGN',
        description: 'VIEW PROJECTS',
        path: '/graphic-design',
    }
]

const WebDesign = () => {
    return (
        <DesignLayout data={data}>
            <DesignLinks data={links} />
        </DesignLayout>
    )
}

export default WebDesign