export function MainPage({children}){
    return(
        <>

        <div className="h-72 w-80 bg-purple-700 text-white rounded-2xl mt-10 relative right-36">
            {children}
        </div>

        </>
    )
}

export function MainPage2({children}){
    return(
    
        <>
         
        <div className="h-32 w-80 bg-green-700 text-white rounded-2xl mt-10 relative right-36 p-10 text-2xl">
            {children}
        </div>
        
        
        </>



    )
}


