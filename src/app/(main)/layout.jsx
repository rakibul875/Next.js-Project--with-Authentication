import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";


const mainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <NavBar/>
            {children}
        </div>
    );
};

export default mainLayout;