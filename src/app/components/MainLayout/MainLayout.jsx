import Header from "../Header/Header"

const MainLayout = ({ children }) => {
    return (
        <div className="bg-rose-100 h-screen">
            <Header />
            {children}
        </div>
    )
}

export default MainLayout
