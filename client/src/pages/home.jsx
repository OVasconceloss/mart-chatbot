const Home = () => {
    return (
        <>
        <main className="flex w-screen h-screen bg-zinc-800">
            <aside className="flex flex-col w-96 h-full p-5 bg-zinc-900 rounded-r-xl">
                <div id="header-aside">
                    <h1 className="pb-5 mb-5 text-2xl text-zinc-100 text-center">M.A.R.T</h1>
                </div>
                <div id="content-aside" className="self-center w-60">
                    <div className="flex items-end justify-between p-2 mb-5 bg-zinc-800 rounded-md">
                        <h2 className="text-zinc-100">Chat Name Example</h2>
                        <button className="text-md text-zinc-100">
                            <i className="fa-solid fa-gear"></i>
                        </button>
                    </div>
                </div>
                <div id="footer-aside" className="mt-auto self-center">
                    <div className="flex items-center gap-3">
                        <img 
                            src="https://github.com/OVasconceloss.png" 
                            alt="Profile Picture"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <p className="text-zinc-100">User Name Example</p>
                    </div>
                </div>
            </aside>
            <section className="w-full p-5 bg-zinc-800">
                <div id="header-section" className="flex items-center justify-between w-full">
                    <h1 className="text-2xl text-zinc-100">GPT 3.5 Turbo</h1>
                    <div>
                        <a href="https://github.com/OVasconceloss/mart-chatbot" target="_blank">
                            <button 
                                className="w-20 border border-zinc-100 rounded-md text-xl text-zinc-100
                                transition ease-linear hover:bg-zinc-100 hover:text-zinc-800">
                                <i className="fa-brands fa-github"></i>
                            </button>
                        </a>
                    </div>
                </div>
                <div id="messages">

                </div>
                <div id="user-input">

                </div>
            </section>
        </main>
        </>
    );
};

export default Home;