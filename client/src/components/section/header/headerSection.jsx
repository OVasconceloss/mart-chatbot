export const HeaderSection = () => {
    return (
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
    );
};