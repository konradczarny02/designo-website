import React from 'react'
import DesignLink from "src/components/molecules/DesignLink/DesignLink";
import {DesignLinksWrapper} from "src/components/organisms/DesignLinks/DesignLinks.styles";

const DesignLinks = ({data}) => {
    return (
        <DesignLinksWrapper>
            {data.map(link => (<DesignLink key={link.id} data={link} />))}
        </DesignLinksWrapper>
    )
}

export default DesignLinks