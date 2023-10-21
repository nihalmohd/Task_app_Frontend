import React from 'react'

const CreateTaskModal = (SetCreateModel) => {
  return (

         <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6 ">
          <div className=" justify-between items-center mb-4">
            <div className="w-full h-10  flex justify-center items-center mb-1 border-2 border-black">
              <h1 className="font-bold text-lg text-center ">Update Profile</h1>
            </div>
            <form action="">
              <div className="w-full ">
                <div className="w-full h-8 flex items-center">
                  <h1 className="font-semibold text-black ml-1">
                    Username
                    <span className="font-semibold text-red-700 ml-1">*</span>
                  </h1>
                </div>
                <input
                  type="text"
                  name="Username"
                  placeholder="Please Enter Your Username"
                  className="w-full h-10 border-black border-2 rounded-lg bg-transparent"
                />
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
                 
                >
                  Upload Profile Image
                </div>
                <input
                  type="file"
                  name="Profile"
                  placeholder="Please Enter a Subcategory Name"
                  className="w-full h-10 border-black border-2 rounded-lg bg-transparent hidden"
                />
              </div>
              {/* <div className="w-full h-32 bg-yellow-100"></div> */}
              <div className="w-full h-10  mt-2 flex gap-1 ">
                <div
                  className="w-1/2 h-10 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white flex justify-center items-center font-bold text-lg hover:cursor-pointer"
                 
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
   
  )
}

export default CreateTaskModal