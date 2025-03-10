import React from 'react'

const UploadFile = () => {
    const [image, setImage] = React.useState('')
    const [avatar, setAvatar] = React.useState('')
    const handleImage = (e)=>{

        if(e.target.files){
            const file = e.target.files[0]
            const save = URL.createObjectURL(file)
            setImage(save)
            setAvatar(file)
        }
       
    }

    console.log(image)
  return (
    <div>
        <label className='w-[100px] h-[100px] bg-amber-300 border'>
            <input type="file" onChange={handleImage}  className='hidden size-full'/>
        <img src={image} className='size-full object-contain'/>
        </label>
    </div>
  )
}

export default UploadFile