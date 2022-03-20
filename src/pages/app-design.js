import React from 'react'
import DesignLayout from "src/components/layouts/DesignLayout";
import DesignLinks from "src/components/organisms/DesignLinks/DesignLinks";

const data = {
    title: 'App Design',
    desc: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
}

const links = [
    {
        title: 'WEB DESIGN',
        description: 'VIEW PROJECTS',
        path: '/web-design',
    },
    {
        title: 'GRAPHIC DESIGN',
        description: 'VIEW PROJECTS',
        path: '/graphic-design',
    }
]

const AppDesign = () => {
    return (
        <DesignLayout data={data}>
            <DesignLinks data={links}/>
        </DesignLayout>
    )
}

export default AppDesign