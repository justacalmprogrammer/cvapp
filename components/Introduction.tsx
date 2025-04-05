import { Mail, Paperclip } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import Container from "./container";

const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello i´m</h3>
                <h1 className="text-4xl font-bold mb-3">JustaCalmDeveloper</h1>
                <h2 className="text-2xl text-gray-400">(FullstackDeveloper)</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justifybetween mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> Contacta Conmigo
                        </Link>
                        <Link className={buttonVariants({ variant: 'secondary' })}
                            href="/cv-pons.pdf"
                            target="_blank">
                            <Paperclip className="mr-2" />Descargar pdf
                        </Link>

                    </div>

                </div>
                <Image src="/Logito-2.png" alt="Profile pic" width={500} height={500} />
            </div>
        </Container>
    );
}

export default Introduction;