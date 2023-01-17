import * as React from 'react' ;

import AllInOne from 'src/components/Landing/AllInOne';
import Vision from 'src/components/Landing/Vision';

import { 
    LandingRoot
} from './index.styles';

const Landing = () => {
    return (
        <LandingRoot>
            <AllInOne />
            <Vision />
        </LandingRoot>
    )
}

export default Landing;