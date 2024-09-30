import Header from "./Header";
import Footer from "./Footer";
function ContainerBlock({children}){
    return(
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )

}
export default ContainerBlock;