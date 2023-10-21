import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'  



const Page = () => {
    let SelectedFilesProfile
    const [EditData,setEditData] = useState()
    const [fetchedData,setFetchedData] = useState([])
    const [CreateModal, SetCreateModel] = useState()
    const [EditModal, setEditmodal] = useState()
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

    function convertISOToReadableDate(isoDate) {
       const date = new Date(isoDate);
       const options = { year: 'numeric', month: 'long', day: 'numeric'};
       return date.toLocaleDateString('en-US', options);
     }

    const handleFileChangesProfile = async (event)=>{
        const Cloudname = import.meta.env.VITE_CLOUDNAME
         SelectedFilesProfile =event.target.files && event.target.files[0]
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
        // console.log(heading,description,date,image,time,size)


     const CreateData = async() =>{
        const response = await axios.post("http://localhost:3000/AddData",{heading,description,date,time,image,size})
        SetCreateModel(false)
        console.log(response)
     }

     const fetchData = async () =>{
        const response = await axios.get("http://localhost:3000/getData")
        console.log(response.data.data)
        setFetchedData(response.data.data)
     }

useEffect(()=>{
  fetchData()
},[CreateModal])

const Delete =async (id) =>{
    console.log("halooooooooooooooooooooooooooooooooooooo")
    const Response = await axios.post("http://localhost:3000/DeletData",{id})
  }


  const EditButton = async(id) =>{

   const Response = await axios.post("http://localhost:3000/GetRowById",{id})
//    console.log(Response.data.data.);
   setEditData(Response.data.data)
    console.log(id,"this is id")
     setEditmodal(true)
  }

  const updateData = async(id) =>{
    const Response = await axios.post("http://localhost:3000/Update",{id,heading, description, date, time, image, size})
    console.log(Response.data)
    setEditmodal(false)
  }

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
                                            onChange={(e)=>{setHeading(e.target.value)}}
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
                                            onChange={(e)=>{setDescription(e.target.value)}}
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
                                                onChange={(e)=>{setDate(e.target.value)}}
                                                className="w-full h-10 border-black border-2 rounded-lg bg-transparent flex"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full h-8 flex items-center">
                                                <h1 className="font-semibold text-black ml-1">
                                                    Time
                                                    <span className="font-semibold text-red-700 ml-1">*</span>
                                                </h1>
                                            </div>
                                            <input
                                                type="Time"
                                                name="Username"
                                                onChange={(e)=>{setTime(e.target.value)}}
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
                                        <select onChange={(e)=>{setSize(e.target.value)}} name="mySelect" className="w-full  font-bold text-lg h-10 border-2 border-black text-center ">
                                            <option value="Low">Low</option>
                                            <option value="Meadium">Meadium</option>
                                            <option value="High">High</option>
                                            <option value="All">All</option>
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
                                            {
                                                SelectedFilesProfile?(SelectedFilesProfile):(<>Upload Image here</>)
                                            }
                                            
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
                                           onClick={(e)=>{e.preventDefault(),CreateData()}}
                                        >
                                            Create
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </>) : (<>

                {
                    EditModal?(<>
                          <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6 ">
                            <div className=" justify-between items-center mb-4">
                                <div className="w-full h-10  flex justify-center items-center mb-1 border-2 border-black">
                                    <h1 className="font-bold text-lg text-center ">Update Task </h1>
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
                                            onChange={(e)=>{setHeading(e.target.value)}}
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
                                            onChange={(e)=>{setDescription(e.target.value)}}
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
                                                onChange={(e)=>{setDate(e.target.value)}}
                                                className="w-full h-10 border-black border-2 rounded-lg bg-transparent flex"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full h-8 flex items-center">
                                                <h1 className="font-semibold text-black ml-1">
                                                    Time
                                                    <span className="font-semibold text-red-700 ml-1">*</span>
                                                </h1>
                                            </div>
                                            <input
                                                type="Time"
                                                name="Username"
                                                onChange={(e)=>{setTime(e.target.value)}}
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
                                        <select onChange={(e)=>{setSize(e.target.value)}} name="mySelect" className="w-full  font-bold text-lg h-10 border-2 border-black text-center ">
                                            <option value="Low">Low</option>
                                            <option value="Meadium">Meadium</option>
                                            <option value="High">High</option>
                                            <option value="All">All</option>
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
                                            {
                                                SelectedFilesProfile?(<>{SelectedFilesProfile}</>):(<>Upload Image here</>)
                                            }
                                            
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
                                            onClick={() => { setEditmodal(false) }}
                                        >
                                            Cancel
                                        </div>
                                        <div
                                            className="w-1/2 h-10 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white flex justify-center items-center font-bold text-lg hover:cursor-pointer"
                                           onClick={(e)=>{e.preventDefault(),updateData(EditData.id)}}
                                        >
                                            Update
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    </>):(<>
                    
                    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
                        <div className="w-10/12 h-5/6 bg-white rounded-3xl shadow-2xl p-1">
                            <div className="w-full h-full  ">
                                <div className="w-full h-14  flex justify-end items-center">
                                    <select name="mySelect" className="w-2/12 font-serif font-bold text-lg h-10 bg-black text-white mx-2 hover:bg-transparent hover:border-2 hover:border-black hover:text-black text-center ">
                                        <option  className="w-full h-10 bg-red-100" >Filter</option>
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
                                {
                                    fetchedData.map((item,index)=>(
                                      
                                    <div className="w-full h-32  border-2 border-black mb-1  p-1" key={item.id} >
                                        <div className="w-full h-full  p-1 flex gap-3">
                                            <div className=" w-1/5 h-full border-2 border-black ">
                                                <img
                                                    src={item.image}
                                                    alt="no image"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="w-3/5 h-full   ">
                                        
                                                <div className="w-full h-14 overflow-hidden flex justify-between items-center  ">
                                                    <h2 className="font-serif font-bold text-xl underline">{item.heading}</h2>
                                                    <div className="w-1/3 h-full ">
                                                        <div className="w-full h-8 ">
                                                            <marquee behavior="" direction="">
                                                            <h1 className="text-base text-stone-400">Date:{convertISOToReadableDate(item.date)}</h1>
                                                            </marquee>
                                                        </div>
                                                        <div className="w-full h-8 ">
                                                            <marquee behavior="" direction="">
                                                        <h1 className="text-base text-stone-400">Time:{item.time}</h1>
                                                            </marquee>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="w-full h-12  mt-1 overflow-auto flex justify-start items-start">
                                                    <h1 className="font-semibold text-lg" >{item.description} </h1>
                                                </div>
                                            </div>
                                            <div className="w-[200px] h-full ">
                                                <div className="w-full h-1/2 ">
                                                    <button className="w-full h-full border-2 border-black text-xl font-bold  hover:text-white hover:bg-black" onClick={()=>{EditButton(item.id)}} >Edit</button>
                                                </div>
                                                <div className="w-full h-1/2 mt-1 ">
                                                    <button className="w-full h-full bg-black text-white  hover:text-black hover:bg-transparent hover:border-2 border-black text-xl font-bold" onClick={()=>Delete(item.id)}  >Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            ))
                        }
                            </div>
                                </div>
                        </div>
                    </div>
                    </>)
                }
                </>)
            }
        </div>
    );
};

export default Page;
