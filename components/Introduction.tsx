import { Mail, Paperclip } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Introduction = () => {
    return (
        <div>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3"></h3>
                <h1 className="text-4xl font-bold mb-3"></h1>
                <h2 className="text-2xl text-gray-400"></h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justifybetween mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> Contacta Conmigo
                        </Link>
                        <Link className={buttonVariants({ variant: 'secondary' })}
                            href="/cv-pons.pdf"
                            target="_blank">
                            <Paperclip className="mr-2"/>Descargar pdf
                            </Link>

                    </div>

                </div>
            </div>
        </div >
    );
}

export default Introduction;