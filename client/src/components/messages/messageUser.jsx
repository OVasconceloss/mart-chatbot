/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import DefaultProfileImage from '../../assets/images/default_profile_image.png';

export const MessageUser = ({userMessage}) => {
    return (
        <div id="message-user" className="flex items-start p-10 gap-3">
            <img 
                src={DefaultProfileImage} 
                alt="Profile Picture"
                className="w-10 h-10 rounded-full object-cover"
            />
            <div>
                <h4 className="text-lg text-zinc-100">User Name</h4>
                <p className="py-2 text-zinc-100 text-justify">{userMessage}</p>
            </div>
        </div>
    )
}