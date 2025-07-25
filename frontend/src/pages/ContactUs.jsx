function ContactUs(){
    return(
        <div className="bg-background min-h-screen text-bone">
            <div 
                className="max-w-5xl mx-auto bg-chest/10 backdrop-blur-sm py-2 border-t border-b border-dark/40 pt-2 mb-2"
                style={{
                    boxShadow: `inset 0 4px 12px rgba(0, 0, 0, 0.3),
                                inset 0 -4px 8px rgba(0, 0, 0, 0.15)`
                }}
            >
                <h1 className="text-4xl font-heading mt-2 mb-2 text-center text-sand">
                    <span className="mr-2">&dagger;</span> 
                    Contact Us 
                    <span className="ml-2 inline-block transform -scale-x-100">&dagger;</span>
                </h1>
            </div>
            <div className="p-6"></div>
        </div>
    );

}
export default ContactUs;