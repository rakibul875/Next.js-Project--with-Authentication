import NavBar from '@/components/shared/NavBar';
import { montserrat } from '../layout';

const authLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <NavBar/>
            {children}
        </div>
    );
};

export default authLayout;