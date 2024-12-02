import React from 'react';

const ProfileCard = ({ user }) => {
    return (
        <div className='main-content'>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white justify-center ">
                <div className="p-6">
                    {/* Name */}
                    <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>

                    {/* Bio */}
                    <p className="text-gray-600 mt-2">{user.bio}</p>

                    {/* Additional Info */}
                    <div className="mt-4">
                        <div className="text-gray-700">
                            <strong>Email: </strong>{user.email}
                        </div>
                        <div className="text-gray-700 mt-2">
                            <strong>Location: </strong>{user.location}
                        </div>
                    </div>
                </div>

                {/* Social Media Links (Optional) */}
                <div className="flex justify-center gap-4 py-4 bg-gray-100">
                    {user.socialLinks?.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="text-blue-500 hover:text-blue-700"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.platform}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
