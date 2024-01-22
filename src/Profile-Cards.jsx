import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const ProfileCards = ({ profile, onDelete, onUpdate }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    number: profile.number,
    website: profile.website,
  });

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
    };

    const handleDelete = () => {
        onDelete(profile); 
    };

    const handleBorderColorClick = () => {
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleOkClick = () => {
        
        onUpdate(formData);
        setIsModalOpen(false);
      };
    

    return (
        <div className='flex flex-col min-h-screen bg-white -mb-48'>
            <div className='flex flex-col p-3'>
                <div className='bg-[#f5f5f5] h-48 w-auto border'>
                    <div className=' flex flex-col h-48 w-auto bg-[#e3e3e3] mx-20'>
                        <div className='bg-[#bababa] rounded-full mt-4 mx-auto h-28 w-28 justify-center text-center'></div>
                        <div className='flex flex-col rounded-t-2xl bg-[#bababa] h-16 w-40 mt-3 mx-auto lg:mx-1'>
                            <h1 className='text-[#c70200] text-xs text-center font-bold mt-1 mx-1'>
                            You are using an outdated API endpoint.
                            </h1>
                            <p className='items-center text-center underline text-[8px] mt-1 '>
                                Documentation
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bg-white h-44 w-auto border'>
                    <div className='flex flex-col ml-6 mt-8'>
                        <h1 className='font-semibold text-md'>{profile.name}</h1>
                        <div className='text-gray-600 flex flex-row items-center'>
                            <MailOutlineIcon className='text-sm mt-2 text-gray-500' />
                            <p className='text-sm mt-2 ml-2'>{profile.email}</p>
                        </div>
                        <div className='text-gray-600 flex flex-row items-center'>
                            <PhoneEnabledOutlinedIcon className='text-sm mt-2 text-gray-500' />
                            <p className='text-sm mt-2 ml-2'>{profile.number}</p>
                        </div>
                        <div className='text-gray-600 flex flex-row items-center'>
                            <LanguageOutlinedIcon className='text-sm mt-2 text-gray-500' />
                            <p className='text-sm mt-2 ml-2'>{profile.website}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fafafa] h-16 w-auto border flex flex-row justify-between px-10'>
                    <div className='my-3' onClick={handleFavoriteToggle}>
                        {isFavorite ? (
                            <FavoriteIcon className='text-center justify-center text-red-500' />
                        ) : (
                            <FavoriteBorderOutlinedIcon className='text-center justify-center text-red-500' />
                        )}
                    </div>
                    <div className='my-3 border-l-2 border-r-2 px-12'>
                        <BorderColorOutlinedIcon className='text-center justify-center text-gray-400' onClick={handleBorderColorClick} />
                    </div>
                    {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            
            <div className='fixed inset-0 transition-opacity' onClick={handleModalClose}>
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>

            
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>&#8203;
            <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
              
              <h3 className='text-lg leading-6 font-medium text-gray-900'>Basic Form</h3>
              <div className='mt-2'>
                <form>
                  
                  <div className='mb-4'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className='mt-1 p-1 border rounded-md w-full'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='mt-1 p-1 border rounded-md w-full'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                      Number
                    </label>
                    <input
                      type='text'
                      id='number'
                      name='number'
                      value={formData.number}
                      onChange={handleInputChange}
                      className='mt-1 p-1 border rounded-md w-full'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                      Website
                    </label>
                    <input
                      type='text'
                      id='website'
                      name='website'
                      value={formData.website}
                      onChange={handleInputChange}
                      className='mt-1 p-1 border rounded-md w-full'
                    />
                  </div>

                  
                  <div className='mt-4 flex justify-end'>
                    <button
                      type='button'
                      onClick={handleModalClose}
                      className='mr-2 px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      onClick={handleOkClick}
                      className='px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    >
                      OK
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
                    <div className='my-3 ' onClick={handleDelete}>
                        <DeleteIcon className='text-center justify-center text-gray-400' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCards;
