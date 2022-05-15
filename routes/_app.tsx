import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default App;
