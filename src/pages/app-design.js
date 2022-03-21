import React from 'react'
import DesignLayout from "src/components/layouts/DesignLayout";
import DesignLinks from "src/components/organisms/DesignLinks/DesignLinks";
import {appDesignLinks as links, appDesignData as pageData} from "src/data/pagesData";


const AppDesign = () => {
    return (
        <DesignLayout data={pageData}>
            <DesignLinks data={links}/>
        </DesignLayout>
    )
}

export default AppDesign