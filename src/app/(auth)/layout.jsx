import NavBar from '@/components/shared/NavBar';

const authLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
};

export default authLayout;