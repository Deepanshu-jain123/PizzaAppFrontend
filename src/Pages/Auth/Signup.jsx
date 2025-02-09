function Signup(){
    return(
        <>
            <section className="text-gray-600 body-font">
                <div className="flex flex-wrap items-center h-screen px-10 py-6 mx-auto">
                    
                    <form className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                        {/* <h2 clasName="mb-5 textlg font-medium text-gray-900 title-font"> Sign up</h2> */}
 
                        <div className="relative mb-4">
                            <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">First Name</label>
                            <input type="text" id="firstName" name="firstName" className="w-full px-3 py-1 mt-2 text-base leading-8 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup;