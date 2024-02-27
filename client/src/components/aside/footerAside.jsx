import DefaultProfileImage from '../../assets/images/default_profile_image.png';

export const FooterAside = () => {
    return (
        <div id="footer-aside" className="mt-auto self-center">
            <div className="flex items-center gap-3">
                <img 
                    src={DefaultProfileImage}
                    alt="Profile Picture"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <p className="text-zinc-100">User Name Example</p>
            </div>
        </div>
    )
}