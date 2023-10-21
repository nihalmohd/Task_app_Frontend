import React, { useRef, useState } from "react";
import axios from 'axios'  



const Page = () => {
    const [CreateModal, SetCreateModel] = useState()
    const [EditModal, setEditmodal] = useState()
    const [imageTake,setImageTake] = useState()
    const [image, setImage] = useState()
    const [heading, setHeading] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [size, setSize] = useState()

    const imageRef = useRef(null)

    const ImageDivClick = () =>{
        if(imageRef.current){
            imageRef.current.click()
        }
    }
    const handleFileChangesProfile = async (event)=>{
        console.log("hallooo")
        const Cloudname = import.meta.env.VITE_CLOUDNAME
        const SelectedFilesProfile =event.target.files && event.target.files[0]
        if (SelectedFilesProfile) {
           
            const formData = new FormData();
            formData.append('file', SelectedFilesProfile);
            formData.append('upload_preset', 'Educart');

      
            try {
              const { data } = await axios.post(
                `https://api.cloudinary.com/v1_1/${Cloudname}/image/upload?upload_preset=Educart`,
                formData
              );
              const imageUrl = data.secure_url
              console.log(imageUrl,'cloudinrn data kittiiyo');
              setImage(imageUrl);
            } catch (error) {
              console.error('Upload error:', error);
            }
          } else {
            setImagePreviewProfile(null);
          }
          console.log('Selected file:', SelectedFilesProfile);
        };
    return (
        <div>
            {
                CreateModal ? (<>
                    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6 ">
                            <div className=" justify-between items-center mb-4">
                                <div className="w-full h-10  flex justify-center items-center mb-1 border-2 border-black">
                                    <h1 className="font-bold text-lg text-center ">Create Task </h1>
                                </div>
                                <form action="">
                                    <div className="w-full ">
                                        <div className="w-full h-8 flex items-center">
                                            <h1 className="font-semibold text-black ml-1">
                                                Heading
                                                <span className="font-semibold text-red-700 ml-1">*</span>
                                            </h1>
                                        </div>
                                        <input
                                            type="text"
                                            name="Heading"
                                            placeholder="Please Enter Your Heading"
                                            className="w-full h-10 border-black border-2 rounded-lg bg-transparent"
                                        />
                                    </div>
                                    <div className="w-full ">
                                        <div className="w-full h-8 flex items-center">
                                            <h1 className="font-semibold text-black ml-1">
                                                Description
                                                <span className="font-semibold text-red-700 ml-1">*</span>
                                            </h1>
                                        </div>
                                        <input
                                            type="text"
                                            name="Description"
                                            placeholder="Insert your description here"
                                            className="w-full h-10 border-black border-2 rounded-lg bg-transparent"
                                        />
                                    </div>
                                    <div className="w-full flex gap-1">
                                        <div className="w-full">
                                            <div className="w-full h-8 flex items-center ">
                                                <h1 className="font-semibold text-black ml-1">
                                                    Date
                                                    <span className="font-semibold text-red-700 ml-1">*</span>
                                                </h1>
                                            </div>
                                            <input
                                                type="Date"
                                                name="Date"
                                                className="w-full h-10 border-black border-2 rounded-lg bg-transparent flex"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full h-8 flex items-center">
                                                <h1 className="font-semibold text-black ml-1">
                                                    Username
                                                    <span className="font-semibold text-red-700 ml-1">*</span>
                                                </h1>
                                            </div>
                                            <input
                                                type="Time"
                                                name="Username"
                                                placeholder="Please Enter Your Username"
                                                className="w-full h-10 border-black border-2 rounded-lg bg-transparent flex"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className="w-full h-8 flex items-center">
                                            <h1 className="font-semibold text-black ml-1">
                                                Size
                                                <span className="font-semibold text-red-700 ml-1">*</span>
                                            </h1>
                                        </div>
                                        <select name="mySelect" className="w-full  font-bold text-lg h-10 border-2 border-black text-center ">
                                            <option value="option1">Low</option>
                                            <option value="option2">Meadium</option>
                                            <option value="option3">High</option>
                                            <option value="option3">All</option>
                                        </select>
                                    </div>
                                    <div className="w-full ">
                                        <div className="w-full h-8 flex items-center">
                                            <h1 className="font-semibold text-black ml-1">
                                                Image
                                                <span className="font-semibold text-red-700 ml-1">*</span>
                                            </h1>
                                        </div>
                                        <div
                                            className="w-full h-10 border-black border-2 border-dashed rounded-lg bg-transparent flex justify-center items-center font-bold text-lg"
                                            onClick={ImageDivClick}
                                        >
                                            Upload Profile Image
                                        </div>
                                        <input
                                            type="file"
                                            name="Profile"
                                            ref={imageRef}
                                            onChange={handleFileChangesProfile}
                                            placeholder="Please Enter a Subcategory Name"
                                            className="w-full h-10 border-black border-2 rounded-lg bg-transparent hidden"
                                        />
                                    </div>
                                    {/* <div className="w-full h-32 bg-yellow-100"></div> */}
                                    <div className="w-full h-10  mt-2 flex gap-1 ">
                                        <div
                                            className="w-1/2 h-10 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white flex justify-center items-center font-bold text-lg hover:cursor-pointer"
                                            onClick={() => { SetCreateModel(false) }}
                                        >
                                            Cancel
                                        </div>
                                        <div
                                            className="w-1/2 h-10 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white flex justify-center items-center font-bold text-lg hover:cursor-pointer"

                                        >
                                            Update
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </>) : (<>
                    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
                        <div className="w-10/12 h-5/6 bg-white rounded-3xl shadow-2xl p-1">
                            <div className="w-full h-full  ">
                                <div className="w-full h-14  flex justify-end items-center">
                                    <select name="mySelect" className="w-2/12 font-serif font-bold text-lg h-10 bg-black text-white mx-2 hover:bg-transparent hover:border-2 hover:border-black hover:text-black text-center ">
                                        <option value="option1" className="w-full h-10 bg-red-100" >Filter</option>
                                        <option value="option1">Low</option>
                                        <option value="option2">Meadium</option>
                                        <option value="option3">High</option>
                                        <option value="option3">All</option>
                                    </select>
                                    <button className="w-2/12 font-serif font-bold text-lg h-10 bg-black text-white mx-2 hover:bg-transparent hover:border-2 hover:border-black hover:text-black " onClick={() => SetCreateModel(true)}>
                                        Create a task
                                    </button>

                                </div>
                                <div className="w-full h-[400px] p-3 overflow-auto">
                                    <div className="w-full h-32  border-2 border-black mb-1  p-1">
                                        <div className="w-full h-full  p-1 flex gap-3">
                                            <div className=" w-1/5 h-full ">
                                                <img
                                                    src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg"
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="w-3/5 h-full   ">
                                                <div className="w-full h-14  overflow-auto flex justify-start items-center ">
                                                    <h2 className="font-serif font-bold text-xl underline">Nihallll</h2>
                                                </div>
                                                <div className="w-full h-12  mt-1 overflow-auto flex justify-start items-start">
                                                    <h1 className="font-semibold text-lg" >This is a dummy data of that sim </h1>
                                                </div>
                                            </div>
                                            <div className="w-[200px] h-full ">
                                                <div className="w-full h-1/2 ">
                                                    <button className="w-full h-full border-2 border-black text-xl font-bold  hover:text-white hover:bg-black" >Edit</button>
                                                </div>
                                                <div className="w-full h-1/2 mt-1 ">
                                                    <button className="w-full h-full bg-black text-white  hover:text-black hover:bg-transparent hover:border-2 border-black text-xl font-bold"  >Delet</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }


        </div>
    );
};

export default Page;
