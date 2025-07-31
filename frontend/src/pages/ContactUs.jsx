import HeaderSymbol from '../components/HeaderSymbol';
import ContactForm from '../components/ContactForm';

function ContactUs(){
    return(
        <div className="bg-background min-h-screen text-bone">
            <div 
                className="mx-auto bg-chest/10 backdrop-blur-sm py-2 border-t border-b border-dark/40 pt-2 mb-2"
                style={{
                    boxShadow: `inset 0 4px 12px rgba(0, 0, 0, 0.3),
                                inset 0 -4px 8px rgba(0, 0, 0, 0.15)`
                }}
            >
                <h1 className="text-4xl font-heading mt-2 mb-2 text-center text-sand">
                    <HeaderSymbol finalSymbol="†" />
                    <span className="mx-2">Contact Us</span>
                    <span className="inline-block transform -scale-x-100">
                        <HeaderSymbol finalSymbol="†" />
                    </span>
                </h1>
            </div>
            <div className="p-6">
                <ContactForm />
            </div>
            <p className="text-center font-display">
            {" "}
                <a href="mailto:contact@stolenstreetsigns.com" className="text-sand underline hover:text-bone">
                    contact@stolenstreetsigns.com
                </a>
            </p>

        </div>
    );

}
export default ContactUs;