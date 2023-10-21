import React, { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";

const Page = () => {
    const [CreateModal,SetCreateModel] = useState()
     const [EditModal,setEditmodal] = useState()
    return (
        <div>
         {
            CreateModal?(<>
            <CreateTaskModal props = {SetCreateModel} />
            </>):(<>
                <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
                <div className="w-10/12 h-5/6 bg-white rounded-3xl shadow-2xl p-1">
                    <div className="w-full h-full  ">
                        <div className="w-full h-14  flex justify-end items-center">
                            <select name="mySelect"  className="w-2/12 font-serif font-bold text-lg h-10 bg-black text-white mx-2 hover:bg-transparent hover:border-2 hover:border-black hover:text-black text-center ">
                                <option value="option1"className="w-full h-10 bg-red-100" >Filter</option>
                                <option value="option1">Low</option>
                                <option value="option2">Meadium</option>
                                <option value="option3">High</option>
                                <option value="option3">All</option>
                            </select>
                            <button className="w-2/12 font-serif font-bold text-lg h-10 bg-black text-white mx-2 hover:bg-transparent hover:border-2 hover:border-black hover:text-black " onClick={()=>SetCreateModel(true)}>
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
