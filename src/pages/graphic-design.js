import React from 'react'
import DesignLayout from "src/components/layouts/DesignLayout";
import DesignLinks from "src/components/organisms/DesignLinks/DesignLinks";


const data = {
    title: 'Graphic Design',
    desc: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
}

const links = [
    {
        title: 'APP DESIGN',
        description: 'VIEW PROJECTS',
        path: '/app-design',
    },
    {
        title: 'WEB DESIGN',
        description: 'VIEW PROJECTS',
        path: '/web-design',
    }
]

const GraphicDesign = () => {
    return (
        <DesignLayout data={data}>
            <DesignLinks data={links}/>
        </DesignLayout>
    )
}

export default GraphicDesign