// eslint-disable-next-line react/prop-types
export const MessageChat = ({chatMessage}) => {
    return (
        <div id="message-mart" className="flex items-start p-10 gap-3">
            <img 
                src="https://github.com/rocketseat.png" 
                alt="Profile Picture"
                className="w-10 h-10 rounded-full object-cover"
            />
            <div>
                <h4 className="text-lg text-zinc-100">M.A.R.T</h4>
                <p className="py-2 text-zinc-100 text-justify">{chatMessage}</p>
            </div>
        </div>
    )
}