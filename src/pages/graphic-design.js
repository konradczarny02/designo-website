import React from 'react'
import DesignLayout from "src/components/layouts/DesignLayout";
import DesignLinks from "src/components/organisms/DesignLinks/DesignLinks";
import {graphicDesignLinks as links, graphicDesignData as pageData} from "src/data/pagesData";

const GraphicDesign = () => {
    return (
        <DesignLayout data={pageData}>
            <DesignLinks data={links}/>
        </DesignLayout>
    )
}

export default GraphicDesign