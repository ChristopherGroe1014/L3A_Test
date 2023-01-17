import * as React from 'react' ;

import AllInOne from 'src/components/Landing/AllInOne';
import RealTime from 'src/components/Landing/RealTime';
import Vision from 'src/components/Landing/Vision';

import { 
    LandingRoot
} from './index.styles';

const Landing = () => {
    return (
        <LandingRoot>
            <AllInOne />
            <Vision />
            <RealTime />
        </LandingRoot>
    )
}

export default Landing;