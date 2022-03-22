import React from 'react';
import MainLayout from "src/components/layouts/MainLayout";
import HomepageBanner from "src/components/organisms/HomepageBanner/HomepageBanner";
import MainSection from "src/components/organisms/MainSection/MainSection";
import AboutSection from "src/components/organisms/AboutSection/AboutSection";
import {graphql} from "gatsby";

const HomePage = ({data}) => {
    const benefitData = data.allDatoCmsBenefit.edges;
    return (
        <MainLayout>
            <HomepageBanner />
            <MainSection />
            <AboutSection data={benefitData} />
        </MainLayout>
    )
}

export default HomePage;

export const query = graphql`
query MyBenefitQuery {
  allDatoCmsBenefit {
    edges {
      node {
        title
        id
        description
        image {
          gatsbyImageData(width: 200, height: 200, forceBlurhash: false, placeholder: BLURRED)
        }
      }
    }
  }
}
`